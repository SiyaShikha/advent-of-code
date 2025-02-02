import { intCodeRunner } from "./intCodeLib.js";

const input = Deno.readTextFileSync("./input.txt");
const code = input.split(",").map((e) => +e);
code[1] = 12;
code[2] = 2;

const main = (code) => {
  try {
    const { inputCode, outputCode } = intCodeRunner(code.map((n) => +n));
    // console.log("Input Code", inputCode);
    console.log("Output Code", outputCode);
  } catch (err) {
    console.error(err);
  }
};

main(code);
