import { Memory } from "./memory.js";
import { commands } from "./commands.js";

const execute = (memory, programCounter) => {
  const command = memory.getCellValue(programCounter);

  if (!(command in commands)) {
    throw { type: "invalid code", msg: "Check your input and try again!" };
  }
  return commands[command](memory, programCounter);
};

const intCodeRunner = (rawInputCode) => {
  const memory = new Memory(rawInputCode);
  let programCounter = 0;

  while (memory.getCellValue(programCounter) !== 99) {
    programCounter = execute(memory, programCounter);
  }

  return { inputCode: rawInputCode, outputCode: memory.getData() };
};

export { intCodeRunner };
