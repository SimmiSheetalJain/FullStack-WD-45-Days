//Creating a promises

//proimise(function), promise take a function. 
const promises_01 = new Promise(function(resolve, reject){
    //Now you can do an async task
    //An async task cam be DB calls, network calls, cryptography related task, etc
    setTimeout(function(){
        console.log('Async Task is Complete!!')
        resolve(); //Unless we call resolve(), promise will not be Consumed.
    },1000)
})

//Consuming a Promise

promises_01.then(()=>{
    console.log("Promise Consumed");
});


//We don't always need to store promise in a variable. Can create a promise and consume at once

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 2!!!!!!!');
        resolve()
    },1000);
}).then(()=>{
    console.log("Promise for Async Task 2 is Consumed")
})


//Next Example

const promise_03 = new Promise(function (resolve,reject) {
    setTimeout(()=>{
        resolve({
            username:"Sheetal",
            email:"ssj@gmail.com"
        })
    },1000)
})

promise_03.then((user)=>{
    console.log(user);
})

//Next Example

const promise_04 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({
                username:"Sheetal",
                email:"ssj@gmail.com"
            })
        }else{
            reject("Error!!Something Went Wrong");
        }
    },1000);
})

promise_04.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);
}).finally(()=>console.log('The promise is either resolved or rejected.'));


//Next Example 

const promise_05 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({
                username:"Simmi Jain",
                email:"simmisheetaljain@gmail.com"
            })
        }else{
            reject("⚠️Error!!Something Went Wrong⚠️");
        }
    },1000);
});


async function consumePromiseFive(){
    try {
        const response =  await promise_05;  //promise is an object so don't add '()'
        console.log(response);
        
    } catch (error) {
        console.log(error);        
    }    
}

consumePromiseFive();

//Just for try, for next class

async function getAllRecords(){
    try {
        const requestUrl = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
        const records = await fetch(requestUrl);
        // console.log(records);        
        const data = await records.json();
        console.log(data["data"][0]);    
    }catch (error) {
        console.log("Error: ",error);        
    }
}

getAllRecords();


//The thing done above can be done using .then()

fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then((rec)=>{
    return rec.json();
}).then((data)=>{
    console.log(data["data"][3]);   
}).catch((err)=>{
    console.log("Error: ",err);
})