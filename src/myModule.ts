// THIS IS A MODULE

import { } from "./index";
import { drawOrWin, validateWinHuman, validateWinPC } from "./myOtherModule";
import { howMuchWinsHuman, zeitSchleife } from "./unusedModule";
let enemyChoice:number;
const felder =[1,2,3,4,5,6,7,8,9]
export var checkVar1:boolean;
export var checkVar2:boolean;
export var checkVar3:boolean;
export var checkVar4:boolean;
export var checkVar5:boolean;
export var checkVar6:boolean;
export var checkVar7:boolean;
export var checkVar8:boolean;
export var checkVar9:boolean;

export let app1 = document.getElementById("test2");

export var feld1:boolean;
export var feld2:boolean;
export var feld3:boolean;
export var feld4:boolean;
export var feld5:boolean;
export var feld6:boolean;
export var feld7:boolean;
export var feld8:boolean;
export var feld9:boolean;

export let enemySet1:boolean;
export let enemySet2:boolean;
export let enemySet3:boolean;
export let enemySet4:boolean;
export let enemySet5:boolean;
export let enemySet6:boolean;
export let enemySet7:boolean;
export let enemySet8:boolean;
export let enemySet9:boolean;

let feldnr1:number;
let feldnr2:number;
let feldnr3:number;
let feldnr4:number;
let feldnr5:number;
let feldnr6:number;
let feldnr7:number;
let feldnr8:number;
let feldnr9:number;


export function alertMe(): void {
  alert("ATTENTION PLEASE");
}

export function computerSet(){
  console.log("computer setzt")
  zeitSchleife();
  enemyChoice=felder[getRandomInt(1,9)]
  console.log(enemyChoice)
  let i:number;
  if(i=2, i=2,i--){
    if(enemyChoice === 1 && feld1===false && feldnr1 != enemyChoice) {
      let app1 = document.getElementById("test");
      let p = document.createElement("p");
      p.textContent = "O";
      app1?.appendChild(p);
      feld1= true;
      validateWinPC();
      //noch ne "tolle" hilfsvar
   
      enemySet1 = true;
      }
     else if(enemyChoice === 2 && feld2===false  && feldnr2 != enemyChoice) {
      
      const p = document.createElement("p");
      p.textContent = "O";
      app1?.appendChild(p);
      feld2= true;
       enemySet2 = true;
       validateWinPC();
      
    }
    else if(enemyChoice === 3 && feld3===false && feldnr3 != enemyChoice) {
      let app1 = document.getElementById("test3");
      const p = document.createElement("p");
      p.textContent = "O";
      app1?.appendChild(p);
      feld3= true;
       enemySet3 = true;
       validateWinPC();
      
    }
    else if(enemyChoice === 4 && feld4===false  && feldnr4 != enemyChoice) {
      let app1 = document.getElementById("test4");
      const p = document.createElement("p");
      p.textContent = "O";
      app1?.appendChild(p);
      feld4= true;
       enemySet4 = true;
       validateWinPC();
    }

    else if(enemyChoice === 5 && feld5===false && feldnr5 != enemyChoice) {
      let app1 = document.getElementById("test5");
      const p = document.createElement("p");
      p.textContent = "O";
      app1?.appendChild(p);
      feld5= true;
       enemySet5 = true;
       validateWinPC();
    }
    else if(enemyChoice === 6 && feld6===false && feldnr6 != enemyChoice) {
      let app1 = document.getElementById("test6");
      const p = document.createElement("p");
      p.textContent = "O";
      app1?.appendChild(p);
      feld6= true;
       enemySet6 = true;
       validateWinPC();
    }
    else if(enemyChoice === 7 && feld7===false  && feldnr7 != enemyChoice) {
      let app1 = document.getElementById("test7");
      const p = document.createElement("p");
      p.textContent = "O";
      app1?.appendChild(p);
      feld7= true;
       enemySet7 = true;
       validateWinPC();
    }
    else if(enemyChoice === 8 && feld8===false  && feldnr8 != enemyChoice) {
      let app1 = document.getElementById("test8");
      const p = document.createElement("p");
      p.textContent = "O";
      app1?.appendChild(p);
      feld8= true;
       enemySet8 = true;
       validateWinPC();
    }
    else if(enemyChoice === 9 && feld9===false && feldnr9 != enemyChoice) {
      let app1 = document.getElementById("test9");
      const p = document.createElement("p");
      p.textContent = "O";
      app1?.appendChild(p);
      feld9= true;
      enemySet9 = true;
      validateWinPC();
    }
    else if(((feld1&&feld2&&feld3&&feld4&&feld5&&feld6&&feld7&&feld8&&feld9)||(checkVar1&&checkVar2&&checkVar3&&
      checkVar4&&checkVar5&&checkVar6&&checkVar7&&checkVar8&&checkVar9))===true){
     
      drawOrWin();
    }
    else if(feldnr1 ===enemyChoice || feldnr3=== enemyChoice || feldnr2 === enemyChoice){
      console.log("der comp hat die versucht ins gegnerfeld zu setzen")
      computerSet();
    }
    else if((enemySet1||enemySet2||enemySet3||enemySet4||enemySet5||enemySet6||enemySet7||enemySet8||enemySet9)===true){
     
        console.log("DER PC HAT 2 MAL DIE GLEICHE ZAHL")
        computerSet();

      
      
     
     
      
    }
  }
    
    
     

}


