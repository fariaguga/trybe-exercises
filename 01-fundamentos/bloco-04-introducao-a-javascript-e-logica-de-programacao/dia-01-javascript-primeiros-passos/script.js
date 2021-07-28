/* 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)*/


let a;
let b;
a = 10;
b= 20;

let soma = (a + b);
let subtracao = (a - b);
let multiplicacao = (a * b);
let divisao = (a/b);
let modulo = (a % b);

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);


/* 2 - Faça um programa que retorne o maior de dois números. 
Defina no começo do programa duas variáveis com os valores que serão comparados. */

let num1 = 20;
let num2 = 337;

if(num1 > num2){
    console.log(num1);
}
else{
    console.log(num2);
}


/* 3 - Faça um programa que retorne o maior de três números.
 Defina no começo do programa três variáveis com os valores que serão comparados.*/

 let n1 = 5;
 let n2 = 52;
 let n3 = 4;

 if(n1 > n2 && n1>n3){
     console.log(n1);
 }
 else if(n2 > n1 && n2>n3){
     console.log(n2);
 }
 else{
     console.log(n3);
 }

 /* 4 - Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo,
  "negative" se for negativo e "zero" caso contrário.*/



let valor = -60;
if(valor >= 0 ){
    console.log("Positive");
}
else{
    console.log("Negative");
}

/* 5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
 Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.*/

 let ang1 = 90;
 let ang2 = 45;
 let ang3 = 45;
 let soma = (ang1 + ang2 + ang3);

 if(soma === 180 && soma > 0){
     console.log("true");
 }
 else{
     console.log("false");
 }



 /* 6 - Escreva um 
 programa que receba o nome de uma peça 
 de xadrez e retorne os movimentos que ela faz.
 Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais) */



 let peça = "BiShop".toLowerCase();
 if(peça === "bishop"){
     console.log("diagonals");
 }
 else{
     console.log("error");
 }



 /* 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/


let nota = 60;

if(nota >= 90 && nota <=100){
    console.log("A");
}
else if(nota >= 80 && nota <=100){
    console.log("B");
}
else if(nota >= 70 && nota <=100){
    console.log("C");
}
else if(nota >= 60 && nota <=100){
    console.log("D");
}
else if(nota >= 50 && nota <=100){
    console.log("E");
}
else if(nota < 50 && nota >=0){
    console.log("F");
}
else{
    console.log("error");
}









