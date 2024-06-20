 
var obj = {
    fName: "john",
    age: 8,
    fun : function(){
       console.log(this);//this is a object only
    }
}

obj.fun();

