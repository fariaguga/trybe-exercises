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
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
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
  
    




function votacao (votos){
    let contadorA = 0;
    let contadorB = 0;
    let contadorC = 0;
    for(let index = 0 ; index < votos.length ; index += 1){
        if(votos[index] === "A"){
            contadorA +=1;
            console.log(votos[index]);             
        }
        else if(votos[index] === "B"){
            contadorB +=1;
            console.log(votos[index]);              
        }
        else if(votos[index] === "C"){
            contadorC +=1;
            console.log(votos[index]);              
        }
        
    }
    return { 
        contadorA,
        contadorB,
        contadorC
    }
    
}
console.log(votacao(["A","B","B","C"]));


function votacao (votos){
    let contadorA = 0;
    let contadorB = 0;
    let contadorC = 0;
    let resultado ="";
    for(let index = 0 ; index < 9 ; index += 1){
        if(votos[index] === "A"){
            contadorA +=1;                       
        }
       if(votos[index] === "B"){
            contadorB +=1;                      
        }
       if(votos[index] === "C"){
            contadorC +=1;           
        }
        
    }
if (contadorA > contadorB && contadorA > contadorC){
resultado = "A";
}
else if (contadorB > contadorA && contadorB > contadorC){
resultado = "B";
}
else if (contadorC > contadorA && contadorC > contadorB){
resultado = "C";
}
  return resultado;
}
console.log(votacao(["A","B","B","C","C","A","B","B","C","C"]));