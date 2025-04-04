/* 
Generally, data types in js are categorised int two categories, namely primitive and non-primitive.
These categories are build on the basis of the way of storing and accessing the type of data. 
*/

// Primitive (7 Categories)

// -- 1 -- String
// -- 2 -- Number
// -- 3 -- BigInt
// -- 4 -- Boolean
// -- 5 -- null
// -- 6 -- undefined
// -- 7 -- Symbol


// Non-Primitive or Reference Type

// -- 1 -- Array
// -- 2 -- Object
// -- 3 -- Function 

// Array
const genders = ["Male", "Female","Transgender","Prefer not to say"] 

//Object
let eventDetails = {
    eventID: 234,
    title: "AI Innovation Hackathon",
    venue: "Main Building, LNCT Bhopal"
}

console.log(genders[2]);
console.log(eventDetails.venue);

//Function

const showEvent = function(){
    console.log("\n\n****Event Details****\n\n");
    console.log(eventDetails.eventID);
    console.log(eventDetails.title);
    console.log(eventDetails.venue);
}
showEvent();

//check types
console.log(typeof genders);
console.log(typeof eventDetails);
console.log(typeof showEvent);

// Stack (This storage type is used for premitives)
//heap (This storage type is used for non-premitives)

let ceo = "Sheetal Jain"
let cmd = ceo;
cmd = "Simmi Jain"; //cuz we got copy of the variable ceo, the actual value will remain same

console.table([
    ceo,
    cmd
])

const eventDetails2 = eventDetails;

eventDetails2.venue = "Pharmacy Building, LNCT Bhopal"; //Cuz we got reference to the memory location, the venue will get changed
console.log(eventDetails.venue);
console.log(eventDetails.venue);
