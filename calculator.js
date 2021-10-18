var display = document.getElementById("display").innerText;
var memoryValue    = null;
var memoryOperator = null;
var operatorLive   = false;
var resultShown    = false;

function press(x) {
    if(operatorLive===true || resultShown===true) {
        display = x.toString();
        operatorLive = false;
        resultShown = false;
    } else if(x!==0 || display!==0) {
        if(display==="0") {
            display = x.toString();
        } else {
            display += x.toString();
        }
    }
    document.getElementById("display").innerText = display;
}
function clr() {
    memoryValue = null;
    memoryOperator = null;
    display = "0";
    document.getElementById("display").innerText = 0;
}
function calc(operator, a, b) {
    a = Number(a);
    b = Number(b);
    if(operator==='+') {
        return a + b;
    } else if(operator==='-') {
        return a - b;
    } else if(operator==='*') {
        return a * b;
    } else if(operator==='/') {
        if(Number.isInteger(a/b)) {
            return a / b;
        } else {
            return Math.round(1000*a/b) / 1000;
        }
    }
}
function setOP(operator) {
    if(resultShown===true) {
        resultShown = false;
    }
    if(memoryOperator===null) {
        memoryValue = display;
    } else {
        memoryValue = calc(operator, memoryValue, display);
        display = memoryValue;
    }
    memoryOperator = operator;
    operatorLive = true;
    document.getElementById("display").innerText = display;
}
function calculate() {
    display = calc(memoryOperator, memoryValue, display);
    memoryValue = display;
    memoryOperator = null;
    operatorLive = false;
    resultShown = true;
    document.getElementById("display").innerHTML = display;
}