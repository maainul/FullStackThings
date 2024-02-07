// Find Radius
const PI = 3.1416
document.getElementById('mySubmit').onclick = function () {
    let radius = document.getElementById('myRadius').value
    radius = Number(radius)
    let cir = radius * 2 * PI
    document.getElementById('myShowCircum').textContent = cir + " cm"
}

/*
1. First Pick Click Event : If Click Happend then
2. Pick input value by id 
3. Convert to Number
4. Calculate the value


*/



// Counter




const incBtn = document.getElementById('increaseBtn')
const decBtn = document.getElementById('decreaseBtn')
const resBtn = document.getElementById('resetBtn')
const countLbl = document.getElementById('countLabel')
let count = 0

incBtn.onclick = function () {
    count++
    countLbl.textContent = count
}

decBtn.onclick = function () {
    count--
    countLbl.textContent = count
}

resBtn.onclick = function () {
    countLbl.textContent = 0
}

/*
 Step 1 : Pick the increase button by its id
 Step 2 : Pick the decrease button by its id
 Step 3 : Pick the reset button by its id
 Step 4 : Pick the counter label  by its id
 Step 5: define count variable to 0
 Step 6 : if incrase clicked then ++ else -- and reset = 0
 
*/


// Math
let x = 3.99
console.log(Math.floor(x))
console.log(Math.ceil(x))
console.log(Math.trunc(x))
console.log(Math.pow(x, 2))
console.log(Math.sqrt(9))
// Random Number Generator
let rand = Math.random()
console.log(rand)