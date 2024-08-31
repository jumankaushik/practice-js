let countEl= document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")
let total = 0
let totalEl = document.getElementById("total-el")

function increment(){
    count = count+1
    //console.log(count)
    countEl.innerText=count
}

function save(){
    let entries= count + " - "
    saveEl.textContent += entries
    total += count
    totalEl.textContent ="Total: "+ total
    count = 0
    countEl.textContent= count
    console.log(total)
}