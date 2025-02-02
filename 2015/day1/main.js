const input = Deno.readTextFileSync("./input.txt");
const instructions = input.split("");

const finalFloor = (instructions) => {
  let currentFloor = 0;
  instructions.forEach((i) => {
    currentFloor = i === "(" ? currentFloor + 1 : currentFloor - 1;
  });
  return currentFloor;
};

const basementEntry = (instructions) => {
  let currentFloor = 0;
  let i = 0;
  while (currentFloor !== -1) {
    currentFloor += instructions[i] === "(" ? 1 : -1;
    i++;
  }
  return i;
};

console.log("current floor : ", finalFloor(instructions));
console.log("First entry to basement", basementEntry(instructions));
