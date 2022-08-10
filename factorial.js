function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function factorialRec(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorialRec(n - 1);
}

module.exports = { factorial, factorialRec };
