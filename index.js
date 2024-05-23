

const display = document.getElementById('display'); 

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
    
}

function del() {
    display.value = display.value.slice(0,-1);
    //slice(start,end)
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(err){
        alert ('Enter valid input');
    }
   
}