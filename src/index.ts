//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!

import { computerSet } from "./myModule";
import { alertMe, } from "./myOtherModule";

console.log("es cuadasd")
document.querySelector("#test") ?.addEventListener("click", setzeX);
document.querySelector("#test2") ?.addEventListener("click", setzeX);
document.querySelector("#test3") ?.addEventListener("click", setzeX);
export let checkVar1:number;
export let checkVar2:number;
export let checkVar3:number;
export let feld1:number;
init();

function init(){
checkVar1 =0;
checkVar2 =0;
checkVar3 =0;

console.log(checkVar1)
  alertMe();
}

function setzeX(){
 if(document.querySelector("#test"))
 {
   if(checkVar1 ===0){
  //checkVar1 ++;
  console.log(checkVar1)
   // 1. Select the div element using the id property
let app = document.getElementById("test");
// 2. Create a new <p></p> element programmatically
const p = document.createElement("p");
// 3. Add the text content
p.textContent = "X";
// 4. Append the p element to the div element //wichtig
app?.appendChild(p);
feld1 = 1;
computerSet();

 }

else if(document.querySelector("#test2")){
  if(checkVar2 ===0){
    checkVar2 ++;
    console.log(checkVar2)
 const app = document.getElementById("test2");
 const p = document.createElement("p");
 p.textContent = "X";
 app?.appendChild(p);

 }
 else if(document.querySelector("#test3")){
  if(checkVar3 ===0){
    checkVar3 ++;
    console.log(checkVar3)
    // 1. Select the div element using the id property
 const app = document.getElementById("test3");
 // 2. Create a new <p></p> element programmatically
 const p = document.createElement("p");
 // 3. Add the text content
 p.textContent = "X";
 // 4. Append the p element to the div element //wichtig
 app?.appendChild(p);
 }

}
 }
}
validateWin();

}
function validateWin()
{
  if(checkVar1===1 &&checkVar2 ===1 &&checkVar3===1)
  {
   alert("you won")

  }

}

 
