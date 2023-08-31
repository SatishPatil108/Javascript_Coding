const arr1 = [22,78,45,67,11,35];

const arr2 = [67,35,78];

const result = arr1.some(ele => arr2.includes(ele));

console.log(result);
