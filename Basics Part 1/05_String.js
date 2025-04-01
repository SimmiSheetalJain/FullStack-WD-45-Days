let title = "AI Innovation Hackathon";
let venue = "Main Building, LNCT Bhopal";

//The other way to create a string 

const founder = new String("Sheetal");


console.log(`Dear Student, This is to inform you we are holding ${title} this week at ${venue}.The Chief Guest is ${founder} Jain, The CEO and founder of ArgusPro`);

console.log(`\n length = ${founder.length}`);
console.log(`\n ${founder.charAt(5)}`);
console.log(`\n ${founder.indexOf('t')}`);
console.log(`\n ${founder.substring(3,10)}`); //⚠️ Can't Take Negative Values
console.log(`\n ${founder.slice(5,8)}`); //Can take Negative Values

//trim method removes white space

//replace
// console.log(founder.replace("e","i")); //replace e with i


//split

console.log(founder.split(' '));