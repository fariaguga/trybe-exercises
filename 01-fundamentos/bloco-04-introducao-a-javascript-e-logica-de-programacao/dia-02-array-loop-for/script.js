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
    media = soma/((numbers.length))
}
    console.log("A média é: " + media);



/* 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20".
 Caso não seja, imprima a mensagem: "valor menor ou igual a 20";*/


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
let soma = 0;

for(let index = 0; index < numbers.length; index += 1){
    soma += (numbers[index]);
    media = soma/((numbers.length))
}
if(media > 20){
    console.log("Valor maior que 20 :) !");
}
else{
    console.log("Valor menor que 20 :( !");
}


/* 5 - Utilizando for , descubra qual o maior valor 
contido no array e imprima-o;*/



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (index = 0; index < numbers.length; index +=1){
    let numMax = numbers.reduce(function(a,b){
        return Math.max(a,b);
    });

    console.log (numMax);
}

/* 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";*/


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador = 0 ;
for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 != 0){
        contador += 1;
    }
}
console.log(contador);

/* 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;*/


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (index = 0; index < numbers.length; index +=1){
    let numMin = numbers.reduce(function(a,b){
        return Math.min(a,b);
    });

    console.log (numMin);
}


/* 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;*/



let numbers =[];
for(let index = 0 ; index<=25 ; index += 1){
     numbers = [index];
    console.log(index);
}


/*  9 - Utilizando o array criado no exercício anterior imprima o
 resultado da divisão de cada um dos elementos por 2 .*/


 let numbers =[];
for(let index = 0 ; index<=25 ; index += 1){
     numbers = index;
     let div = numbers/2;
     console.log(div);  

}


/* Bônus -
Para os próximos dois exercícios leia este a
rtigo e tente entender o que está acontencedo no código abaixo:*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }



    



 




