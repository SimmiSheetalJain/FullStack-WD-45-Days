let score = "33" //It should be an integer, say from front-end the value sent is a string.
console.log(typeof score); //String

//Let's change it into an integer

let intScore = Number(score);
console.log(typeof intScore); //Number

// What if the string "33" is "33abc"

let password = "33abc"
let intPassword = Number(password); // It won't throw an error, rather it will convert it into NaN

// Let's see the value inside intPassword
console.log(intPassword);  //NaN

// Similarly for null , int conversion will give 0. 
// For undefined, it will be NaN
// For true and false, it will be 1 and 0 respectively
// But alphanumeric and alphabets only string will be converted into NaN
// boolean("SSJ") => true while boolean("") will be false

console.log(Boolean(""));
console.log(Boolean("Simmi"));

//###################################Operation########################################//

console.log(1+2);  //3
console.log(1+"2"); //12
console.log(1+2+"2"); //32, cus 1+2 = 3, then 3 +"2" => 32
console.log("1"+2+2+"2"); // 1222,  "1" + 2 => "12" + 2 => "122" + 2 => "1222"

// Not recommended but it is allowed 
let n1, n2, n3;
n1 = n2 = n3 = 33

console.table([typeof n1, typeof n2, typeof n3,n1,n2,n3]);
