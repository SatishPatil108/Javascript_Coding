// How do you sort and reverse an array without changing the original array?
// we can use slice() make a copy it and reverse() it.

const student = ['a','b','c','d','e','f'];

const newstudentArr = student.slice().reverse();

console.log("Original Array...",student);

console.log("New Array........",newstudentArr);
