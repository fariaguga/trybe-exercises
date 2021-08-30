function soma(num1, num2) {
let resultado = num1+num2;
return resultado;
}
console.log(soma(3,2));

const soma = (num1, num2) => num1+num2;
console.log(soma(1,7));



/* PARTE I */
 /*function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizadza fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);*/

/*  1 - Modifique a estrutura da função para que ela seja uma arrow function .
 Modifique as concatenações para template literals .*/

const testingScope = escopo => { 
    if (escopo === true) { 
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true);


  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  // Seu código aqui.
console.log(oddsAndEvens.sort());

  console.log(oddsAndEvens); // será necessário alterar essa linha 😉
  
    




