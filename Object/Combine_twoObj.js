const address = {
    street : 'Jaynagar 10th Main 4th Block',
    City  : 'Bengaluru',
    Pin : 516510
}

const extendedAddress = {
    State  : 'KA',
    Country : 'India'
}

const optionalAddress = {
    Mob : 8888155185
}

const combinedAddress = {
    ...address,
    ...extendedAddress,
    ...optionalAddress
}

console.log(combinedAddress);