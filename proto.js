var obj ={
    fName: "John",
};

var obj2={
    lName: "Smith",
};

obj2.__proto__= obj;

console.log(obj2);