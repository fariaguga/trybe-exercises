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



