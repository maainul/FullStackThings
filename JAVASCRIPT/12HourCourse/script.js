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

// ************************************************** COUNTER *******************************************
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
// console.log(rand)

// Random From 1 to 6 (6 holo heigst 6 porjonto nibe)
// console.log( Math.floor(Math.random() * 6) +1)

// Random From certain Range
const min = 50
const max = 100

// console.log(Math.floor(Math.random() * (max - min))+min)


// ********************** RANDOM GENERATE ****************

const randomLabel = document.getElementById('randomShow')
const randBtn = document.getElementById('randomBtn')

randBtn.onclick = function (){
   let randNum = Math.floor(Math.random() * 100) + 1
   randomLabel.textContent = randNum
}


// IF ELSE CHECK
const submitBtn = document.getElementById('submitBtn')
const inputText = document.getElementById('inputText')
const message = document.getElementById('message')

submitBtn.onclick = function () {
    let val = inputText.value
    val = Number(val)
    if(val < 0){
        message.textContent = 'Your age is 0. You are new Born baby.'
    }else if(val < 18){
        message.textContent = 'Your age is less than 18. You are not eligible'
    }else if(val > 100){
        message.textContent = 'Your age is More than 100. You are Too old'
    }else{
        message.textContent = 'Your can access.'
    }
}

// Checked Property

// Checkbox
const myCheckBox = document.getElementById('myCheckBox')

// Radio Buttons
const visaBtn = document.getElementById('visaBtn')
const masterCardBtn = document.getElementById('masterCardBtn')
const payPalBtn = document.getElementById('payPalBtn')

// Submit Button
const checkBoxsubmitBtn = document.getElementById('checkBoxsubmitBtn')

// Result Show
const subResult = document.getElementById('subResult')
const paymentResult = document.getElementById('paymentResult')

checkBoxsubmitBtn.onclick = function() {
    if(myCheckBox.checked){
        subResult.textContent = `You are Subscribed.....`
        subResult.style.color = 'green'
    }else{
        subResult.textContent = `You are NOT Subscribed.....`
        subResult.style.color = 'red'
    }

    if(visaBtn.checked){
        paymentResult.textContent ='You are Paying with visa'
    } else if(masterCardBtn.checked){
        paymentResult.textContent ='You are Paying with Master Card'
    } else if(payPalBtn.checked){
        paymentResult.textContent ='You are Paying with Paypal'
    }else{
        paymentResult.textContent = 'You must select a Payment Type'
    }
}

// Ternary OPERATOR : Short Cut to If Else Statement
// Switch Statement is efficient way to write switch case
let day = 8
switch(day){
    case 1 : 
        console.log('Monday')
        break
    case 2 : 
        console.log('Tuesday')
        break
    case 3 : 
        console.log('Wednesday')
        break
    case 4 : 
        console.log('Thursday')
        break
    case 5 : 
        console.log('Friday')
        break
    case 6 : 
        console.log('Saturday')
        break
    case 7 : 
        console.log('Sunday')
        break
    default:
        console.log('Not a Day')
}


  