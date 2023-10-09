function display(result){
    console.log(result);
}

function add(num1,num2,myCallback){
    let sum = num1 + num2;
    myCallback(sum);
}

add(10,20,display);

function isOdd(number){
    return number % 2 != 0;
}

function isEven(number){
    return number % 2 == 0;
}

function filter(numbers,fn){
    let result = [];
    for(const num of numbers){
        if(fn(num)){
            result.push(num);
        }
    }
    return result;
}

let numbers = [1,2,4,7,3,5,6];
console.log(filter(numbers,isOdd));
console.log(filter(numbers,isEven));

// Note that JavaScript is a single-threaded programming language. It carries asynchronous operations via the callback queue and event loop.


function mainFunction(callback){
    console.log("Performing Operation.....");
    // Use setTimeOut to simulate an asynchronous operation
    setTimeout(function(){
        callback("Operation Completed"); 
    },5000);
    //console.log("Print After Call back");
    //console.log("Bye");
}

// Define the callback function
function callbackFunction(result){
    console.log("Result :"+ result);
}

mainFunction(callbackFunction);


const getVar = () =>{
    setTimeout(function () {
        console.log('A Function that takes some time');
    },5000)
}

const printSomething = () =>{
    console.log('Another Function');
}

getVar();
printSomething();

// call back
const getVarC= (callback)=>{
    setTimeout(function(){
        console.log('A Function that takes some time');
        callback();
    },10000)
}
const printSomethingC = ()=>{
    console.log('Another Function');
}

getVarC(printSomethingC);