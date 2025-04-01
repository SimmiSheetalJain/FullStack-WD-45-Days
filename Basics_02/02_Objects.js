// Singleton, it will be only instance of its type 
//Can create object either using Object Literal or  using Object Class Constructor, 
// When creating using Object Class Constructor, it will be a Singleton 

const obj = Object.create({
    hostName: "Simmi Sheetal  Jain"
})

console.log(obj.hostName);




//if created using Object Literal it will not Singleton 

// Object Literal

const dept = Symbol("MCA");

const host = {
    hostId: 5463,
    hostname: "Swagatika",
    designation: "MCA Senior Faculty",
    email:"sl44@gmail.com",
    isCoordinator: false,
    age: 28,
    eventDays: ["Monday,Thursday"],
    [dept]: "MCA-AIML"
}

console.log(typeof host[dept]);


//Modifying Object Data

host.age = 23;
console.log(host);

// //freeze
// // Object.freeze(host); 

// host.age = 27   //Will not get changed cuz the object is freezed
// console.log(host);

host.welcomeMessage = function(){
    console.log(`Welcome ${host.name} to Karyakram 👋`); 
}

console.log(host.welcomeMessage());


//Object Declared using object constructor 

const participant = new Object(); //Singleton

console.log(participant);

// const participant = {} // Non-Singleton

participant.participantId = 234533
participant.participantName = "Vaishnavee"
participant.age = 23
participant.isVerified = false

console.log(participant);


//object inside object 

const loginCredential = {
    loginKey : "889347cj48rj7367r45g87r64378h6",
    userDetails: participant
}

console.log(loginCredential);


// Concatenating two objects

const participants_host = Object.assign({},host,participant);

console.log(participants_host);




// Another way of Concatenating objects, spread

const data = {...host, ...participant};

console.log(data);


//How does an array of objects look like, the one we receive from database


const allEvents = [
    {
        eventID : 1,
        eventDate : "2025-05-27",
        eventTitle: "Machine Learning Bootcamp"
    },
    {
        eventID : 2,
        eventDate : "2025-03-17",
        eventTitle: "Web Dev Bootcamp"
    },
    {
        eventID : 3,
        eventDate : "2025-06-25",
        eventTitle: "Deep Learning Bootcamp"
    },
    {
        eventID : 4,
        eventDate : "2025-02-21",
        eventTitle: "DevOps Bootcamp"
    }
]

console.log(allEvents);
//Individual Object Access 
console.log(allEvents[1].eventTitle);


//Get all keys of an Object
console.log(Object.keys(allEvents));


//Get all the values 

console.log(Object.values(allEvents));


//GEt both key-values: Object.entries()

// Check if a particular key is there in an object 

console.log(host.hasOwnProperty('hostId'));

//To know more methods check run an object in console tab of browser

