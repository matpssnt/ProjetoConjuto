const display1 = document.getElementById('display1');
const display2 = document.getElementById('display2');
let operations = {"+":somar, "-":subtrair, "*":multiplicar, "/":dividir}
let lastOperation = "";


function convertNumber(number){
    if (number.includes('.')){
        return parseFloat(number)
    }
    return parseInt(number)
}

function somar(a, b){
    return a + b
}
function subtrair(a, b){
    return a - b
}
function multiplicar(a, b){
    return a * b
}
function dividir(a, b){
    if (b == 0){
        throw new Error("Divisão por Zero")
    }
    return a / b
}


function selectOperator(value){
    lastOperation = value
    display2.innerText = display1.innerText
    display2.innerText += value
    display1.innerText = '0'
}

function addValorTela(value) {
    if (display2.innerText.includes("=")){
        display1.innerText = '0'
        display2.innerText = '0'
    }
    if (display1.innerText === '0' && value !== '.')  {
        display1.innerText = value;
    } else {
        if ( value == "." && display1.innerText.includes('.')){
            return
        }
        display1.innerText += value;
    }
}

function limparTela() {
    display1.innerText = '0';
    display2.innerText = ' ';
    lastOperation = "";
}

function limparTela2() {
    if (display2.innerText.includes("=")){
        display1.innerText = '0'
        display2.innerText = ' '
    }else{
        display1.innerText = '0';
    }
}

function inverter(){
    if (display1.innerText != '0'){
        if (display1.innerText.includes("-")){
            display1.innerText = display1.innerText.slice(1)
        }else{
            display1.innerText = `-${display1.innerText}`
        }
    }
}

function apagar() {
    if (display2.innerText.includes("=")){
        display2.innerText = '0'
    }else{
        display1.innerText = display1.innerText.slice(0, -1) || '0';
    }
}

function calcular() {
    try {
        let a = convertNumber(display2.innerText.slice(0, -1))
        let b = convertNumber(display1.innerText)
        
        if (lastOperation != ""){
            display2.innerText = `${a} ${lastOperation} ${b} =`;
            let resultado = operations[lastOperation](a, b)
            display1.innerText = resultado
            lastOperation = "";
        }
        
    } catch {
        display1.innerText = 'Erro';
        setTimeout(limparTela, 1000);
    }
}
