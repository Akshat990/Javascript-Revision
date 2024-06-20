
function fun(){
    let fName = "john";
    this.fName= fName;
}

var obj = new fun();
console.log(obj.fName);