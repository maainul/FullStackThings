class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
    static helloWorld() {
        console.log('Hello World');
    }
}

class Bird extends Animal {
    constructor(legs){
        super(legs);
    }
    fly() {
        console.log('flying');
    }
}

let dd = new Bird(2);
dd.fly();
dd.walk();
Bird.helloWorld();
