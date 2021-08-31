/* 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5") */

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const sum1 = sum(4,5);
assert.strictEqual(sum1, 9, 'Quatro mais coinco é igual a nove');

const sum2 = sum(0,0);
assert.strictEqual(sum2, 0, 'Zero mais zero é igual a zero');

assert.throws(sum(4,'5'));