const input = Deno.readTextFileSync("./input.txt");
const [wire1, wire2] = input.split("\n"); //U4,D5,L6,R8

const parseRawWireData = (wire) => {
  return wire.split(",").map((inst) => [inst[0], +inst.slice(1)]);
};

const allCrossedPoints = (wire) => {
  const instructions = parseRawWireData(wire);
  const points = instructions.reduce(
    (acc, [inst, value]) => {
      let [varAxis, inc] = ["x", 1];
      if (inst === "L") {
        inc = -1;
      }
      if (inst === "U") {
        varAxis = "y";
      }
      if (inst === "D") {
        varAxis = "y";
        inc = -1;
      }
      for (let i = 1; i <= value; i++) {
        const lastPoint = acc.at(-1);
        const newPoint = { ...lastPoint };
        newPoint[varAxis] += inc;
        acc.push(newPoint);
      }
      return acc;
    },
    [{ x: 0, y: 0 }]
  );
  return points;
};

const intersections = (p1, p2) => {
  const intersectionPoints = [];
  for (let i = 1; i < p1.length; i++) {
    for (let j = 1; j < p2.length; j++) {
      if (p1[i].x === p2[j].x && p1[i].y === p2[j].y) {
        intersectionPoints.push(p1[i]);
      }
    }
  }
  return intersectionPoints;
};

const minSteps = (p1, p2) => {
  let steps = Infinity;
  for (let i = 1; i < p1.length; i++) {
    for (let j = 1; j < p2.length; j++) {
      if (p1[i].x === p2[j].x && p1[i].y === p2[j].y) {
        steps = Math.min(steps, i + j);
      }
    }
  }
  return steps;
};

const part_1 = (wire1, wire2) => {
  const wire1Points = allCrossedPoints(wire1);
  const wire2Points = allCrossedPoints(wire2);
  const intersectionPoints = intersections(wire1Points, wire2Points);

  const manhattenDistance = Math.min(
    ...intersectionPoints.map(({ x, y }) => Math.abs(x) + Math.abs(y))
  );

  return manhattenDistance;
};

const part_2 = (wire1, wire2) => {
  const wire1Points = allCrossedPoints(wire1);
  const wire2Points = allCrossedPoints(wire2);
  return minSteps(wire1Points, wire2Points);
};

// console.log(part_1(wire1, wire2));
console.log(part_2(wire1, wire2));
