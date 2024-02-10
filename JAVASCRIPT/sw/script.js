let display = document.getElementById('display')

let timer = null;
let startTime = new Date();
let elapsedTime = 0;
let isRunning = false


function start(){
    if(!isRunning){
        startTime = new Date()
        timer = setInterval(update,10);
        isRunning = true
    }
}


function stop(){
    if(isRunning){
        clearInterval(timer)
        elapsedTime = new Date() - startTime
        isRunning = false
    }
}


function reset(){
    timer = null;
    startTime = 0;
    elapsedTime = 0;
    isRunning = false 
    display.textContent = "00:00:00:00"
}


function update(){
    const currentTime = new Date()
    elapsedTime = currentTime - startTime
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
    let seconds = Math.floor(elapsedTime / 1000 % 60)
    let miliseconds = Math.floor(elapsedTime % 1000 / 10)

    // Convert in string
    hours = hours.toString().padStart(2,0)
    minutes = minutes.toString().padStart(2,0)
    seconds = seconds.toString().padStart(2,0)
    miliseconds = miliseconds.toString().padStart(2,0)
    let displayFormat = `${hours}:${minutes}:${seconds}:${miliseconds}`

    display.textContent = displayFormat

    document.title = displayFormat
}