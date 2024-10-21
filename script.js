const display = document.querySelector(".display input");

function number(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function deleteValue(){
    display.value = display.value.toString().slice(0, -1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    } catch {
        display.value = "Math Error";
    }
}