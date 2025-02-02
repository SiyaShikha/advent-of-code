const add = (memory, instructionCounter) => {
  const left = memory.getPointerValue(instructionCounter + 1);
  const right = memory.getPointerValue(instructionCounter + 2);
  const resultCell = memory.getCellValue(instructionCounter + 3);
  memory.setCellValue(resultCell, left + right);

  return instructionCounter + 4;
};

const multiply = (memory, instructionCounter) => {
  const left = memory.getPointerValue(instructionCounter + 1);
  const right = memory.getPointerValue(instructionCounter + 2);
  const resultCell = memory.getCellValue(instructionCounter + 3);
  memory.setCellValue(resultCell, left * right);

  return instructionCounter + 4;
};

const instructions = {
  1: add,
  2: multiply,
};

export { instructions };
