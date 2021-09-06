// limite de pessoas na loja 
//Entrada
const prompt = require('prompt-sync')();

const limite = 8;
//Processo
console.log("Tem uma pessoas na porta da loja querendo entrar, ");
var qntde = prompt("quantas pessoas tem na loja?");
var permitir = qntde < limite;
  if (permitir)
  console.log("pode entrar na loja");
  else
  console.log("Nao pode entrar");



