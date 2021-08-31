/* 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Verifique se o array passado por parâmetro não sofreu alterações
Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado */

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
const myRemove1 = myRemove([1,2,3,4],3);
assert.deepStrictEqual(myRemove1,[1,2,4], 'retorna [1,2,4]');

const myRemove2 = myRemove([1,2,3,4],3);
assert.notDeepStrictEqual(myRemove2,[1,2,3,4], 'Não retorna [1,2,3,4] ');

const myremove3 = myRemove([1,2,3,4],5);
assert.deepStrictEqual(myremove3, [1,2,3,4],'O array de entrada nao sofreu alterações');