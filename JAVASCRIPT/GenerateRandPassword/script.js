const submitBtn = document.getElementById('submitBtn')
const showPass = document.getElementById('showPass')

submitBtn.onclick = function () {
    let isNumber = false
    let isLowerCase = false
    let isUpperCase = false
    let isCharacter = false
    let passlength = document.getElementById('passLength').value
    isUpperCase = document.getElementById('checkboxUpper').checked ? true : false
    isLowerCase = document.getElementById('checkboxLower').checked ? true : false
    isCharacter = document.getElementById('checkboxChar').checked ? true : false
    isNumber = document.getElementById('checkboxNumber').checked ? true : false
    const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseCharacters = 'ABCDEFGHIJLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const characters = '/*-+._=()&^%$#@!'

    let allowedCharcters = ""
    allowedCharcters = isLowerCase ? allowedCharcters += lowerCaseCharacters : allowedCharcters += ""
    allowedCharcters = isUpperCase ? allowedCharcters += upperCaseCharacters : allowedCharcters += ""
    allowedCharcters = isNumber ? allowedCharcters += numbers : allowedCharcters += ""
    allowedCharcters = isCharacter ? allowedCharcters += characters : allowedCharcters += ""

    if (passlength <= 0) {
        showPass.innerHTML = `Password can not be 0`
    }
    else if (passlength <= 5) {
        showPass.innerHTML = `Password length should be greater than 5`
    } else {
        if (allowedCharcters <= 0) {
            showPass.innerText = `Please Select atleast one Combination`
        } else {
            let randPas = ""

            for (let i = 0; i < passlength; i++) {
                const randIndex = Math.floor(Math.random() * allowedCharcters.length)
                randPas += allowedCharcters[randIndex]
            }
            showPass.innerText = randPas
        }
    }

}


/*

1. Pick Submit button
2. pick input value
3. pick selected checkebox
4. check each selected
5. generate random Number





*/

