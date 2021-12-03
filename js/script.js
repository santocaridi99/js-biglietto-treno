//qui dico che outputHtml avrà accesso al documento tramite id ouput
const outputHtml =  document.getElementById('output');
//qui chiederò all'utente di inserire numero km che vuole percorrere con un prompt
let numberKm = prompt('inserisci numero km che  vuoi percorrere');
numberKm = parseFloat(numberKm);
console.log(numberKm);
//qui chiederò all'utente l'età del passeggero attraverso prompt
let age = prompt('inserisci età del passeggero');
age = parseInt(age);
console.log(age);
//qui dichiaro prezzo biglietto che dovrà essere (0.21 € a km)
//il prezzo è un numero reale
//dichiaro una costante k per indicare 0.21 euro ,che moltiplicherò ai km
const k = 0.21;
price = k * numberKm;
price = parseFloat(price).toFixed(2);
console.log(price);
//qui controllo se età è minore di 18 applico sconto del 20%(prezzo * 20 diviso 100)
//se età >=65 allora applico sconto del 40%(prezzo * 40 diviso 100)
//il resto paga senza sconti :D
//dichiaro variabile sconto
let sconto;
sconto = parseFloat(sconto);
//dichiaro variabile final price che sarà il prezzo pieno - sconto applicato
let finalPrice;
//qui svolgo la mia condizione
if(age<18){
    sconto= (price * 20) / 100; 
    finalPrice = price - sconto;
    finalPrice=parseFloat(finalPrice).toFixed(2);
    outputHtml.innerHTML = `Il tuo prezzo è : ${finalPrice}€`;
}else if(age>=65){
    sconto = (price * 40) / 100;
    finalPrice = price - sconto;
    finalPrice=parseFloat(finalPrice).toFixed(2);
    outputHtml.innerHTML = `il tuo prezzo è: ${finalPrice}€`;
}else{
    finalPrice = price;
    outputHtml.innerHTML = `il tuo prezzo è: ${finalPrice}€`;
}
