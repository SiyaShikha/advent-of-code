import { intCodeRunner } from "./intCodeLib.js";

const input = Deno.readTextFileSync("./input.txt");
const code = input.split(",").map((e) => +e);

const part_1 = (code) => {
  try {
    code[1] = 12;
    code[2] = 2;
    const { outputCode } = intCodeRunner(code);
    return outputCode;
  } catch (err) {
    console.error(err);
  }
};

console.log("part 1: ", part_1(code));

const part_2 = (code) => {
  let codeCopy = [...code];
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      codeCopy[1] = noun;
      codeCopy[2] = verb;
      const { outputCode } = intCodeRunner(codeCopy);
      if (outputCode[0] === 19690720) {
        return 100 * noun + verb;
      }
      codeCopy = code;
    }
    codeCopy = code;
  }
};

console.log("part 2: ", part_2(code));
