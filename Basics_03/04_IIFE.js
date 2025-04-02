//IIFE (Immediately invoked function expression)

//named IIFE

(function(dbname){
   console.log(`DB ${dbname} connected`);
})('Karyakram');

//Unnamed IIFE
((dbname)=>{
    console.log(`DB ${dbname} connected`);
})('ArgusPRo');


