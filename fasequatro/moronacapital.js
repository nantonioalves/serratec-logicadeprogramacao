/*exercicio Moro Na Capital Fase 4

O sistema irá solicitar a digitação da sigla da "UF" de onde você mora. 
E o programa irá dizer o nome completo do estado. 
Para as UFs do sudeste, considerar a entrada em maiúsculas ou minúsculas.
*/

const prompt = require('prompt-sync')();

var UF = prompt("Digite qual a UF deseja conhecer: ");
var resposta = "";
switch(UF){
    case "RJ": resposta = "Rio de Janeiro"; break;
    case "rj": resposta = "Rio de Janeiro"; break;
    case "BA": resposta = "Bahia"; break;
    case "MA": resposta = "Amazonas"; break;
    case "MG": resposta = "Minas Gerais"; break;
    case "mg": resposta = "Minas Gerais"; break;
    case "ES": resposta = "Espirito Santo"; break;
    case "es": resposta = "Espirito Santo"; break;
    default: resposta = "Fora da região";
}
console.log("Seu estado é :",resposta);