// question : take one array
// 1) task : a) remove duplicate b) sorted asending c) sum of all ele d) find duplicate

let data = [88, 45, 22, 78, 99, 45, 78, 33, 25, 22];

// e) ans find duplicate

let duplicate = data.filter((ele, index, arr) => arr.indexOf(ele) !== index);

console.log(duplicate);

// b) sorted asending

let asendingarray = data.sort((x, y) => {
  return x - y;
});

console.log(asendingarray);

// a) remove duplicate

let unique = new Set(data);

console.log([...unique]);

// c) sum of array element

let sum = data.reduce((x, y) => x + y);

console.log(sum);
