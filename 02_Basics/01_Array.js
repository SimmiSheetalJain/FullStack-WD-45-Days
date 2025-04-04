//Array in JavaScript are similar to python list
const gender = ["Male","Female", "Others"]

console.log(gender[1]);

//The other way to crate Array

const accountType = new Array("Saving","Current","Salary","Fixed");
console.log(accountType);

//Array Methods 

//Push

accountType.push("Recurring Deposit");
console.log(accountType);

//pop

accountType.pop();
console.log(accountType);

//unshift shift
accountType.unshift("Recurring Deposit");
console.log(accountType);

accountType.shift();
console.log(accountType);

//includes

console.log(accountType.includes("Saving"));

//indexof

console.log(accountType.indexOf("Fixed"));

//Slicing 

const fewAccountTypes = accountType.slice(1,3);
console.log(fewAccountTypes);


const fewAccountTypes1 = accountType.splice(1,2);
console.log(fewAccountTypes1);
console.log(accountType);

//Nested-Array

accountType.push(fewAccountTypes1);
console.log(accountType);

accountType.pop() //Removing nested array 

//Use concat instead

const acTypes = accountType.concat(fewAccountTypes1);
console.log(acTypes);

//Spread Operation does same thing as concate. 

const at = [...accountType,...fewAccountTypes1];
console.log(at);

//removing nested using flat

const arr = [1,2,3,[4,5,6],7,8,[9,10]];
const arrFlat = arr.flat(Infinity); //Infinity is depth, it can be 1,2,3, ... etc
console.log(arrFlat);

//Making an array from other object

console.log(Array.from("Sheetal"));  //Like split function in python

console.log(Array.from({name:"Sheetal"})); //Interesting Fact, it will be []

let hostId1 = 101;
let hostId2 = 102;
let hostId3 = 103;

console.log(Array.of(hostId1,hostId2,hostId3));

//continue at https://youtu.be/sscX432bMZo?t=13524

