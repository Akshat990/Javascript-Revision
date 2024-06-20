// In Javascript there are three types of conditional statement
// if statement
//if else statement
// if else if else statement

let a =  "5";
a = Number.parseInt(a) //   Converting the string to a number

if(a<0){
    alert("This is a invalid age")
}
else if(a<9){
    alert("You are a kid and you can not think of driving")
}
else if(a<18 && a>=9){
    alert("You are a kid and you can  think of driving agter 18")
}
else {
    alert("You can now drive as you are above 18")
}