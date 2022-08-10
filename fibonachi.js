function fib(n) {
  return generateFib(n).at(-1);
}

function generateFib(n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

function fibFac(n) {
  if (n === 2 || n === 1) {
    return 1;
  }
  return fibFac(n - 1) + fibFac(n - 2);
}

console.log(fibFac(30));


module.exports = { fib, fibFac };
