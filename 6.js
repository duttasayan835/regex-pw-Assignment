const linkedIn =
  /^https:\/\/www.\.Linkedin\.com\/[a-zA-z0-9_-][{5,30}][a-zA-Z0-9]/;
function isvalid(url) {
  return linkedIn.test(url);
}
let url = "https://www.Linkedin.com/in/mithun-s-83a8a3186/";
if (isvalid(url)) {
  console.log(`"${url}" is a valid url`);
} else {
  console.log(`"${url}" is not a valid url`);
}
