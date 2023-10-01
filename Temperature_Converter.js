let inputValueEl = document.getElementById('inputValue');
let typeOfValue = document.getElementById('type');
let resultEl = document.getElementById('result');
let resetBtnEl = document.getElementById('reset');
//let total Function // 
//we need to take inputvalue from the user // 

let btnEl = document.getElementById('convertBtn');
btnEl.onclick = function() {
    //Loading // 
    setTimeout(function() {
        if (inputValueEl.value === "") {
            alert('Enter Degree Value');
        } /*Celcius Result*/
        else if (typeOfValue.value === "celcius") {
            let userCelcius = Number.parseInt(inputValueEl.value) * 1;
            resultEl.textContent = userCelcius.toFixed(3) + "C";
        } /*kelvin result */
        else if (typeOfValue.value === 'kelvin') {
            let userKelvin = Number.parseInt(inputValueEl.value) * 273.35;
            resultEl.textContent = userKelvin.toFixed(3) + 'K';
        } /*fahrenheit Result*/
        else if (typeOfValue.value === 'fahrenheit') {
            let userfahrenheit = Number.parseInt(inputValueEl.value) * (9 / 5) + 491.67; // 493.47
            resultEl.textContent = userfahrenheit.toFixed(3) + 'F';
        } /*rankine Result*/
        else if (typeOfValue.value === 'rankine') {
            let userRankine = Number.parseInt(inputValueEl.value) * (9 / 5) + 32; //36.8
            resultEl.textContent = userRankine.toFixed(3) + 'R';
        }
    }, 1000);
    /*Classlist for the Result */
    resultEl.classList.add('result');
}

//reset button //
resetBtnEl.onclick = function() {

    inputValueEl.value = "";
    typeOfValue.value = 'celcius';
    resultEl.textContent = '';
    resultEl.classList.remove('result');
}