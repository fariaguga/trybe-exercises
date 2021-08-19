/* CRIA TODOS ESTADOS */
function createAllStates(){
let estadosArray =['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
let estado = document.getElementById("estado");
for(let index=0; index < estadosArray.length ; index += 1){
    let createEstado = document.createElement("option");
    estado.appendChild(createEstado).innerText = estadosArray[index];
    estado.appendChild(createEstado).value = estadosArray[index];          
}
}
createAllStates();
let button = document.getElementById("clear");
let boxs = document.querySelectorAll("input");

/* CRIA BOTÃO DE LIMPAR FORMULÁRIO */
button.addEventListener("click" ,function(){
    for(let index = 0 ; index < boxs.length; index += 1){
    boxs[index].value = "";                
    }
})

/* CONDIÇÕES PARA A DATA */



let sendForms = document.getElementById("enviar");
sendForms.addEventListener("click",function(){
let date = document.getElementById("date").value;
let days = date.substring(0,2);
let month = date.substring(3,5);
let year = date.substring(6,10);

if(days < 0 || days > 31){
    alert("O dia está errado");
}

if(month <0 || month >12){
    alert("o mês está errado");
}
if(year < 0){
    alert("o ano está errado");
}

})
