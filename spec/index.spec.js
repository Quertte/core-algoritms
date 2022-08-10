const { fib, fibFac } = require('../fibonachi');
const { factorial, factorialRec } = require('../factorial');

describe('Проверка реализаций фибоначи', () => {
  it('Проверка итеративной реализации', () => {
    expect(fib(7)).toEqual(13);
    expect(fib(6)).toEqual(8);
    expect(fib(30)).toEqual(832040);
  });
  it('Проверка рекурсивной реализации', () => {
    expect(fibFac(7)).toEqual(13);
    expect(fibFac(6)).toEqual(8);
    expect(fibFac(30)).toEqual(832040);
  })

  it('Проверка итеративной реализации факториала', () => {
    expect(factorial(5)).toEqual(120);
    expect(factorial(4)).toEqual(24);
    expect(factorial(7)).toEqual(5040);
  })

  it('Проверка рекурсивной реализации факториала', () => {
    expect(factorialRec(5)).toEqual(120);
    expect(factorialRec(4)).toEqual(24);
    expect(factorialRec(7)).toEqual(5040);
  })
})
