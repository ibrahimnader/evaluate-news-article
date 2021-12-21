function validateUrl(value) {
  var expression =
    /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regexp = new RegExp(expression);
  return regexp.test(value);
}
async function post (url) {
  try {
  const response =  await fetch('http://localhost:8081/api', {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({ 
      URL: url 
  })
  });
  let data=response.json()
  return data
  } catch (error) {
    console.log(error);
  }
};

export {validateUrl,post};
