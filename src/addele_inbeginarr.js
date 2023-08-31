const data = [22,33,44,55,66,77,88,99];
const ele = 11;

//  Using Spread Operator
const newdata = [ele,...data];
console.log("Before....................",data);
console.log("After.....................",newdata);

//  Using Unshift Method
data.unshift(ele);
console.log(data);