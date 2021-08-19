let estadosArray =['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
let estado = document.getElementById("estado");
for(let index=0; index < estadosArray.length ; index += 1){
    let createEstado = document.createElement("option");
    estado.appendChild(createEstado).innerText = estadosArray[index];
    estado.appendChild(createEstado).value = estadosArray[index];

    
}
