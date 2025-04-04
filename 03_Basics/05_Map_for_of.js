const courses = new Map()

courses.set('MAI-101', 'Instroduction to AI and Its Application');
courses.set('MAI-102','Java Programming');
courses.set('MAI-103','Advance Web technologies');
courses.set('MAI-104','Major Project');

for (const [subjectcode,subject] of courses) {
    console.log(`${subjectcode} : - ${subject}`);
}


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

//For of can't be used with objects
// for (const objkey of host) {
//     console.log(objkey);
// }


//there's is forin for this 

for (const field in host) {
    console.log(`${field} => ${host[field]}`);
}

//foreach loop

const salaryType = ["Basic Pay", "Monthly Pay", "Weekend Pay", "Daily Wage"];

salaryType.forEach( (i)=>{
    console.log(`${i}`);
})

//Another interesting version
salaryType.forEach( (salary,index,arr)=>{
    console.log(`${salary} , ${index} , ${arr}`);
})
