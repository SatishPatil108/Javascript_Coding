function add(x){
    let sum = x;

    function returnFn(y){
        sum += y;
        return returnFn;
    }

    returnFn.valueOf = function(){
        return sum;
    }

    return returnFn;
}

console.log(add(5)(10)(15)(30).valueOf());
console.log(add(5)(10).valueOf());