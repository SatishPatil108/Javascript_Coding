const arr = [10,20,30,50,324,108,555];

const replaceAt = 3;
const ele = 100;

const newarr = [...arr.slice(0,replaceAt),ele,...arr.slice(replaceAt+1)];

console.log("Before................",arr);
console.log("After.................",newarr);
