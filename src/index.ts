export {};

// EXAMPLE 1 - Merge Arrays in TypeScript

const arr1 = ['bobby', 'hadz'];
const arr2 = ['.', 'com'];

// 👇️ const arr3: string[]
const arr3 = [...arr1, ...arr2];

console.log(arr3); // 👉️ [ 'bobby', 'hadz', '.', 'com' ]

// ---------------------------------------------------

// // EXAMPLE 2 - Merge Arrays in TypeScript using concat()

// const arr1 = ['a', 'b'];
// const arr2 = ['c', 'd'];
// const arr3 = ['e', 'f'];

// // 👇️ const arr3: string[]
// const arr4 = arr1.concat(arr2, arr3);

// // 👇️ ['a', 'b', 'c,' 'd', 'e', 'f']
// console.log(arr4);
