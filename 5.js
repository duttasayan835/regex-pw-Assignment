const URLPATTERN =
  /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[/]@![$]&'()[*][+],;=%][+][.][a-zA-Z][+][$]/;
function isValid(input) {
  return URLPATTERN.test(input);
}
const url = "https://pwskills.com";
if (isValid(URL)) {
  console.log(`"${URL} is a valid URL`);
} else {
  console.log(`"${URL} is not a valid URL`);
}
