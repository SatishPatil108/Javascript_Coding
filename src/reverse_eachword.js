const str = "Welcome To The Game Of Thrones World";

// expected output = "dlroW senorhT fO emaG ehT oT emocleW";

var reverStr = reverStrBySeparator(str,"");

function reverStrBySeparator(sampleInput,separator){
    return sampleInput.split(separator).reverse().join(separator);
}

console.log(reverStr);