let word = "Salam olsun Yaxsilara";

function stringLengths(str1) {
  let wordLengths = [];
  let chars = str1.split(" ");
  for (let i = 0; i < chars.length; i++) {
    wordLengths[i] = chars[i].length;
  }
  return wordLengths;
}
console.log(stringLengths(word));
