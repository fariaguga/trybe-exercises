/* Parte I - Objetos e For/In 
Usando o objeto abaixo, faça os exercícios a seguir:
Copiar
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
*/


/* 1 -  Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

Bem-vinda, Margarida */

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("Bem-vinda, " + info.personagem);


  /* 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' 
  e, em seguida, imprima o objeto no console. Valor esperado no console: */


  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  }
  console.log(info.recorrente);



  /* 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

personagem
origem
nota
recorrente */


let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  }
  for (let key in info){
      console.log(key);
  }



  /* 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim */


let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  }
  for (let key in info){
      console.log(info[key]);
  }



  /* 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha! */



let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  }

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  }


  for (let key in info){
      if (info[key] === info2[key]){
          console.log("Ambos recorrentes");
      }
      else{
        console.log(info[key] + " e " + info2[key]);
      }
  }



  /* Parte II - Funções */
/* 1 - Agora vamos fazer um exercício para te mostrar como funções com responsabilidades bem definidas deixam o código mais bem escrito.
A manipulação de arrays pode ser complexa em alguns momentos e por isso o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada, se você tiver curiosidade de ler mais sobre esses métodos, clique aqui para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e sempre que um método novo for necessário ele será ensinado a você.
Spoiler-alert : para os exercícios do dia, os métodos split , join e reverse podem ser muito úteis.
1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false */


function palindromo(palavra){
    for(let key in palavra){
        if(palavra[key] != palavra[(palavra.length -1) - key]){
         return false;
        }
       
        
    }
    return true;
}
console.log(palindromo("arara"));

/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .*/

let inteiros = [2, 3, 6, 7, 10, 1];

function maiorindex(numeros){
    let maiorindex = 0;
    for(let index in numeros){
        if(numeros[maiorindex] < numeros[index]){
            maiorindex = index;
        }
    }
return maiorindex;

}

console.log(maiorindex (inteiros));


/* 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 .*/

let inteiros = [2, 4, 6, 7, 10, 0, -3];

function menorindex(numeros){
    let menorindex = 0;
    for(let index in numeros){
        if(numeros[menorindex] > numeros[index]){
            menorindex = index;
        }
    }
return menorindex;

}

console.log(menorindex (inteiros));



/* 4 -  Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda .*/


function maiorPalavra(palavras) {
    let maiorPalavra = palavras[0];
    for (let indice in palavras) {
      if (maiorPalavra.length < palavras[indice].length) {
        maiorPalavra = palavras[indice];
      }
    }
    return maiorPalavra;
  }
  
  console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda



  /*6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5 .
Valor esperado no retorno da função: 1+2+3+4+5 = 15 .*/


function gauss(numero){
    contador = 0;
    for(let index = 0 ; index <= numero; index += 1){
       
            contador += index;

        }
        return contador;
    }
    console.log(gauss(5));


    /* 7 -  Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . 
    Considere que a string ending sempre será menor que a string word .
    Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be') ;
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan') ;
Retorno esperado: false*/

function frase(word,ending){
 
  if(word.length > ending.length ){
    return true;
  }
  return false;
}
console.log(frase("faria","gustavo"));





    /*1*/
    function compareTrue (parametro1,parametro2){
        if(parametro1 === true && parametro2 === true){
            return true;
        }
        

        else{
            return false

        }
        
    
    }
    console.log(compareTrue(false, true));


    /*2*/
    function calcArea(base,height){
        calcArea = (base * height)/2;
        return calcArea;
        

    







