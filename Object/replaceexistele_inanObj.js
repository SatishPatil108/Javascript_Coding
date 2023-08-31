const employeeinfo = {
    name : 'Satish Patil',
    ID : 108,
    Role : 'Developer',
    City : 'Pune'
}
console.log(employeeinfo);


const modifiedemployeeinfo = {
    ...employeeinfo,
    City : 'Bengaluru'
}
console.log(modifiedemployeeinfo);