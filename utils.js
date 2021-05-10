const fs = require("fs");


const getInput = (value) => {
  return value ? fs.createReadStream(value) : process.stdin;
};

const getOutput = (value) => {
  return value
    ? fs.createWriteStream(value, { flags: "a", encoding: "utf-8" })
    : process.stdout;
};

const showError = (value) => {
  process.stderr.write(value + "\n");
  process.exit(1);
};

const checkOptions = (action, shift, input, output) => {
  if ((action !== "encode" && action !== "decode") || !action) {
    showError(
      !action
        ? `No argument passed --action`
        : "You can pass these arguments as encode or decode"
    );
  }
  if (!shift || isNaN(shift)) {
    showError(
      !shift ? `No argument passed --shift` : "this argument is not a number"
    );
  }
  if (input) {
    try {
      fs.accessSync(input, fs.constants.R_OK);
    } catch (err) {
      showError(err);
    }
  }
  if (output) {
    try {
      fs.accessSync(output, fs.constants.W_OK);
    } catch (err) {
      showError(err);
    }
  }
};

module.exports = { getInput, getOutput, showError, checkOptions };
