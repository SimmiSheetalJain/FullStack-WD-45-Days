"use script" // This is used to treat all JS  code as newer version
// alert ( 3 + 3); //  ⚠️ Cannot be run here cuz we are using nodejs not browser

// ⚠️ Code should be readable enough ⚠️

// Common Data types in Java script

let age = 24 // It's a number 
let name = "Simmi Sheetal  Jain"  // It's a String 
let mobNo = 78657469567854697569789793789n // It's a bigint, either append 'n'  or use BigInt()
let isLogin = false //It's a boolean
let score = null //Null is a standalone value 
let eventVenue; // It's value type will be shown as 'undefined'
let eventId = Symbol("0045TH")  // Symbol is a primitive type and is used for uniqunese 

// Object, will be discussed later


// To know the types of value use 'typeof'

console.log(typeof isLogin);

