x = 5;
y = 6;
z = x + y;
console.log(z);
y="mainul"
console.log(y);

// using var
var x = 50;
var y = 6;
var z = x + y;
console.log(z);

// let
let a = 5;
let b = 6;
let c = a + b;
console.log(c);

const p = 5;
const q = 6;
const r = p + q;
console.log(r);

/*
    Var,Let and Const
*/

// var keyword 
var f = 10
var f = 20 // can be redeclared
    f = 30 // can be reassigned
console.log(f);

var u = 2
{
    var u = 10;
    console.log(u); // 10
}
console.log(u); // 10


//Variables defined with let cannot be Redeclared
//let m = 8
//let m = 10 // cannot be Redeclared
// Variables defined with let must be Declared before use
// Variables defined with let have Block Scope
let w = 90
{
    let w = 100;
    console.log(w); // 100
}
console.log(w); // 90

// Const 
/*
Variables defined with const cannot be Redeclared

Variables defined with const cannot be Reassigned

Variables defined with const have Block Scope
*/

const tt = 89
const tt = 58 //cannot be Redeclared
    tt = 89 // cannot be Reassigned

// Block Scope
const pp = "mainul"
{
    const pp ="Hasan" // Block Scope
    console.log(pp); // Hasan
}
console.log(pp); // Mainul

