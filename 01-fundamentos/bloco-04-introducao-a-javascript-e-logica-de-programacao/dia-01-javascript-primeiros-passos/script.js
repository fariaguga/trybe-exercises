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

