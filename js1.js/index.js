// VARIABLES//
let name = 'akshat';
console.log(name);

//Variables canot be a reserved keywords 
//should be meaningful
//cannot start with a number 
//cannot contain a space or hyphen (-)

//-----Mordern way of declaring multiple variables-----//

let firstName = 'akshat';
let lastName = 'singh';

//----CONSTANTS-----//

/*const*/ let interestRate = 0.3;
interestRate = 1;
console.log(interestRate)// if you want to reassign a variable use let, if you will use const it will show error//

//------PRIMITIVE TYPES-----//

//types of primitives : String, Number, Undefined, Boolean, Null

let naam = 'akshat';// string 
let age = '24' // number
let imBoy = true; //boolean
let pehlaNaam = undefined; //undefined
let selectedColorr = null;

//-----------------DYNAMIC TYPING--------------------//

//Javascript is a dynamic language

// You can use the typeof operator to find the data type of a JavaScript variable.

//-----OBJECTS---//

//objets comes in a reference type category


 let person = {
       namee: 'akshat', agee: 22
 };

 //Dot notation
 person.name = 'somil'; //dot notation is better

 //Bracket Notation
 person['name'] = 'jay';

 console.log(person.name);

 //-----ARRAY-----//

 let selectedColor = ['red','blue'];
 selectedColor [2]= 1;
 console.log(selectedColor.length);

 //array is an object in javascript
 //Array is a datastructure that we use to represent a list of items

 //--------------FUNCTION-----------///

//Functions are one of the fundamental building blocks in javascript a function is basically a set of statement that perform a task or calculate a value.

function greet(name) {//greet function has a variable name
    console.log('Hello ' + name + ' ' + lastName );
}

//calculate a value
function square(number){
   return  number * number;
}


console.log(square(2));





