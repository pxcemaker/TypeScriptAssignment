//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!

import { validateWin } from "./myModule";
import { alertMe, } from "./myOtherModule";

console.log("es cuadasd")
document.querySelector("#test") ?.addEventListener("click", put);
document.querySelector("#test2") ?.addEventListener("click", put1);
document.querySelector("#test3") ?.addEventListener("click", put2);
export let checkVar1:number;
export let checkVar2:number;
export let checkVar3:number;
init();

function init(){
 
checkVar1 =0;
checkVar2 =0;
checkVar3 =0;
  alertMe();

validateWin();

}

    function put() {

 console.log("es cuadasd")
 console.log(checkVar1)
 if(checkVar1 ===0){
  checkVar1 ++;
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


  } 
}
function put1() {

  console.log("es cuadasd")
  if(checkVar2 ===0){
    checkVar2 ++;
    console.log(checkVar2)
    // 1. Select the div element using the id property
 const app = document.getElementById("test2");
 // 2. Create a new <p></p> element programmatically
 const p = document.createElement("p");
 // 3. Add the text content
 p.textContent = "X";
 // 4. Append the p element to the div element //wichtig
 app?.appendChild(p);
 validateWin();

   } 
 }
 function put2() {

  console.log("es cuadasd")
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
 validateWin();

   } 
 }
 
   