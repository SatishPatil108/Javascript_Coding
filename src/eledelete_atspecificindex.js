const studentId = [10,65,40,18,25,38,50];

const deleteAt = 2;

const newstudentId = [...studentId.slice(0,deleteAt),...studentId.slice(deleteAt+1)];

console.log("Before................",studentId);
console.log("After.................",newstudentId);