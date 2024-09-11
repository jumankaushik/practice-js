const inputBtn = document.getElementById("input-btn")
let lengthOp = document.getElementById("length-op")
let volumeOp = document.getElementById("volume-op")
let massOp = document.getElementById("mass-op")
let inputValue = document.getElementById("input-field")


const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

inputBtn.addEventListener("click", function() {
    let baseValue = inputValue.value

    lengthOp.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(2)} feet | ${baseValue} feet = ${(baseValue/meterToFeet).toFixed(2)} meter`
})

inputBtn.addEventListener("click", function() {
    let baseValue = inputValue.value

    volumeOp.textContent = `${baseValue} litres = ${(baseValue * literToGallon).toFixed(2)} gallons | ${baseValue} gallons = ${(baseValue/literToGallon).toFixed(2)} litres`
})

inputBtn.addEventListener("click", function() {
    let baseValue = inputValue.value

    massOp.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(2)} pounds | ${baseValue} pounds = ${(baseValue/kiloToPound).toFixed(2)} kilos`
})

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/