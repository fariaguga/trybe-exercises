/* Aprofunde seus conhecimentos
Leia atentamente os enunciados e faça o que se pede! 
Iremos utilizar esse array para realizar os exercícios do 1 ao 7: */


/* 1 - Nesse primeiro exercício, percorra o 
array imprimindo todos os valores nele contidos com a função console.log();*/


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let index = 0 ; index < numbers.length; index += 1){
    console.log(numbers[index]);
}

/* 2 - Para o segundo exercício, some todos 
os valores contidos no array e imprima o resultado; */



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for(let index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
    
}
console.log(sum);


/* 3 - Para o terceiro exercício, 
calcule e imprima a média aritmética dos valores contidos no array;*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
let soma = 0;

for(let index = 0; index < numbers.length; index += 1){
    soma += (numbers[index]);
    }
    media = soma/((numbers.length))
    console.log("A média é: " + media);
