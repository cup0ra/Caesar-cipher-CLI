const { program } = require("commander");
const { textTransformation } = require("./stream.js");
const { checkOptions } = require("./utils.js");

program
  .option("-s, --shift <integer>", "a shift")
  .option("-i, --input [file]", " an input file")
  .option("-o, --output [file]", "an output file")
  .option("-a, --action [action]", "an action encode/decode");

program.parse(process.argv);
const { action, shift, input, output } = program.opts();

checkOptions(action, shift, input, output);
textTransformation(input, output, shift, action);
