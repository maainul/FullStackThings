const sumConst = (a,b) => a + b;
console.log(`sumFunc(1,2) => ${sumFunc(1,2)}`);
console.log(`sunConst(3,4) => ${sumConst(3,4)}`);

function sumFunc(a,b){
    return a + b;
}


console.log(a);
var a = 2;

const aa = 10
console.log(aa);//
let bb = 20
console.log(bb);

function logVallet(){
    console.log(valuelet);
}
let valuelet=180;
logVallet(); // 180

function logValConst(){
    console.log(val);
}
const val=180;
logValConst(); // 180

function logValVar(){
    console.log(value);
}
var value=180;
logValVar(); // 180


console.log(valuev);
var valuev=180; // undefined
console.log(valuev); // 180

console.log(name); // Cannot access 'name' before initialization
let name = 'Mukul Latiyan';

// check let keyword
function fun(){
    console.log(name);
    let name = 'Mukul Latiyan';
}
fun();
// check let keyword
function fun(){
    let name;
    console.log(name);
    name = 'Mukul Latiyan';
}
fun(); // undefined

// let
fun() // Calling the expression
 
let fun = () =>{ // Declaring
    let name = 'Mukul Latiyan';
    console.log(name);
}



// var
fun() // Calling the expression
var fun = () =>{ // Declaring
    let name = 'Mukul Latiyan';
    console.log(name);
}

 