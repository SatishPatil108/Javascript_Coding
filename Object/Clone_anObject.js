 const employees = {
    id:108,
    name : "Satish",
    dept : "Developer"
 };

 /*Method 1*/
 const newEmployees = Object.assign({},employees);
 console.log(newEmployees);

 /*Method 2*/
 const employeesObj = {...employees};
 console.log(employees);

 /*Method 1*/
const JSONClone = JSON.parse(JSON.stringify(employees));
console.log(JSONClone);

