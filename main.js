// ***** SIMON SAYS ***** //

// ***** SETUP ***** //

var arr = [];
var insertedNumber = []
var time = 30
var millisecond = time * 1000;
var ordArr = arr.sort();
var ordInsertedNumber = insertedNumber.sort();
var matchedNumber = [];


// ***** MAIN ***** //

// Generazione 5 numeri random univoci
for (var i = 0; arr.length < 5; i++){
    var numeroGenerato = (randomNumber(1,50))
    // arr.push((randomNumber(1,50)))
    if (!arr.includes(numeroGenerato)){
        arr.push(numeroGenerato)
    } 
}

// Mostriamo i numeri all'utente
gameBegin()
// Inserimento valori dall'utente, verifica ed esito
gameUtente()

// ***** FUNCTIONS ***** // 

// funzione per generare i numeri random
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

// funzione per mostrare l'alert con i numeri da ricordare
function gameBegin(){
    return alert("Questi sono i numeri: " + arr);
}

// funzione per mostrare il prompt per la richiesta all'utente
function promptUtente (){
    return parseInt(prompt("Inserisci il numero"))
}

//funzione loop prompt
function loop(){
    for (var i = 0; i < 5; i++) {
            var addNum = promptUtente();
            insertedNumber.push(addNum);
        }
}

// time function per avvio turno utente con iterazione
function gameUtente(){
    return setTimeout(function(){

        // evocazione loop prompt
        loop();

           for (var i = 0; i < 5; i++) {
            if (ordArr[i] === ordInsertedNumber[i]) {
            
            matchedNumber.push(ordArr[i]);
            }}
            console.log("Ti sei ricordato dei numeri: " + matchedNumber); 
        },5000)} // fine funzione game utente
