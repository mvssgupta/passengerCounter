let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerHTML = count
}

function save() {
    let countStr = count + " - "
    saveEl.innerHTML += countStr
    count = 0
    countEl.innerHTML = 0
}

function reset() {
    saveEl.innerHTML = "Previous Entries : "
    count = 0
    countEl.innerHTML = 0
}


