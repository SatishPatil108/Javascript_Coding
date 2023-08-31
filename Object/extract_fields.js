// How Can you extract a few fields from the given JSON object and form new array
//  using map method

const input ={
     "studentinfo": [
        {
            name : 'Satish',
            id: 108,
            email:'patilsatish@gmail.com'
        },
        
        {
            name : 'Shrenik',
            id: 101,
            email:'patilshrenik@gmail.com'
        },

        {
            name : 'Suraj',
            id: 105,
            email:'patilsuraj@gmail.com'
        },
    ]
}

const result = input.studentinfo.map(function(item){

    let studentobj = {
        name:item.name,
        email:item.email
    }
    return studentobj;
}) 

console.log(result);