/**
 * Se detta som en grund att utgå ifrån.
 * Det är helt fritt att ändra och ta bort kod om ni
 * önskar lösa problemen med andra metoder.
 */

let lcd = null; // displayen

let memory = 0; // Lagrat/gamlat värdet från display
let arithmetic = null; // Vilken beräkning som skall göras +,-, x eller /

function init() {
    lcd = document.getElementById('lcd');
    let keyBoard = document.getElementById('keyBoard')
    keyBoard.onclick = buttonClick;
    let button = document.getElementsByTagName("button");
}

/**
 * Händelsehanterare för kalkylatorns tangentbord
 */
function buttonClick(e) {
    let btn = e.target.id; //id för den tangent som tryckte ner


    // kollar om siffertangent är nedtryckt
    if (btn.substring(0, 1) === 'b') {
        let digit = btn.substring(1, 2); // plockar ut siffran från id:et
        addDigit(digit);

    } 
    else if(btn === "clear") {
        clearLCD();
    }
    else if(btn === 'enter') {
        calculate();
    }
    else if(btn.substring(0, 1) === 'c') {
        addComma('.');
    }
    else { // Inte en siffertangent, övriga tangenter.
        setOperator(btn, lcd.value);
    }
}

/**
 *  Lägger till siffra på display.
 */
function addDigit(digit) {
    lcd.value = lcd.value + digit;
}

/**
 * Lägger till decimaltecken
 */
function addComma() {
    if(lcd.value.includes('.')) {
        console.log('comma');
    }
    else {
        lcd.value = lcd.value + comma;
    }
}

/**
 * Sparar operator.
 * +, -, *, /
 */
function setOperator(operator, siffra){
    arithmetic = operator;
    memory = siffra;
    clearLCD();
}

/**
 * Beräknar ovh visar resultatet på displayen.
 */
function calculate() {
    if(arithmetic === 'add') {
        console.log("add");
        lcd.value = Number(memory) + Number(lcd.value);
    }
    else if(arithmetic === 'sub') {
        console.log("sub");
        lcd.value = memory - lcd.value;
    }
    else if(arithmetic === 'mul') {
        console.log("mul");
        lcd.value = memory * lcd.value;
   }
    else if(arithmetic === 'div') {
        console.log("div");
        lcd.value = memory / lcd.value;
    }
}

/** Rensar display */
function clearLCD() {
    lcd.value = '';
    isComma = false;
}

/** Rensar allt, reset */
function memClear(){
    memory = 0;
    arithmetic = null;
    clearLCD();
}

window.onload = init;
