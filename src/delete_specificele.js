const original = [10,20,30,40,50,60];

const toDelete = 40;

const newArr = original.filter(item => item !== toDelete)

console.log("Before.................",original);
console.log("After..................",newArr);
