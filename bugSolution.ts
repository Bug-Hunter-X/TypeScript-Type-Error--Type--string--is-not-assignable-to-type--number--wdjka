function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if(isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: Inputs must be numbers or parsable strings');
  }
  return numA + numB;
}

let result1 = add(1, 2); // Works correctly
let result2 = addSafe(1, "2"); // Works correctly
let result3 = addSafe("1", 2); // Works correctly
let result4 = addSafe("a", 2); // Throws an error because "a" is not a number
//let result5 = add(1, "2"); // This will still result in a compilation error