document.getElementById('submitBtn').onclick = function () {
    let numDices = document.getElementById('input').value
    let showDices = document.getElementById('showDices')
    let diceImages = document.getElementById('diceImages')

    const values = []
    const images = []


    for (let i = 1; i <= numDices; i++) {
        let randomNumber = Math.floor(Math.random() * 6) + 1
        values.push(randomNumber)
        images.push(`<img src='img/${randomNumber}.png' alt="Dice ${randomNumber}"/>`)
    }
    console.log(images)
    showDices.textContent = `Dice : ${values.join(', ')}`
    diceImages.innerHTML = images.join(' ')
    console.log(diceImages)
}
