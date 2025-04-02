var a = 5;

if (true){
    var a  = 50;
    console.log(a);
}
console.log(a);

//Hence use let or const type 

console.log(say());


function say(){
    return "I'm called a function and I am special because I'm accessible throughout the code, before as well as after declaration";   
}

//console.log(exp()); // Will lead to 'not defined'  error


const exp = function(){
    return "I'am a fucntion but I'm called an expression, you can't access me before declaration";
}

console.log(exp());