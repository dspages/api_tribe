const baseURL = 'https://api-tribe.aiwins.io/';
const header = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/x-www-form-urlencoded',
});

export const phoneCheck = function(phone){
  return fetch(`${baseURL}verify/${phone}`,
    {
    header,
    method: 'GET',
  });
};

export const sendMail = function(email, forms){
  let data = email + 'MMMM' + forms.join('MMMM')
  console.log(data)
  return fetch(`${baseURL}document/${data}`, { header,
    method: 'GET',
  });
};
