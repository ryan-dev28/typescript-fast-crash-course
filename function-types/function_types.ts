let stringFunction = (): void => {
  console.log("Hello!");
}

let calc = (val1: number, val2: number): number => {
  let total = val1 + val2;
  return total;
}

let universal: (val1: number, val2: number) => number;

universal = calc;

console.log(universal(1, 2));
