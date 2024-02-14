const weatherForm = document.querySelector(".weatherForm")
const cityInput = document.getElementById("cityInput")
const card = document.querySelector(".card")
const apikey = "adb16d9d29c2c88698b79a8d9f66fe49"

weatherForm.addEventListener("submit", async event => {
    event.preventDefault()
    let city = cityInput.value;

    if (city === "") {
        city = "Gazipur"
    }
    try {
        const weaterData = await fetchData(city)
        displayWeatherInfo(weaterData)

    } catch (error) {
        console.log(error)
        displayError(error)
    }
})


async function fetchData(city) {
    try {
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
        const response = await fetch(apiURL)
        console.log(response)
        if (!response.ok) {
            throw new Error("Could not fetch Resource")
        } else {
            return await response.json()
        }
    } catch (error) {
        console.log(error)
    }
}


function displayWeatherInfo(data) {
    const city = data.name
    const temp = data.main.temp
    const humidity = data.main.humidity
    const description = data.weather[0].description
    const id = data.weather[0].id
    card.textContent = ""
    card.style.display = "flex"

    const cityDisplay = document.createElement("h1")
    const tempDisplay = document.createElement("p")
    const humidityDisplay = document.createElement("p")
    const descDisplay = document.createElement("p")
    const weatherEmoji = document.createElement("p")

    cityDisplay.textContent = city
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)} Degree`
    humidityDisplay.textContent = `Humdity : ${humidity} %`
    descDisplay.textContent = description
    weatherEmoji.textContent = getWeatherEmoji(id)

    cityDisplay.classList.add('cityDisplay')
    tempDisplay.classList.add('tempDisplay')
    humidityDisplay.classList.add('humididydisplay')
    descDisplay.classList.add('descDisplay')
    weatherEmoji.classList.add('weatherEmoji')

    card.appendChild(cityDisplay)
    card.appendChild(tempDisplay)
    card.appendChild(humidityDisplay)
    card.appendChild(descDisplay)
    card.appendChild(weatherEmoji)

}

function getWeatherEmoji(weatherId) {
    switch (true) {
        case weatherId >= 200 && weatherId < 300:
            return "⛈"
        case weatherId >= 300 && weatherId < 400:
            return "🌧"
        case weatherId >= 500 && weatherId < 600:
            return "🌨"
        case weatherId >= 700 && weatherId < 800:
            return "🌫"
        case weatherId === 800:
            return "☀"
        case weatherId >= 801 && weatherId < 810:
            return "☁"
        default:
            return "❓"

    }
}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message
    errorDisplay.classList.add("errorDisplay")
    card.textContent = ""
    card.style.display = "flex"
    card.appendChild(errorDisplay)

}