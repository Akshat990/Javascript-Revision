//Arrays are collection of some items or arrays are variable which can hold more than one value.
let marks_class_12 = [91, 82, 63, 84, false, "Not Present"]
console.log(marks_class_12)
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6])// will be undefined because index 6 is not exists
console.log("The length of marks_class_12 is", marks_class_12.length)
marks_class_12[6] = 89// adding a new value to the array
marks_class_12[0] = 96 //changig the value of an array
console.log(marks_class_12)
console.log(typeof marks_class_12)

//Arrays are mutable arrays can be changed.