`
The main objective of the spread operator is to spread the elements of an array or object. This is best explained with examples.`;
const arr: number[] = [1, 2, 3, 4, 5];
let sum = 0;
const arraySum = (...arr: number[]): number => {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
const ans = arraySum(...arr);
console.log(ans);

`We can also spread object in object`;
const data = {
  name: 'Taslim',
  age: 21,
  profession: 'Software Engineer',
};
const function2 = (...data) => {
  for (const i in data) {
    console.log(data[i]);
  }
};
function2({ ...data }); // because data is an object hence pass it as {}
`
Let's say we want to insert our existing object inside another object.
`;
const finalAns = { Id: 1, ...data };
console.log(finalAns); // { Id: 1,name: 'Taslim',age: 21,profession: 'Software Engineer',}

`
In Typescript, to pass variable number of parameters/ Or we don't know at compile time that how many parameters
are required to pass inside a function.
In this case we use ellipsis/spread operator (...)  operator for that.
Let's say we want to calculate are of a shape. Hence in this case number of parameters can be different based on shape.
Rest parameters (denoted by ...argumentName for the last argument) allow you to quickly accept multiple arguments in your function and get them as an array. This is demonstrated in the below example.
`;
function iTakeItAll(first, second, ...allOthers) {
  console.log(allOthers, first, second);
}
iTakeItAll('foo', 'bar'); // []==> value of allOthers
iTakeItAll('foo', 'bar', 'bas', 'qux'); // ['bas','qux']`; ==> value of allOthers
const area = (shape, ...params: number[]) => {
  if (shape == 'circle') {
    return ((2 * 22) / 7) * params[0];
  } else if (shape == 'rectangle') {
    return 2 * params[0] * params[1];
  }
};

const ans1 = area('circle', 2);
const ans2 = area('rectangle', 2, 4);
console.log(ans1, ans2);

`No difference in symbol of rest or spread parameters. When it is passed as last argument in function,we call it
REST Parameter otherwise SPREAD Parameter`;
