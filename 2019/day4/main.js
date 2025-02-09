const [start, end] = [136818, 685979];

// const isValidPassword = (password) => {
//   const digits = password.toString().split("");
//   let hasAdjacentDigits = false;
//   let areDigitsIncreasing = true;

//   for (let i = 0; i < digits.length - 1; i++) {
//     if (digits[i] === digits[i + 1]) {
//       hasAdjacentDigits = true;
//     }
//     if (digits[i] > digits[i + 1]) {
//       areDigitsIncreasing = false;
//       break;
//     }
//   }

//   return hasAdjacentDigits && areDigitsIncreasing;
// };

const isValidPassword = (password) => {
  const digits = password.toString().split("");
  let areDigitsIncreasing = true;
  const digitsCount = {};

  for (let i = 0; i < digits.length; i++) {
    digitsCount[digits[i]] = (digitsCount[digits[i]] || 0) + 1;

    if (i > 0 && digits[i] < digits[i - 1]) {
      areDigitsIncreasing = false;
      break;
    }
  }

  const hasValidAdjacentDigits = Object.values(digitsCount).includes(2);
  return hasValidAdjacentDigits && areDigitsIncreasing;
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

console.log(totalValidPasswords(start, end));
