import { Memory } from "./memory.js";
import { instructions } from "./instructions.js";

const execute = (memory, instructionCounter) => {
  const command = memory.getCellValue(instructionCounter);

  if (!(command in instructions)) {
    throw { type: "invalid code", msg: "Check your input and try again!" };
  }
  return instructions[command](memory, instructionCounter);
};

const intCodeRunner = (rawInputCode) => {
  const memory = new Memory(rawInputCode);
  let instructionCounter = 0;

  while (memory.getCellValue(instructionCounter) !== 99) {
    instructionCounter = execute(memory, instructionCounter);
  }

  return { inputCode: rawInputCode, outputCode: memory.getData() };
};

export { intCodeRunner };
