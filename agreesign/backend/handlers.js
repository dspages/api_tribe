const credentials = require('./credentials.js');
const telesign = require('./telesign.js');

exports.verify = (req, res, phoneNumber) => {
  const setup = telesign.tele(phoneNumber);
  const teles = setup[0];
  const score = setup[1];
  const accountLifecycleEvent = setup[2];
  let trustScore;
  teles.score.score(function(err, response) {
      return res.status(200).json({ score: response });
  },  phoneNumber,
      accountLifecycleEvent
  );
}