export function getRandomInt(min:number, max:number):number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function init(){
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
  
  howMuchWinsHuman()
}

export function put1() {
  console.log("setze in feld 1 ein X")
  console.log(checkVar1)
  if(feld1===false&& checkVar1===false){
   checkVar1 = true;
   feldnr1 =1 ;
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
 validateWinHuman();
 computerSet();
 
   } 
 }
 export function put2() {
   console.log("setze in feld 2 ein X")
   if(feld2===false && checkVar2=== false){
     checkVar2 =true;
     feldnr2 =2 ;
     feld2=true;
     console.log(checkVar2)
  const app = document.getElementById("test2");
  const p = document.createElement("p");
  p.textContent = "X";
  app?.appendChild(p);
  validateWinHuman();
  computerSet();
 
    } 
  }
  export function put3() {
 
   console.log("setze in feld 3 ein X")
   if(feld3=== false && checkVar3=== false){
     checkVar3 =true;
     feldnr3 =3 ;
     feld3=true;
     console.log(checkVar3)
  const app = document.getElementById("test3");
  const p = document.createElement("p");
  p.textContent = "X";
  app?.appendChild(p);
  validateWinHuman();
  computerSet();
    } 
  }

  export function put4() {
    console.log("es cuadasd")
    if(feld4=== false && checkVar4=== false){
      feldnr4 =4 ;
      checkVar4 =true;
      feld4=true;
      console.log(checkVar4)
   const app = document.getElementById("test4");
   const p = document.createElement("p");
   p.textContent = "X";
   app?.appendChild(p);
   validateWinHuman();
   computerSet();
  
     } 
   }
   export function put5() {
    console.log("es cuadasd")
    if(feld5=== false && checkVar5=== false){
      checkVar5 =true;
      feldnr5 =5 ;
      feld5=true;
      console.log(checkVar5)
   const app = document.getElementById("test5");
   const p = document.createElement("p");
   p.textContent = "X";
   app?.appendChild(p);
   validateWinHuman();
   computerSet();
  
     } 
   }
   export function put6() {
    console.log("setze in feld 6 ein X")
    if(feld6=== false&& checkVar6=== false){
      feld6=true;
      checkVar6 = true;
      feldnr6 =6 ;
      console.log(checkVar6)
   const app = document.getElementById("test6");
   const p = document.createElement("p");
   p.textContent = "X";
   app?.appendChild(p);
   validateWinHuman();
   computerSet();
     } 
   }
   export function put7() {
    console.log("es cuadasd")
    if(feld7=== false && checkVar7=== false){
      feldnr7 =7 ;
      checkVar7 =true;
      feld7=true;
      console.log(checkVar7)
   const app = document.getElementById("test7");
   const p = document.createElement("p");
   p.textContent = "X";
   app?.appendChild(p);
   validateWinHuman();
   computerSet();
  
     } 
   }

   export function put8() {
    console.log("setze in feld 8 ein X")
    if(feld8=== false && checkVar8=== false){
      feldnr8 =8 ;
      checkVar8 = true;
      feld8=true;
      console.log(checkVar8)
   const app = document.getElementById("test8");
   const p = document.createElement("p");
   p.textContent = "X";
   app?.appendChild(p);
   validateWinHuman();
   computerSet();
  
     } 
   }
   export function put9() {
    console.log("es cuadasd")
    if(feld9=== false && checkVar9=== false){
      feldnr9 =9 ;
      checkVar9 = true;
      feld9=true;
      console.log(checkVar9)
   const app = document.getElementById("test9");
   const p = document.createElement("p");
   p.textContent = "X";
   app?.appendChild(p);
   validateWinHuman();
   computerSet();
  
     } 
   }


