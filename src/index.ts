//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!

import { getRandomInt } from "./myModule";
import { alertMe, } from "./myOtherModule";

document.querySelector("#test") ?.addEventListener("click", put1);
document.querySelector("#test2") ?.addEventListener("click", put2);
document.querySelector("#test3") ?.addEventListener("click", put3);
document.querySelector("#test4") ?.addEventListener("click", put4);
document.querySelector("#test5") ?.addEventListener("click", put5);
document.querySelector("#test6") ?.addEventListener("click", put6);
document.querySelector("#test7") ?.addEventListener("click", put7);
document.querySelector("#test8") ?.addEventListener("click", put8);
document.querySelector("#test9") ?.addEventListener("click", put9);
export let checkVar1:boolean;
export let checkVar2:boolean;
export let checkVar3:boolean;
export let checkVar4:boolean;
export let checkVar5:boolean;
export let checkVar6:boolean;
export let checkVar7:boolean;
export let checkVar8:boolean;
export let checkVar9:boolean;
export let feld1:boolean;
export let feld2:boolean;
export let feld3:boolean;
export let feld4:boolean;
export let feld5:boolean;
export let feld6:boolean;
export let feld7:boolean;
export let feld8:boolean;
export let feld9:boolean;

init();
let enemyChoice:number;
const felder =[1,2,3,4,5,6,7,8,9]
function init(){
  feld1 = false;
  feld2 = false;
  feld3 = false;
  feld4 = false;
  feld5 = false;
  feld6 = false;
  feld7 = false;
  feld8 = false;
  feld9 = false;
  checkVar1=false;
  checkVar2=false;
  checkVar3=false;
  checkVar4=false;
  checkVar5=false;
  checkVar6=false;
  checkVar7=false;
  checkVar8=false;
  checkVar9=false;



  

console.log(checkVar1)
  alertMe();
}

function put1() {
  console.log("setze in feld 1 ein X")
  console.log(checkVar1)
  if(feld1===false&& checkVar1===false){
   checkVar1 = true;
   feld1=true;
   console.log(checkVar1)
    // 1. Select the div element using the id property
 const app = document.getElementById("test");
 // 2. Create a new <p></p> element programmatically
 const p = document.createElement("p");
 // 3. Add the text content
 p.textContent = "X";
 // 4. Append the p element to the div element //wichtig
 app?.appendChild(p);
 validateWin();
 computerSet();
 
   } 
 }
 function put2() {
   console.log("setze in feld 2 ein X")
   if(feld2===false && checkVar2=== false){
     checkVar2 =true;
     feld2=true;
     console.log(checkVar2)
  const app = document.getElementById("test2");
  const p = document.createElement("p");
  p.textContent = "X";
  app?.appendChild(p);
  validateWin();
  computerSet();
 
    } 
  }
  function put3() {
 
   console.log("setze in feld 3 ein X")
   if(feld3=== false && checkVar3=== false){
     checkVar3 =true;
     feld3=true;
     console.log(checkVar3)
  const app = document.getElementById("test3");
  const p = document.createElement("p");
  p.textContent = "X";
  app?.appendChild(p);
  validateWin();
  computerSet();
    } 
  }

  function put4() {
    console.log("es cuadasd")
    if(feld4=== false && checkVar4=== false){
      checkVar4 =true;
      feld4=true;
      console.log(checkVar4)
   const app = document.getElementById("test4");
   const p = document.createElement("p");
   p.textContent = "X";
   app?.appendChild(p);
   validateWin();
   computerSet();
  
     } 
   }
   function put5() {
    console.log("es cuadasd")
    if(feld5=== false && checkVar5=== false){
      checkVar5 =true;
      feld5=true;
      console.log(checkVar5)
   const app = document.getElementById("test5");
   const p = document.createElement("p");
   p.textContent = "X";
   app?.appendChild(p);
   validateWin();
   computerSet();
  
     } 
   }
   function put6() {
    console.log("setze in feld 6 ein X")
    if(feld6=== false&& checkVar6=== false){
      feld6=true;
      checkVar6 = true;
      console.log(checkVar6)
   const app = document.getElementById("test6");
   const p = document.createElement("p");
   p.textContent = "X";
   app?.appendChild(p);
   validateWin();
   computerSet();
     } 
   }
   function put7() {
    console.log("es cuadasd")
    if(feld7=== false && checkVar7=== false){
      checkVar7 =true;
      feld7=true;
      console.log(checkVar7)
   const app = document.getElementById("test7");
   const p = document.createElement("p");
   p.textContent = "X";
   app?.appendChild(p);
   validateWin();
   computerSet();
  
     } 
   }

   function put8() {
    console.log("setze in feld 8 ein X")
    if(feld8=== false && checkVar8=== false){
      checkVar8 = true;
      feld8=true;
      console.log(checkVar8)
   const app = document.getElementById("test8");
   const p = document.createElement("p");
   p.textContent = "X";
   app?.appendChild(p);
   validateWin();
   computerSet();
  
     } 
   }
   function put9() {
    console.log("es cuadasd")
    if(feld9=== false && checkVar9=== false){
      checkVar9 = true;
      feld9=true;
      console.log(checkVar9)
   const app = document.getElementById("test9");
   const p = document.createElement("p");
   p.textContent = "X";
   app?.appendChild(p);
   validateWin();
   computerSet();
  
     } 
   }

   function resert(){
     let reset = document.getElementById("test"&&"test1"&&"test3"&&
     "test4"&&"test5"&&"test6"&&"test7"&&"test8"&&"test9")
     const p = document.createElement("p");
    p.textContent = " ";
  reset?.appendChild(p);
   }


