const [start, end] = [136818, 685979];

const isValidPassword = (password) => {
  const digits = password.toString().split("");
  let hasAdjacentDigits = false;
  let areDigitsIncreasing = true;

  for (let i = 0; i < digits.length - 1; i++) {
    if (digits[i] === digits[i + 1]) {
      hasAdjacentDigits = true;
    }
    if (digits[i] > digits[i + 1]) {
      areDigitsIncreasing = false;
      break;
    }
  }

  return hasAdjacentDigits && areDigitsIncreasing;
};

const totalValidPasswords = (start, end) => {
  let numOfPass = 0;
  for (let i = start; i <= end; i++) {
    if (isValidPassword(i)) {
      numOfPass++;
    }
  }
  return numOfPass;
};

const part_1 = (start, end) => {
  return totalValidPasswords(start, end);
};

console.log(part_1(start, end));
