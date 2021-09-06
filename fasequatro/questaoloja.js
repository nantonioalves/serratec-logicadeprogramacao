

const limite = 8;
var qntde = 4;

var liberado = ( qntde < limite);
var proximo = (qntde == 7);

if (liberado)
 if (proximo)
  console.log("nao deixe entrar s estiver acompanhado");
 else
  console.log("entrada liberada ");
else 
  console.log("aguarde um pouco ");
