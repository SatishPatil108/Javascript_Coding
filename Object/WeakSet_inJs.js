const obj1 = {
    message : "Welcome to India",
    phone : 7826678678647838
}

const obj2 = {
    country  : "India",
    City  : "Korochi",
    PinCode : 416109
}

const newSet3 = new WeakSet([obj1,obj2]);
console.log(newSet3);

const newSet4 = new WeakSet([{"Hello" : "Welcome"}]);
console.log(newSet4);