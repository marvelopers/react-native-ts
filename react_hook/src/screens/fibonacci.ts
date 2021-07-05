export const fibonacci = (num: number): number =>
  num > 2 ? fibonacci(num - 1) + fibonacci(num - 2) : num;
