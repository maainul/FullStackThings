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

randBtn.onclick = function () {
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
    if (val < 0) {
        message.textContent = 'Your age is 0. You are new Born baby.'
    } else if (val < 18) {
        message.textContent = 'Your age is less than 18. You are not eligible'
    } else if (val > 100) {
        message.textContent = 'Your age is More than 100. You are Too old'
    } else {
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

checkBoxsubmitBtn.onclick = function () {
    if (myCheckBox.checked) {
        subResult.textContent = `You are Subscribed.....`
        subResult.style.color = 'green'
    } else {
        subResult.textContent = `You are NOT Subscribed.....`
        subResult.style.color = 'red'
    }

    if (visaBtn.checked) {
        paymentResult.textContent = 'You are Paying with visa'
    } else if (masterCardBtn.checked) {
        paymentResult.textContent = 'You are Paying with Master Card'
    } else if (payPalBtn.checked) {
        paymentResult.textContent = 'You are Paying with Paypal'
    } else {
        paymentResult.textContent = 'You must select a Payment Type'
    }
}

// Ternary OPERATOR : Short Cut to If Else Statement
// Switch Statement is efficient way to write switch case
let day = 8
switch (day) {
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    case 7:
        console.log('Sunday')
        break
    default:
        console.log('Not a Day')
}


// Array

let fruits = ['apple', 'orange', 'banana', 'coconut']

console.log(fruits)

fruits.pop() // Remove from last
console.log(fruits)

fruits.shift() // remove from first
console.log(fruits)

fruits.unshift('mango') // add to first
console.log(fruits)

fruits.push('grape')

console.log(fruits)

let noOfFruits = fruits.indexOf('man')
console.log(noOfFruits)

// REST PARAMETER
function openFridge(...foods) {
    console.log(foods)
}

const food1 = 'Pizza'
const car = 'BMW'
const food3 = 125
const food4 = 'Pizza'
const food5 = 125.69

openFridge(food1, car, food3, food4, food5)


let nums = [1, 2, 3, 4, 5]
nums.forEach(double)
nums.forEach(tripple)
nums.forEach(square)
nums.forEach(cube)
nums.forEach(display)


function double(element, index, array) {
    array[index] = element * 2
}

function tripple(element, index, array) {
    array[index] = element * 3
}

function square(element, index, array) {
    array[index] = Math.pow(element, 3)
}

function cube(element, index, array) {
    array[index] = element * element * element
}

function display(element) {
    console.log(element)
}


let myFruits = ["apple", "orange", "banana", "coconut"]

// myFruits.forEach(toUpperCase)
myFruits.forEach(capitalize)
myFruits.forEach(display)

function toUpperCase(element, index, array) {
    array[index] = element.toUpperCase()
}

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}

const sqrt = nums.map(square)

console.log(sqrt)

function square(element, array, index) {
    return Math.pow(element, 2)
}

const students = ["karim", 'jamal', 'kamal', 'uday']

const stuUpper = students.map(uppercase)
console.log(stuUpper)

function uppercase(element) {
    return element.toUpperCase()
}

const prices = [5, 30, 10, 25, 15, 20]


const maximum = prices.reduce(getMax)
const miniMum = prices.reduce(getMin)

console.log(maximum)
console.log(miniMum)

function getMax(accumulator, element) {
    return Math.max(accumulator, element)
}


function getMin(accumulator, element) {
    return Math.min(accumulator, element)
}

const person1 = {
    perName: "spongebarg",
    favFood: "hotdogs",
    sayHello: function () { console.log(`I am ${this.favFood}`) },
    eat: function () { console.log(`this ${this.perName} is eating ${this.favFood}`) }

}

person1.eat()
person1.sayHello()



class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }
    displayProduct() {
        console.log(`Product : ${this.name}`)
        console.log(`Price : ${this.price}`)
    }
}
const product1 = new Product("Shirt", 19.44)
product1.displayProduct()



// Array of objects

const fruitss = [
    {name:'apple',color:'red',calories:95},
    {name:'orange',color:'orange',calories:120},
    {name:'banana',color:'yellow',calories:195},
    {name:'coconut',color:'yellow',calories:85}
]

// console.log(fruitss[0].name)
// console.log(fruitss[0].name)
// console.log(fruitss[1].color)
// console.log(fruitss[1].calories)
// console.log(fruitss[2].name)

const fruitNames = fruitss.map(fruit => fruit.name);
const fruitColor = fruitss.map(fruit => fruit.color);
const fruitColories = fruitss.map(fruit => fruit.calories);


console.log(fruitNames)
console.log(fruitColor)
console.log(fruitColories)


const yellowFruits = fruitss.filter(fruit => fruit.color === "yellow")
const lowFruitCalories = fruitss.filter(fruit => fruit.calories < 100 )
const highFruitCalories = fruitss.filter(fruit => fruit.calories > 100 )

console.log(yellowFruits)
console.log(lowFruitCalories)
console.log(highFruitCalories)

// Reduce Method Will Return a Single Value

const maxFruit = fruitss.reduce(
    (max, fruit) => 
            fruit.calories > max.calories ? fruit : max );

console.log(maxFruit)

let numbers = [10, 12, 53, 84, 9]

numbers.sort((a,b) => a - b)
numbers.sort((a,b) => b -a)
console.log(numbers)


let person = [
    {name:'spongberg',age:30, gpa:3.0},
    {name:'patrick',age:37, gpa:1.5},
    {name:'squidward',age:51, gpa:2.5},
    {name:'sandy',age:27, gpa:4.0},
    {name:'andy',age:29, gpa:2.0},
]

person.sort((a,b)=> a.age - b.age)
person.sort((a,b)=> a.gpa - b.gpa)
person.sort((a,b)=> a.name - b.name)

console.log(person)


// const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K']
// shuffle(cards)
// console.log(cards)

// function shuffle(array){
//     for(let i = array.length -1; i >=0; i--){
//         const random = Math.floor(Math.random() * (i + 1))
//         [array[i], array[random]] = [array[random], array[i]]
//     }
// }


//  Date Object in js
// Date(year,month,day,hour,day,minute,second,ms)
// const date = new Date("2024-01-02T12:00:00Z")
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth()
const days = date.getDate()

console.log(year,month,days)



function CreateGame () {
    let score = 0;
    function increaseScore(points){
        score += points;
        console.log(`+${points} pts`)
    }
    
    function decreaseScore(points){
        score -= points
        console.log(`-${points}pts`)
    }
    
    function getScore(){
        return score
    }
    return {increaseScore,decreaseScore,getScore}    
}

    CreateGame().increaseScore(5)
    CreateGame().increaseScore(5)
    CreateGame().getScore()

console.log(getScore())

// SetTimeout
const timeOtID = setTimeout(()=> window.alert('Hello'),3000);

//


function startTimer() {
    setTimeout(()=> window.alert('Hello'), 3000)
}

function clearTime() {
    setTimeout(()=> window.alert('Hello'), 3000)
}
































 

