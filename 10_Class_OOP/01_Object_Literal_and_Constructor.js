const user = {
    username : "Simmi",
    age : 24,
    signIn: true,
    getUserDetails: function(){
        console.log("Hello Simmi!!");
        console.log(`Hello ${this.username}`);
        }
}

// console.log(user.getUserDetails());


//This keyword is used for current context

//Construtor


// const promise_01 = new Promise() // This 'Promise()'  is constructor

function getUser(username, age, signIn){
    this.username = username;
    this.age = age;
    this.signIn = signIn;
    return this;
}

const userone = getUser("Sheetal",24,true);
const usertwo = getUser("Mahaveer",22,false);
console.log(userone);
//We can see that the usertwo will override the values of user, age, and signin for variable userone. This is why we need to use  new keeyword for creating a new user 

const userthree = new getUser("Anjali",26,true);
console.log(userthree.constructor);

