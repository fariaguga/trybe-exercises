/* 1 - Para o primeiro exercício de hoje, faça um programa 
que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito 
de asteriscos de lado de tamanho n . Por exemplo:*/



let num = 5;
let ast = "*";
let line = "";
for( let index = 0 ; index < num ; index += 1){
    if(num > 1){
    line += ast;
    }
    
    
}
for(let inded = 0 ; inded < num ; inded +=1){
    console.log(line);
} 

/*let n = 5;
for( let index =0 ; index < n ; index += 1){
    console.log("*".repeat(n));
}*/



/* 2 - Para o segundo exercício, faça o mesmo que antes, mas 
que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:*/

let num = 5;
let ast = "*";
let contador = "";
for(let index = 0 ; index < num ; index += 1){
    contador += ast;
    console.log(contador);
}




/* 3 - Agora inverta o lado do triângulo. Por exemplo:

     *
    **
   ***   
  ****
 *****        */
  


let n = 5;
let ka = n-1;
for( let index = 1 ; index <= n ; index += 1){
    
    console.log(" ".repeat(ka) + "*".repeat(index));
    ka -= 1;

}


/* 4 - Depois, faça uma pirâmide com n asteriscos de base:
Copiar
n = 5

  *
 ***
*****  */

let n = 5;
let ka = n-1
let fdp = 1;

for(let index = 1 ; index <= (3) ; index += 1){
    console.log(" ".repeat(ka/2) + "*".repeat(fdp));
    ka -= 2;
    fdp += 2;
    
    
}


let n = 4;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};


let n = 5; 
let string = ""; //Declarando variável .
for(let i = 1; i <= n; i++){ //Declarando um contador menor igual a n.
    for(let g = 1; g <= n - i; g++){ //Declarando um contador que será menor igual à n menos o i, que na primeira rodada do loop, será 2, que resultará em 3.
    string += " "; //Adicionando espaço na string, 3 espaços.
}
    for(let p = 0; p < 2 * i - 1; p++) { //Aqui, estou adicionando um crescimento dinâmico ao p, pois conforme o i cresce, p crescerá junto. O -1 está para garantir que sempre será um valor ímpar começado pelo 1, pois o i começa valendo 2 na primeira rodada do loop.
        string += "*" //Adicionando o asterisco.
    }
    string += "\n" //Pulando para a linha de baixo para recomeçar o loop.
}
console.log(string) //Imprimindo a string.



/* BÔNUS */



/*Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
*/

let n = 17;
let contador = 0;
for(let index = 1 ; index <= n ; index += 1){
  if(n % index === 0){
    contador += 1;
  }
}
if(contador === 2){
  console.log("O número é primo: " +n);
}
else{
  console.log("o número não é primo: "+n);
}
  


/* Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
Copiar
Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******    */



let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}
