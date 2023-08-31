const data = [88, 23, 78, 12, 90, 34, 11, 67];

console.log("Before.............." + data);

const newdata = data.sort((a, b) => {
  return a - b;
});

console.log("After..............." + data);
