const string1 = 'Satish';
const string2 = 'shiats';

function String_Anagram(string1,string2)
{
   var str1 = string1.toLowerCase();
   var str2 = string2.toLowerCase();

   str1 = str1.split("").sort().join("");
   str2 = str2.split("").sort().join("");


  return str1 === str2;

}

console.log(String_Anagram(string1,string2));