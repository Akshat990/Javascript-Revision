//create a variable of type string and try to add  a number to it
let a = "Akshat"
let b = 6
console.log(a+b)

//Use typeof operator to find the datatype of the string in the last question
console.log(typeof (a+b)) 

//Create a const object in javascript can you change it to hold a number later
const a1 = {
    name:"Akshat",
    section:1,
    isPrincipal: false
}
 //a1 = "54" //As we are getting error so the answer is no we cant change it to hold a number later

 //Try to add a new key to the const object in problem 3 were you able to do it?
a1['friend'] ="Vishal" 
a1['name'] = "jaidev"
console.log(a1)

 //Write a js program to create a word meaning dictionary of 2 words
 const dict = {
    appreciate: "recognize the full worth of.",
    ataraxia: "state of fredom for anxiety",
 }
 console.log(dict.appreciate)