/* 4 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado */

const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

const atual1 = myFizzBuzz(15);
assert.strictEqual(atual1, 'fizzbuzz', 'O numero é divisivel por 3 e 5'); 

const atual2 = myFizzBuzz(9);
assert.strictEqual(atual2, 'fizz', 'O número é divisível somente por 3');

const atual3 = myFizzBuzz(25);
assert.strictEqual(atual3, "buzz", 'O número é somente divisível por 5');

const atual4 = myFizzBuzz(7);
assert.notStrictEqual(atual4, "buzz",'O número não é divisível por 5');

const atual5 = myFizzBuzz("hello");
assert.strictEqual(atual5, false, 'O parametro inserido não é um número');