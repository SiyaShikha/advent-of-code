const input = Deno.readTextFileSync("./input.txt");
const modules = input.split("\n");

const part_1 = (modules) => {
  return modules.reduce((acc, m) => {
    return acc + (Math.floor(m / 3) - 2);
  }, 0);
};

console.log(part_1(modules));

const part_2 = (modules) => {
  const fuels = modules.map((m) => {
    let totalFuel = 0;
    while (m > 5) {
      m = Math.floor(m / 3) - 2;
      totalFuel += m;
    }
    return totalFuel;
  });

  return fuels.reduce((acc, f) => acc + f, 0);
};

console.log(part_2(modules));
