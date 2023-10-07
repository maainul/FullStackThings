class Person{
  constructor(name){
      this.name = name;
  }
  getName(){
      return this.name;
  }
  setName(newName){
      newName = newName.trim();
      if(newName == ''){
          throw 'The name can not be empty'
      }
      this.name = newName;
  }
}

let person = new Person('Jane Doe');
console.log(person.getName());

person.setName('Jane Smith');
console.log(person.getName()); // Jane Smith

let prsn = new Person();
prsn.setName("HI HI");
console.log(prsn.getName());