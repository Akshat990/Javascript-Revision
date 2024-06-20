// We use function in javascript to organize our code and to perform a particular task.
// when we write a program there is a chance that we will use a few things repeatedly, So its better to create a function.

function onePlusAvg(x, y){
    console.log("Done")
    return 1 + (x + y)/2
}

let a = 1
let b = 2
let c = 3
 
console.log("One plus Average of a and b", onePlusAvg(a, b))
console.log(" One plus Average of b and c", onePlusAvg(b, c))
console.log(" One plus Average of c and a", onePlusAvg(c, a))

//New way to create a function is called arrow function

const hello = ()=>{
    console.log("hey how are you")
    return "hi"
}
let v = hello()
console.log(v)