const [start, end] = [136818, 685979];

const possiblePasswords = (start, end) => {
  let numOfPass = 0;
  for (let i = start; i <= end; i++) {
    const digits = i.toString().split("");
    let condition1 = false;
    let condition2 = true;
    for (let i = 0; i < digits.length - 1; i++) {
      if (digits[i] === digits[i + 1]) {
        condition1 = true;
      }
      if (digits[i] > digits[i + 1]) {
        condition2 = false;
      }
    }
    if (condition1 && condition2) {
      numOfPass += 1;
    }
  }
  return numOfPass;
};

possiblePasswords();

const part_1 = (start, end) => {
  const numOfPass = possiblePasswords(start, end);
  return numOfPass;
};

console.log(part_1(start, end));
