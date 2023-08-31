let city = ["Bengaluru","Pune","Mumbai","Jaipur"];

console.log(city)


city = city.map(function(x){
    return x.replace("Pune","Delhi");
});

console.log(city)