function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
function createDaysOfDecember(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let daysDecemberList= document.getElementById("days");
    
    for (let index2 = 0; index2 < dezDaysList.length; index2 += 1){
        let daysDecember = dezDaysList[index2];
        let daysDecemberListItem =  document.createElement("li");
        
        if(daysDecember === 24 |daysDecember=== 25 | daysDecember === 31){
        daysDecemberListItem.className = "day holiday";            
        daysDecemberListItem.innerHTML = daysDecember;
         daysDecemberList.appendChild(daysDecemberListItem);
        }
        else if(daysDecember === 4 | daysDecember === 11 | daysDecember === 18 | daysDecember === 25|
            daysDecember=== 31){
            daysDecemberListItem.className = "day friday";            
            daysDecemberListItem.innerHTML = daysDecember;
            daysDecemberList.appendChild(daysDecemberListItem);
        }
        else{
            daysDecemberListItem.className = "day";            
            daysDecemberListItem.innerHTML = daysDecember;
            daysDecemberList.appendChild(daysDecemberListItem);
        }

    }

}
createDaysOfDecember();


/*2*/

function createButton(){
    let div = document.querySelector(".buttons-container");
    let string = "Feriados";
    let button = document.createElement("button");
    button.id = "btn-holiday";
    button.innerText = string;
    div.appendChild(button);


}
createButton();


/*3*/

function buttonStyle(){
    let button2 = document.querySelector("#btn-holiday");
    let hollidays = document.querySelectorAll(".holiday")
    let backgroundColor = "rgb(238,238,238)";
    let newColor = "red";

    button2.addEventListener("click", function(){
        for(let index3 = 0 ; index3 < hollidays.length; index3 += 1){
            if(hollidays[index3].style.backgroundColor = newColor){
                hollidays[index3].style.backgroundColor === backgroundColor;
            }
            else{
                hollidays[index3].style.backgroundColor = newColor;
            }
        }
    })
    

};
buttonStyle();

/*4*/ 

function createFridayButton(){
    let buttonFriday = document.createElement("button");
    let div2 = document.querySelector(".buttons-container");
    buttonFriday.id = "btn-friday";
    buttonFriday.innerText = "Friday";
    div2.appendChild(buttonFriday);
    
};
createFridayButton()


/*5*/

function fridayButtonStyle(){
    let buttonSexta = document.querySelector("#btn-friday");
    let sextaDays = document.querySelectorAll(".friday");
    let arraysexta = [4,11,18];
    
    buttonSexta.addEventListener("click",function(){
        let stringSexta = "Friday o//";
        for(let i = 0 ; i < sextaDays.length ; i += 1){
           if(sextaDays[i] !== stringSexta){
               sextaDays[i].innerHTML = stringSexta;
           }
           else{
               sextaDays[i].innerHTML = arraysexta[i];

           }
        }
    })
};
fridayButtonStyle()

/*6*/

function zoomInDays(){
    let dias = document.querySelector("#days");
    
   dias.addEventListener("mouseover",function(event){
        event.target.style.fontSize = "30px";
        event.target.fontWwight = "600";
    })
};
zoomInDays()

function zoomOutDays(){
    let dias = document.querySelector("#days");
    
   dias.addEventListener("mouseout",function(event){
        event.target.style.fontSize = "20px";
        event.target.fontWwight = "200";
    })
};
zoomOutDays()

/*7*/


function createTask(){
    let div3 = document.querySelector(".my-tasks");
    let string3 = "Cozinhar";
    let tasks = document.createElement("span");
    tasks.innerHTML = string3;
    div3.appendChild(tasks);

};
createTask()


/*8*/

/*9*/

/*10*/

/*Bonus*/

function createCompromisso(){
    let buttonAdd = document.querySelector("#btn-add");
    let input2 = document.querySelector("#task-input");
    let ul5 = document.querySelector(".task-list");
    
    buttonAdd.addEventListener("click", function(){
        if(input2.value.length === 0){
            alert("ERRO");
        }
        else{
            let li1 = document.createElement("li");
            li1.innerText = input2.value;
            ul5.appendChild(li1);
        }
    })

    button.addEventListener("keyup",function(event){        
        if (event.keyCode === 13 && input2.value.length > 0 ){
            let li2 = document.createElement("li");
            li2.innerText = input2.value;
            ul5.appendChild(li2);
            input2.value = '';

        }

    });


};
createCompromisso()











