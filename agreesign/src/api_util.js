

export const phoneCheck = function(phone){
  return fetch(`./api/phone`,
    {
    method: 'GET',
    body: {phone: phone}
  });
};

export const sendMail = function(email, forms){
  return fetch(
    `./api/mailer`,
    {
    method: 'POST',
    body: {email: email, forms: forms}
  });
};
