const input = "Sayan Dutta";
function reverseString(input) {
  return input.split("").reverse().join("");
}
function reverseDelay(input) {
  setTimeout(function () {
    let reverse = reverseString(input);
    console.log("Reversed String:" + reverse);
  }, 2000);
}
reverseDelay(input);
