//  using arraysorting 
/*let arr = [10,56,88,24,90,37,75,55,22];

console.log("Before................"+ arr);

let newarr = arr.sort((a,b)=>{
    return a-b;
});

console.log("After................." + newarr);
console.log(newarr[newarr.length-2]);
*/

// using function math operation

//  const array = [50, 60, 20, 10, 40];

// function findMinMax() {
// 	minValue = Math.min(...array);
// 	maxValue = Math.max(...array);
//     index = array.indexOf(maxValue);
//     array.splice(index,1);
// 	secondmaxValue = Math.max(...array);

// 	console.log("Minimum element is:"+minValue);
// 	console.log("Maximum Element is:"+maxValue);
// 	console.log("Second Maximum Element is:"+secondmaxValue);
// }
// findMinMax();


// using arrow function 

 const data = [50, 60, 20, 10, 40];
 
 const largevalue =(arr)=>{
       firstlargevalue = Math.max(...arr);

       index = arr.indexOf(firstlargevalue)
       data.splice(index,1);

       secondlargevalue = Math.max(...arr);

       return secondlargevalue;

 }

 console.log(largevalue(data));