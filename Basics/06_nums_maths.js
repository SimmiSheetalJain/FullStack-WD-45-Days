const eventID = 100;
const eId = new Number(100);

console.log(eventID);
console.log(eId);


const eventExpenses = 5934.05349
console.log(eventExpenses.toFixed(2));
console.log(eventExpenses.toPrecision(3));

const sales = 10000020303
console.log(sales.toLocaleString());
console.log(sales.toLocaleString('en-IN'));

//++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++//

console.log("++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++");
console.log(Math.abs(-4));
console.log(Math.round(4.9));
console.log(Math.round(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4,3,1,2));

console.log("++++++++++++++++++++++++ Math.random++++++++++++++++++");

console.log(Math.random()*10);

//Getting a random number within a range

//say
const min = 20;
const max = 30;
console.log(Math.floor(Math.random()*(max-min+1)+min));
