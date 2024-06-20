/*class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log('Hello ${this.name}')
    }
}

let user = new Person ("John",8)
user.greet();
console.log(user);*/

class User{
    constructor(name){
        this.name=name;
    }

    sayHi(){
        console.log("Hello " +this.name)
    }
}

let user = new User ("John")
user.sayHi()

let user1 = new User ("Tate")
user1.sayHi()

console.log(typeof User)