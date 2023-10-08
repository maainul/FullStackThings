// ### JavaScript Promises
/*
I Promise a Result!
A Promise is a javascript object that links producing code and consume code.


*/
// ### Syntax :
let myPromise = new Promise(function(myResolve,myReject){
    myResolve();
    myReject();
});

myPromise.then(
    function(value){},
    function(error){}
);
// When the producing code obtains the result, it should call one of the two callbacks:
/*
Result Call
Success myResolve(result value)
Error myReject(error object)

### Promise Object Properties

A Javascript promise object can be :

1. Pending
2. Fulfilled
3. Rejected

A Promise Object supports two properties : state and result.

While a Promise object is "Pending"(working) then result is undefined

While a Promise Object is "Fulfilled", the result is a value

While a Promise object is "Rejected", then result is an error object.

myPromise.state	    myPromise.result
"pending"	        undefined
"fulfilled"	        a result value
"rejected"	        an error object

### Example
*/
function myDisplayer(some){
    document.getElementById("demo").innerHTML = some;
}

let mPromise = new Promise(function(myResolve, myReject){
    let x = 5;
    if (x == 0){
        myResolve("OK");
    }else{
        myReject("Error");
    }

});
mPromise.then(
    function(value){myDisplayer(value)},
    function(error){myDisplayer(error)}
);
