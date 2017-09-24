var 	async = require("async"),	// async module
	request = require("request");	// request module

exports.test = function(email, password, integratorKey, recipientName, templateId, toEmail, templateRoleName = 'signer', baseUrl = '',) {
	async.waterfall(
	[
		//////////////////////////////////////////////////////////////////////
		// Step 1 - Login (used to retrieve accountId and baseUrl)
		//////////////////////////////////////////////////////////////////////
		function(next) {
			var url = "https://demo.docusign.net/restapi/v2/login_information";
			var body = "";	// no request body for login api call

			// set request url, method, body, and headers
			var options = initializeRequest(url, "GET", body, email, password);

			// send the request...
			request(options, function(err, res, body) {
				if(!parseResponseBody(err, res, body)) {
					return;
				}
				baseUrl = JSON.parse(body).loginAccounts[0].baseUrl;
				next(null); // call next function
			});
		},

		//////////////////////////////////////////////////////////////////////
		// Step 2 - Request Signature via Template
		//////////////////////////////////////////////////////////////////////
		function(next) {
			var url  = baseUrl + "/envelopes";
			var body = JSON.stringify({
					"emailSubject": "DocuSign API call - Request Signature",
					"templateId": templateId,
					"templateRoles": [{
						"email": toEmail,
						"name": recipientName,
						"roleName": templateRoleName
					}],
					"status": "sent"
				});

			// set url, method, body, and headers
			var options = initializeRequest(url, "POST", body, email, password);

			// send the request...
			request(options, function(err, res, body) {
				parseResponseBody(err, res, body);
			});
		}
	]);

	//***********************************************************************************************
	// --- HELPER FUNCTIONS ---
	//***********************************************************************************************
	function initializeRequest(url, method, body, email, password) {
		var options = {
			"method": method,
			"uri": url,
			"body": body,
			"headers": {}
		};
		addRequestHeaders(options, email, password);
		return options;
	}

	///////////////////////////////////////////////////////////////////////////////////////////////
	function addRequestHeaders(options, email, password) {
		// JSON formatted authentication header (XML format allowed as well)
		dsAuthHeader = JSON.stringify({
			"Username": email,
			"Password": password,
			"IntegratorKey": integratorKey	// global
		});
		// DocuSign authorization header
		options.headers["X-DocuSign-Authentication"] = dsAuthHeader;
	}

	///////////////////////////////////////////////////////////////////////////////////////////////
	function parseResponseBody(err, res, body) {
		console.log("\r\nAPI Call Result: \r\n", JSON.parse(body));
		if( res.statusCode != 200 && res.statusCode != 201)	{ // success statuses
			console.log("Error calling webservice, status is: ", res.statusCode);
			console.log("\r\n", err);
			return false;
		}
		return true;
	}
};
