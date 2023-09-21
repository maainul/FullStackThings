// Different Way to Create objects
// constructor in javascript:
function Alien(name, tech) {
  this.name = name;
  this.tech = tech;

  this.work = () => {
    console.log("Solving bugs from 12 hrs");
  };

  return this;
}

let alian1 = new Alien("Mainul", "JS");
let alian2 = new Alien("Kamrul", "JS");
let alian3 = new Alien("Fakhrul", "JS");
let alian4 = new Alien("Abdullah", "JS");
let alian5 = new Alien("Sobuj", "JS");

console.log(alian1);
console.log(alian2);
console.log(alian3);
console.log(alian4);
console.log(alian5);
alian1.tech="Java"
alian1.work();
console.log(alian1);