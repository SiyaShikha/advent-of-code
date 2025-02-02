const add = (memory, programCounter) => {
  const left = memory.getPointerValue(programCounter + 1);
  const right = memory.getPointerValue(programCounter + 2);
  const resultCell = memory.getCellValue(programCounter + 3);
  memory.setCellValue(resultCell, left + right);

  return programCounter + 4;
};

const multiply = (memory, programCounter) => {
  const left = memory.getPointerValue(programCounter + 1);
  const right = memory.getPointerValue(programCounter + 2);
  const resultCell = memory.getCellValue(programCounter + 3);
  memory.setCellValue(resultCell, left * right);

  return programCounter + 4;
};

const commands = {
  1: add,
  2: multiply,
};

export { commands };
