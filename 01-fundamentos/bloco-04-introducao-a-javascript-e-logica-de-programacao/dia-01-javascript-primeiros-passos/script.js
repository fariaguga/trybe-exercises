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


/* 8 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .*/


let numero1 = 5;
let numero2 = 61;
let numero3= 12;

if(numero1 % 2 === 0 | numero2 % 2 === 0 | numero3 %2 === 0 ){
    console.log("true:");
}
else{
    console.log("false");
}


/* 9 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .*/


let number1 = 8;
let number2 = 9;
let number3= 12;

if(number1 % 2 != 0 | number2 % 2 != 0 | number3 %2 != 0 ){
    console.log("true");
}
else{
    console.log("false");
}


/* 10 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)*/


let custo = 10;
let venda = 20;

let custoTotal = (((custo*0.2)*1000)+custo * 1000);
let lucro = ((venda*1000) - custoTotal);

if(custo > 0 && venda > 0 ){
    console.log("LUCRO");
    console.log(lucro);
}
else{
    console.log("Erro");
}


/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos? */

















