//write a program to print the marks of a student in an object using for loop
// obj = { harry: 90, rohan:70, akshat: 7}

let marks = {

    harry:90,
    shubham:9,
    lovish: 56,
    Monika: 4
}

for (let i=0; i<Object.keys(marks).length; i++){ //object.keys(marks).length will print no. of keys which is inside the object (which is harry:90, shubham:9, lovish:56, monika: 4)
    console.log("The marks of" + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}