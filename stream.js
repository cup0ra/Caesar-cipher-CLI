const { pipeline, Transform } = require("stream");
const { caesarCipher } = require("./cipher.js");
const { getInput, getOutput, showError } = require("./utils.js");

const textTransformation = (inputFile, outputFile, shift, action) => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      try {
        callback(null, caesarCipher(chunk.toString(), +shift, action));
      } catch (e) {
        callback(e);
      }
    },
  });
  pipeline(
    getInput(inputFile),
    transformStream,
    getOutput(outputFile),
    (err) => {
      showError(err);
    }
  );
};

module.exports = { textTransformation };
