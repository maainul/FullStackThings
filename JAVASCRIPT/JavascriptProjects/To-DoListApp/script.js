let inputBox = document.getElementById('input-box')
let listContainer = document.getElementById('list-container')

// Add Element
function addTask(){
    let val = inputBox.value
    if( val === ''){
        alert('Please Write Something')
    }else{
        let newLiElement = document.createElement('li')
        newLiElement.innerHTML = val
        listContainer.appendChild(newLiElement)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        newLiElement.appendChild(span)
    }
    inputBox.value=""
    saveData()
}

// Checked and Remove Element 
listContainer.addEventListener("click",function(e){
    
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
},false)

// StoreData in LocalStorage
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}


function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()