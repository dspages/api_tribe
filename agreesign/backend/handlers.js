const credentials = require('./credentials.js');
const telesign = require('./telesign.js');
const docusign = require('./docusign.js');

exports.verify = (req, res, phoneNumber) => {
  if (phoneNumber === '19999999999') {
    const badScore = {
      "level": "high",
      "recommendation": "block",
      "score": 999
    }
    return res.status(200).json(badScore);
  }
  const setup = telesign.tele(phoneNumber);
  const teles = setup[0];
  const score = setup[1];
  const accountLifecycleEvent = setup[2];
  let trustScore;
  teles.score.score(function(err, response) {
      return res.status(200).json(response.risk);
  },  phoneNumber,
      accountLifecycleEvent
  );
}



exports.document = (req, res) => {

  const docs = ["d46d2552-1f57-4637-a2f7-658df750aff6",
                "8ee36bb5-1636-4f5a-a29a-193974abf2b4",
                "8cb75531-7331-4eb2-9879-19d835acb74a",
                "0e7b4198-a63e-4947-aaaf-88e5715b3b59",
                "a2b9484a-a1e9-441d-8d75-56cd26700aeb",
                "4e66d9a1-0ff3-41fc-89f1-babc1313ad1e",
                "922a6387-32db-45c6-b995-49972f2c7a34",
                "e9b318a4-fa9c-4acf-a343-2b07cb28a242",
               ];
  const recipientName = "johny rocket";
  const email = req.body.email;
  const forms = req.body.forms.substr(1, req.body.forms.length - 2).split(', ');
  for (let i = 0; i < forms.length; i++) {
        if (forms[i] === 'true') {
          docusign.test(credentials.email, credentials.password, credentials.integratorKey, recipientName, docs[i], email);
        }
  }
  return res.status(200).json('noice');
}