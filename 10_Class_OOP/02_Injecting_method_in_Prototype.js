//Everything is an object in javascript

//A function is also an object

function mult(num){
    return num*5;
}

mult.power = 2; // now power is associated to mult and has value 2
console.log(mult(5));
console.log(mult.power);
console.log(mult.prototype);

function createUser(username, score){
    this.username =  username;
    this.score =  score;
}

//Can be inject functionalities inside the createUser()

createUser.prototype.increment = function (){
    this.score++;
}

createUser.prototype.printscore = function(){
    console.log(`Score is ${this.score}`);
}

const user1 = new createUser("Alina",25);  //Here using new keyword is very very important
user1.printscore();
user1.increment();
user1.printscore();

