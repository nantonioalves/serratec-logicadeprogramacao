const prompt = require('prompt-sync')();
//entrada
  var a = prompt("vc tem categoria A ? ",resposta);
  var b = prompt("vc tem categoria b ? ",resposta);
  var c = prompt("vc tem categoria c ? ",resposta);
  

  //proceso
var moto = a == "s" || a == "S" || a =="sim";
var carro = b == "s" || b == "S" || b =="sim";
var truc = c == "s" || c == "S" || c =="sim";

var resposta = moto && carro && truc;


//saida
  
  console.log("vc é motorista profissional ?",resposta);

  // pedido do cliente, veja se o carro esta ligado 

  //Emtrada 
console.log("Responda a algumas perguntas com sim ou não");
var barulho = prompt ("O carro esta fazendo barulho? ");
var luzes = prompt ("O carro tem alguma luz acesa? ");
var movimento = prompt ("O carro esta em movimento? ");
  
//Processamento
var ligado = true;

var ligado = barulho == "sim" || luzes == "sim" || movimento == "sim";

//  Saida  

console.log("O carro esta ligado",ligado);

     // pedido do cliente, veja se o carro esta ligado 

