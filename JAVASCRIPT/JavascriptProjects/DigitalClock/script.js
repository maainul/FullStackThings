function updateClock(){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    const now = new Date()
    let hours = now.getHours()
    const meridiem = hours >= 12 ? "PM" : "AM"

    hours = hours % 12 || 12	
    hours = hours.toString().padStart(2,0)

    let minutes = now.getMinutes().toString().padStart(2,0)
    let seconds = now.getSeconds().toString().padStart(2,0)

    let day = weekday[now.getDay()]
    let year = now.getFullYear()
    let month = now.getMonth().toString().padStart(2,0)
    let date = now.getDate()

    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`
    const timeString2 = `${day}, ${date}/${month}/${year}`

    document.getElementById('clock').textContent = timeString
    document.getElementById('day').innerText = timeString2

    document.title = timeString
    console.log(day)
}


updateClock()

setInterval(updateClock,1000)