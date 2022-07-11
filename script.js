window.onload = function() {
// window.onload irá carregar determinada função quando a página for carregada.   
let seconds = 00; 
let tens = 00; 
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let Interval ;

// É possível chamar funções a partir do próprio JavaScript, usando o onclick em váriavéis anteriormente declaradas. 
start.onclick = function() {

    // clearInterval irá limpar o intervalo de qualquer variável dentro dele. 
    clearInterval(Interval);

    // Aqui irá ser iniciado o contador. starTimer é a função que será chamada futuramente, e valor logo adiante é o intervalo de quanto em quanto tempo a função será chamada, nesse caso em milisegundos. 
    Interval = setInterval(startTimer, 10);
    // setInterval irá, como o nome diz, setar um intervalo definido pela função e pelo tempo.
}

stop.onclick = function() {
    //O botão parar irá limpar o invetervalo, fazendo com que o contador pare. 
    clearInterval(Interval);
}

reset.onclick = function() {
    // O botão reset irá limpar o intervalo, colocar os valores de segundos e milésimos em 0 e adicionar esses valores de volta ao display. 
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    document.getElementById("tens").innerHTML = tens;
    document.getElementById("seconds").innerHTML = seconds;
}

// Aqui é chamada a função inserida anteriormente no "start.onclick."
function startTimer() {
    // tens++ irá fazer com que o valor dos milésimos suba.
    tens++ 

    // Se o valor de tens for menor que nove, o valor irá subir até nove. A string "0" serve para manter o valor da primeira unidade em 0 o tempo inteiro.
    if (tens <= 9){
        document.getElementById("tens").innerHTML = "0" + tens;
    }

    // Se o valor de tens passar de 9, ele irá 'resetar' o valor da unidade e aumentar o valor da dezena.
    if (tens > 9) {    
        document.getElementById("tens").innerHTML= tens;
    }


    // Se o valor de tens passar de 99, ele irá resetar, adicionando 1 a seconds e repetindo o processo. 
    if (tens > 99) {
        console.log('seconds');
        seconds++;
        document.getElementById("seconds").innerHTML = "0" + seconds;
        tens = 0;
        document.getElementById("tens").innerHTML = "0" + tens;
    }

    // Se o valor de seconds passar de 9, ele irá "resetar" o valor da unidade e aumentar o valor da dezena. 
    if(seconds > 9){
        document.getElementById("seconds").innerHTML = seconds;
    
}}}

