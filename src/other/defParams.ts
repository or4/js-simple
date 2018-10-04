
const cube = (x: number) => x ** 3;

export function defParams(x: number, y = x * x, z = cube(x)) {
  console.log(`x=${x}, square=${y}, cube=${z}`);
}

export function scope1() {
  console.log('scope1 start');
  const x: number = 1;

  function foo(x: number, y = function() { x = 5 }, z = () => { x = 11 }) {
    console.log(x); // Нет, по-прежнему 3, не 2
    y(); // Параметр `x` разделяется с телом функции?
    console.log(x); // Нет, по-прежнему 3, не 2
    z();
    console.log(x); // Нет, по-прежнему 3, не 2
  }

  foo(8);

  // И внешний `x` также остался нетронутым.
  console.log(x); // 1
}