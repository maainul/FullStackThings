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

ote that JavaScript is a single-threaded programming language. It carries asynchronous operations via the callback queue and event loop.