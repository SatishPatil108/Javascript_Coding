const studentArray = [
  {name : "Swara", age:21},
  {name : "Sanchali", age:25},
  {name : "Anvit", age:16},
  {name : "Sanvi", age:18},
  {name : "Viransh", age:12},
  {name : "Rujuta", age:22},
  {name : "Veera", age:14},
  {name : "Manish", age:24},
  {name : "Khushi", age:19},
  {name : "Falguni", age:10},
];

const filerItem = studentArray.filter((student)=>{
                 return student.age>=18;
});

console.log("Applicable for Voting : ",filerItem);

const findItem = studentArray.find((student)=>{
    return student.age>=18;
});

console.log("Applicable for Voting : ",findItem);
