const OriginalObj = {
    Street : 'Jayanagar 5th Block',
    City : 'Bengaluru',
    State : 'Karnataka',
    Pin : 516510
}
console.log(OriginalObj);

const ModifiedObj = {
    ...OriginalObj,
    Country : 'India'
}
console.log(ModifiedObj);