

export const phoneCheck = function(phone){
  return fetch(`./api/phone`,
    {
    method: 'GET',
    data: {phone: phone}
  });
};

export const sendMail = function(email, forms){
  return fetch(
    `./api/mailer`,
    {
    method: 'POST',
    data: {email: email, forms: forms}
  });
};
