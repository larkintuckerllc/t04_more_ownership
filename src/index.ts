const calculateLength = (arr: number[]): number => {
  const len = arr.length;
  arr.length = 0; // UNEXPECTED SIDE EFFECT
  return len;
}

const change = (arr: number[]) => {
  arr.push(100);
}

const firstTwo = (arr: number[]): number[] => arr.slice(0, 2);

const arr = [0, 1, 2];
const len = calculateLength(arr);
console.log(`The length of ${arr} is ${len}`); // [] 3

const arr1 = [0, 1, 2];
const r1 = arr1;
const r2 = arr1;
const r3 = arr1;
change(r3);
console.log(`The value of r1 is: ${r1}`); // [0, 1, 2, 100]
console.log(`The value of r2 is: ${r2}`); // [0, 1, 2, 100]
console.log(`The value of r3 is: ${r3}`); // [0, 1, 2, 100]

const arr2 = [0, 1, 2];
const first = firstTwo(arr2);
console.log(`The value of first is: ${first}`); // [0, 1]
arr2.length = 0;
console.log(`The value of first is: ${first}`); // [0, 1]

const hello = 'hello';
console.log(`The value of hello is: ${hello}`); // hello
