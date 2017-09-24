

export const phoneCheck = function(phone){
  return $.ajax({
    method: 'GET',
    url: `./api/phone`,
    data: {phone: phone}
  });
};

export const sendMail = function(email, forms){
  return $.ajax({
    method: 'POST',
    url: `./api/mailer`,
    data: {email: email, forms: forms}
  });
};
