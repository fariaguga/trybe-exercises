/* 2 - Desenvolva uma HOF que retorna o 
resultado de um sorteio. Esta HOF irá gerar um 
número aleatório entre 1 e 5 recebendo como parâmetros
 o número apostado e uma função que checa se o número apostado
  é igual ao número sorteado. O retorno da sua 
HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */

const sorteio = (callbackAposta, callbackSorteado) => {
    if (callbackAposta === callbackSorteado) {
        return `Parabéns você ganhou, ${callbackAposta} é igual ao ${callbackSorteado}`;
    }
    return `Tente novamente, ${callbackAposta} é diferente que ${callbackSorteado}`;
}

const aposta = (number) => {
return number;
}
//console.log(aposta(5));

const numberSorteado = () => {
    let luckyNumber = Math.round((Math.random() * (5-1) + 1));
    return luckyNumber;
}
//console.log(numberSorteado());

 const finalScore = sorteio(aposta(2), numberSorteado());
 console.log(finalScore);