let screen = document.querySelector('#result')
let clearButton = document.querySelector('#btnClear')

// Display
let result = document.getElementById("result");
function displayOperator(value) {
    result.value + value;
}
function display(value){
result.value += value;
}
// let buttons = document.querySelectorAll(".button")


// function display(value){
//     document.getElementById("result")
// }
document.getElementById(result)

function displayOperator(operator) {
var resultInput = document.getElementById('result');
resultInput.value += ' ' + operator + ' ';
}


function pressButtons(display){
    screen.value += input.value
}



clearButton.addEventListener('click',()=>{
    screen.value = ""
})

document.querySelector('#equal-sign')
.addEventListener('click', ()=>{
    result.value = eval(result.value)
})





