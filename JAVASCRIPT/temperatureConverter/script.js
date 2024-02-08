let tempInput = document.getElementById('tempInput')
let celToFah = document.getElementById('celToFah')
let fahToCel = document.getElementById('fahToCel')
let submitbtn = document.getElementById('submitbtn')
let showTemp = document.getElementById('showTemp')


submitbtn.onclick = function () {
    let val = tempInput.value
    val = Number(val)
    if (isNaN(val)) {
        showTemp.textContent = 'Please Provide Number'
        showTemp.style.color = 'red'
    } else {
        if (val && celToFah.checked) {
            let temp = celciusToFah(val)
            showTemp.textContent = temp
            document.title = 'Celslus To Fahrenheit'
        } else if (val && fahToCel.checked) {
            let temp = fahrenheitToCel(val)
            showTemp.textContent = temp
            document.title = 'Fahrenheit To Celslus'
        }
        showTemp.style.color = 'green'
    }
}

function celciusToFah(temp) {
    return ((temp * (9 / 5)) + 32)
}

function fahrenheitToCel(temp) {
    return ((temp - 32) * (5 / 9))
}