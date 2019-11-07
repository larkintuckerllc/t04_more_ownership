const doSomething = () => {
  const x = 5;
  console.log(`The value of x is: ${x}`); // 5
}

const doSomethingElse = () => {
  const arr = [0, 1, 2];
  console.log(`The first value of arr is: ${arr[0]}`); // 0
}

const doEvenMore = () => {
  const arr = [0, 1, 2];
  arr.push(3);
  console.log(`The fourth value of arr is: ${arr[3]}`); // 3
}

const doSomethingCrazy = () => {
  const x = 5;
  console.log(`The value of x is: ${x}`); // 5
  const y = x;
  console.log(`The value of y is: ${y}`); // 5

  const arr = [0, 1, 2];
  console.log(`The first value of arr is: ${arr[0]}`); // 0
  const arr2 = arr;
  console.log(`The first value of arr2 is: ${arr2[0]}`); // 0
  console.log(`The first value of arr is: ${arr[0]}`); // 0
}

const makesCopy = (someNumber: number) => {
  console.log(`The value of someNumber is: ${someNumber}`); // 5
}

const makesReferenceCopy = (someArray: number[]) => {
  console.log(`The first value someArray is: ${someArray[0]}`); // 0
}

const returnsReference = (): number[] => [0, 1, 2];

doSomething();
doSomethingElse();
doEvenMore();
doSomethingCrazy();

// FUNCTION PARAMETERS
const x = 5;
makesCopy(5);
console.log(`The value of x is: ${x}`); // 5

const arr = [0, 1, 2];
makesReferenceCopy(arr);
console.log(`The first value arr is: ${arr[0]}`); // 0

// FUNCTION RETURNS
const arr1 = returnsReference();
console.log(`The first value arr1 is: ${arr1[0]}`); // 0
