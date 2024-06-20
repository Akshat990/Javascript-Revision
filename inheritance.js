class Animal{
    constructor(name){
        this.name =name;
    }

    speak(){
        console.log(`${this.name} make a noise`);
    }

    sings(){
        console.log(`${this.name} sings Tunuk Tunuk`);
    }
}

class dog extends Animal{
    constructor(name){
        super(name);
    }
}

class cat extends Animal{
    constructor(name){
        super(name);
    }
}

let d = new cat ('Billi');
d.sings();