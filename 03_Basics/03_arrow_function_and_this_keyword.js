const user = {
    name: "Sheetal",
    age: 23,
    welcome: function(){
        return `Hello ${this.name}, you are just ${this.age} years old`
    }
}

console.log(user.welcome());

console.log(user)

console.log(this);


//Arror function

// () => ()    //implicite return arrow function
/*
() =>{
    return     //Explicit return function
    }
*/

let sum = (num1, num2) => (num1+num2);
console.log(`Sum is : ${sum(23,45)}`);

let prod = (n1,n2)=>{
    return `The product is : ${n1*n2}`;
}
console.log(prod(23,45));


