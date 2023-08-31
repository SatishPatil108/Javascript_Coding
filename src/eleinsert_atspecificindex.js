const data = [11,22,44,55,66,77,88,99];

const ele = 33;
const insertAt = 2;

const newData = [...data.slice(0,insertAt),ele,...data.slice(insertAt)];
console.log("Before...................",data);
console.log("After....................",newData);

