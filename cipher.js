module.exports.caesarCipher = (text, shift, code) => {
  shift = code === "encode" ? shift : -shift;
  if (shift < 0) shift += 26;
  return text.split("").reduce((newText, letter, i) => {
    if (letter.match(/[a-z]/i)) {
      let code = text.charCodeAt(i);
      let number = code >= 65 && code <= 90 ? 65 : 97;
      letter = String.fromCharCode(((code - number + shift) % 26) + number);
    }
    return (newText += letter);
  }, "");
};
