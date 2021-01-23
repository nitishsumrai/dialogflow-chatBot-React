//  this file will store all the functions which are being used mulitple times
export function getFormBody(params) {
  let formBody = [];
  for (let property in params) {
    // "user name" = "user%20name"
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(params[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  return formBody.join("&");
}
