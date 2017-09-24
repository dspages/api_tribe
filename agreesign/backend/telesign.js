const credentials = require('./credentials.js');



exports.tele = (phoneNumber) => {
    const restEndpoint = "https://rest-api.telesign.com";
    const TeleSignSDK = require('telesignsdk');
    const ScoreClient = require('telesignsdk/src/ScoreClient');
    const timeout = 10*1000; // 10 secs
    const accountLifecycleEvent = "create";
    const method = 'GET';
    let customerID;
    let apiKey;
    if (phoneNumber === credentials.gNum) {
        customerID = credentials.gID;
        apiKey = credentials.gKey;
    } else {
        customerID = credentials.cID;
        apiKey = credentials.cKey;
    }
    const telesign = new TeleSignSDK(customerID, apiKey, restEndpoint, timeout);
    const score = new ScoreClient(customerID, apiKey, restEndpoint, 10*1000);
    return [telesign, score, accountLifecycleEvent];
    
}