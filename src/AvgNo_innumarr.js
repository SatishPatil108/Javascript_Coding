const arr = [10,37,80,23,54,96];

const totalSum = arr.reduce((a,b)=> a+b);
console.log(totalSum);
const length = arr.length;

console.log(length);

const avgnum = totalSum/length;
console.log(avgnum);