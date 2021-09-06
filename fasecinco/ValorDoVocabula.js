
/***Vocabulário curto**
O povo da tribo "prodragon" só sabe contar usando os dedos da mão. Eles usam essas palavras: Nenhum, um, alguns, e vários. Escreva um tradutor de números inteiros para o dialeto da tribo.
*/

const prompt = require('prompt-sync')();

var traduzir= prompt("qual a palavra para traduzir? ")
var resposta = ""

switch (traduzir) {
case "nenhum": resposta = "0"; break
case "um": resposta = "1"; break
case "alguns": resposta = "2 3 4"; break 
case "varios": resposta = "5 6 7"; break
}
console.log("traduza a palavra em numeros: ", resposta);