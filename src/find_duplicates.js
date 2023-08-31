const duplicatedarr = [11, 26, 49, 26, 44, 88, 49, 99, 26];

const newarr = duplicatedarr.filter(
  (ele, index, arr) => arr.indexOf(ele) !== index
);

console.log(newarr);
