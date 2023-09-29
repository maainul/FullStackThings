function Person(p_name,p_age,p_gender){
    this.name = p_name,
    this.age = p_age,
    this.gender = p_gender,
    this.greet = function(){
        console.log(`hello, this is ${this.name}`);
    }
}

const person1 = new Person('kusum',25,'female');
const person2 = new Person('mainul',29,'female');

console.log(person1);
console.log(person2);


