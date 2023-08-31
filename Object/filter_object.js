// Filter a given object based on certain condition and return the corresponding object?
// using filter method

const input = {

      "students" : [
        {
            stdID : 3,
            firstName : "Satish",
            LastName  : "Patil"
        },

        {
            stdID : 10,
            firstName : "Shrenik",
            LastName  : "SM"
        },
      ]
}

var op = input.students.filter(function(item){
    return item.stdID>5? item: ' ';

});
console.log(op);