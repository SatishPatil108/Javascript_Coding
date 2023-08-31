const string = "Madam";

function string_palindrome(str){
    str = str.toLowerCase();

    return (str == str.split('').reverse().join(''));
}

console.log(string_palindrome(string));