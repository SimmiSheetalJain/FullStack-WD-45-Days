function add(num1, num2){
    return num1 + num2
}

let result  = add(12,13);

console.log(result);


function loggedIn(username){
    if(username===undefined){   //can also say !username instead of username === undefined
        console.log("Please enter a username!!");
        return         
    }
    return `Hi ${username}, You have loogged in Successfully.`;
}

console.log(loggedIn("Sheetal"));

//if nothing is passed, the value is undefined 

// Cont. at 04:54:00

// When number of arguments aren't known, we use '...' as rest operator.


function product(...numbers){  //We recieve all arguments in numbers
        // We can run a lop on numbers
}


// Passing an object as arguments

const user = {
    username: "Sheetal",
    useremail: "sheetal1101@gmail.com"
}

function show(user){
    return `Hello dear ${user.username}. Your email id, ${user.useremail} has been verfied`;
}

console.log(show(user));

// Passing an array in a function

const items = ["The Diary of a CEO", "Whitetone","Lifeboy","Jashmine"];
function products(items){
    return items; 
}

console.log(products(items));






