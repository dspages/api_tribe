const credentials = require('./credentials.js');
const telesign = require('./telesign.js');

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