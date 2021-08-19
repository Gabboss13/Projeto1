function exibe(){

 var escolha = prompt("E ai? Já escolheu?");

  while (escolha!= "1" && escolha!="2") {

    escolha= prompt ("Essa opção não existe, né! Escolhe outra aí.")     
       
    }

     if  (escolha === "1") {
            location.href ="gameoveradao.html"}
    
        else  {
        location.href = "adaop2.html"}
}

function exibe2(){

  var escolha = prompt("E ai? Já escolheu?");
 
   while (escolha!= "1" && escolha!="2") {
 
     escolha= prompt ("Essa opção não existe, né! Escolhe outra aí.")     
        
     }
 
      if  (escolha === "1") {
        location.href ="gameoveradao2.html"}
     
       else  {
        location.href = "adaop3.html"}
 }

 function exibe3(){

  var escolha = prompt("E ai? Já escolheu?");
 
   while (escolha!= "1" && escolha!="2") {
 
     escolha= prompt ("Essa opção não existe, né! Escolhe outra aí.")     
        
     }
 
      if  (escolha === "1") {
        location.href ="finaladao1.html"}
     
       else  {
        location.href ="finaladao2.html"}
 }
 
 

// lembrar de: if - game over, else if - fase 2, else - entrada invalida
// linkar pagina game over
// linkar proxima fase
