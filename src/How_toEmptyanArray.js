let students = [10,11,12,13,14,15];

/* method 1 */
//   students = [];

/* method 2 */
//   students.length = 0;
   
/* method 3 */
// while(students.length>0)
// {
//     students.pop();
// }

/* method 4 */

students.splice(0,students.length);

console.log(students.length);
console.log(students);