function validateWin()
{
  switch(feld1||feld2||feld3||feld4||feld5||feld6||feld7||feld8||feld9)
  {
    //horizontale wins
   case (feld1&&feld2&&feld3&&
    checkVar1&&checkVar2&&checkVar3)===true:
   alert("you won mit feld1+2+3")
   resert();
   break;


   case (feld4&&feld5&&feld6&&
    checkVar4&&checkVar5&&checkVar6)===true:
    alert("you won mit feld1+4+7")
    break;

    case (feld7&&feld8&&feld9&&
      checkVar7&&checkVar8&&checkVar9)===true:
    alert("you won mit feld1+4+7")
    break;
//senkrechte wins
   case (feld1&&feld4&&feld7&&
    checkVar1&&checkVar4&&checkVar7)===true:
    alert("you won mit feld1+4+7")
    break;

    case (feld2&&feld5&&feld8
      &&checkVar2&&checkVar5&&checkVar8)===true:
      alert("you won mit feld1+4+7")
      break;

      case (feld3&&feld6&&feld9
        &&checkVar3&&checkVar6&&checkVar9)===true:
      alert("you won mit feld1+4+7")
      break;
//diagonale wins
      case (feld1&&feld5&&feld9
        &&checkVar1&&checkVar5&&checkVar9)===true:
        alert("you won mit feld1+4+7")
        break;

        case (feld3&&feld5&&feld7
          &&checkVar3&&checkVar5&&checkVar7)===true:
          alert("you won mit feld1+4+7")
          break;


  }

}
//BOOLEAN REINMACHEN SPRICH WENN GESETZT DANN TRUE
//Timer reinsetzen sodass er ne sekunde zum setzen braucht
//WENN COMP 2 mal die gleiche Zahl generiert, soll er trotzdem was setzen
function computerSet(){
  console.log("computer setzt")
  enemyChoice=felder[getRandomInt(1,9)]
  console.log(enemyChoice)
  switch(enemyChoice){
    case 1:
    let app1 = document.getElementById("test");
const p = document.createElement("p");
p.textContent = "O";
app1?.appendChild(p);
feld1=true;
break;

case 2:
  let app2 = document.getElementById("test2");
const p2 = document.createElement("p");
p2.textContent = "O";
app2?.appendChild(p2);
feld2=true;
break;

case 3 :
  let app3 = document.getElementById("test3");
  const p3 = document.createElement("p");
  p3.textContent = "O";
  app3?.appendChild(p3);
  feld3=true;
  break;

  case 4:
  let app4 = document.getElementById("test4");
  const p4 = document.createElement("p");
  p4.textContent = "O";
  app4?.appendChild(p4);
  feld4=true;
  break;

  case 5 :
  let app5 = document.getElementById("test5");
  const p5 = document.createElement("p");
  p5.textContent = "O";
  app5?.appendChild(p5);
  feld5=true;
  break;

  case 6 :
  let app6 = document.getElementById("test6");
  const p6 = document.createElement("p");
  p6.textContent = "O";
  app6?.appendChild(p6);
  feld6=true;
  break;

  case 7 :
    let app7 = document.getElementById("test7");
    const p7 = document.createElement("p");
    p7.textContent = "O";
    app7?.appendChild(p7);
    feld7=true;
    break;

    case 8 :
    let app8 = document.getElementById("test8");
    const p8 = document.createElement("p");
    p8.textContent = "O";
    app8?.appendChild(p8);
    feld8=true;
    break;

    case 9:
    let app9 = document.getElementById("test9");
    const p9 = document.createElement("p");
    p9.textContent = "O";
    app9?.appendChild(p9);
    feld9=true;
    break;
  }
}
 
