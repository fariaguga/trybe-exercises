/* 7 - Escreva a função wordLengths para passar nos testes já implementados. */

const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (words) => {
    let newArray = [];
    for(let index in words){
        newArray.push(words[index].length);
    }
    return newArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);