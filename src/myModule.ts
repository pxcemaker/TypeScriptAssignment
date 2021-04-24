// THIS IS A MODULE

import { } from "./index";
import { setWin, validateWin } from "./myOtherModule";
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

export var feld1:boolean;
export var feld2:boolean;
export var feld3:boolean;
export var feld4:boolean;
export var feld5:boolean;
export var feld6:boolean;
export var feld7:boolean;
export var feld8:boolean;
export var feld9:boolean;

let enemySet1:boolean;
let enemySet2:boolean;
let enemySet3:boolean;
let enemySet4:boolean;
let enemySet5:boolean;
let enemySet6:boolean;
let enemySet7:boolean;
let enemySet8:boolean;
let enemySet9:boolean;

export function alertMe(): void {
  alert("ATTENTION PLEASE");
}

export function computerSet(){
  console.log("computer setzt")
  enemyChoice=felder[getRandomInt(0,3)]
  console.log(enemyChoice)
  let i:number;
  if(i=2, i=2,i--){
    if(enemyChoice === 1 && feld1===false &&checkVar1===false) {
      let app1 = document.getElementById("test");
      const p = document.createElement("p");
      p.textContent = "O";
      app1?.appendChild(p);
      feld1= true;
      //noch ne "tolle" hilfsvar
   
      enemySet1 = true;
      }
     else if(enemyChoice === 2 && feld2===false &&checkVar2===false) {
      let app1 = document.getElementById("test2");
      const p = document.createElement("p");
      p.textContent = "O";
      app1?.appendChild(p);
      feld2= true;
       enemySet2 = true;
      
    }
    else if(enemyChoice === 3 && feld3===false &&checkVar3===false) {
      let app1 = document.getElementById("test3");
      const p = document.createElement("p");
      p.textContent = "O";
      app1?.appendChild(p);
      feld3= true;
       enemySet3 = true;
      
    }
    else if(enemyChoice === 4 && feld4===false &&checkVar4===false) {
      let app1 = document.getElementById("test4");
      const p = document.createElement("p");
      p.textContent = "O";
      app1?.appendChild(p);
      feld4= true;
       enemySet4 = true;
    }

    else if(enemyChoice === 5 && feld5===false &&checkVar5===false) {
      let app1 = document.getElementById("test5");
      const p = document.createElement("p");
      p.textContent = "O";
      app1?.appendChild(p);
      feld5= true;
       enemySet5 = true;
    }
    else if(enemyChoice === 6 && feld6===false &&checkVar6===false) {
      let app1 = document.getElementById("test6");
      const p = document.createElement("p");
      p.textContent = "O";
      app1?.appendChild(p);
      feld6= true;
       enemySet6 = true;
    }
    else if(enemyChoice === 7 && feld7===false &&checkVar7===false) {
      let app1 = document.getElementById("test7");
      const p = document.createElement("p");
      p.textContent = "O";
      app1?.appendChild(p);
      feld7= true;
       enemySet7 = true;
    }
    else if(enemyChoice === 8 && feld8===false &&checkVar8===false) {
      let app1 = document.getElementById("test8");
      const p = document.createElement("p");
      p.textContent = "O";
      app1?.appendChild(p);
      feld8= true;
       enemySet8 = true;
    }
    else if(enemyChoice === 9 && feld9===false &&checkVar9===false) {
      let app1 = document.getElementById("test9");
      const p = document.createElement("p");
      p.textContent = "O";
      app1?.appendChild(p);
      feld9= true;
      enemySet9 = true;
    }
    else if(((feld1&&feld2&&feld3&&feld4&&feld5&&feld6&&feld7&&feld8&&feld9)||(checkVar1&&checkVar2&&checkVar3&&
      checkVar4&&checkVar5&&checkVar6&&checkVar7&&checkVar8&&checkVar9))===true){
     
      
    }
    else if((enemySet1||enemySet2||enemySet3||enemySet4||enemySet5||enemySet6||enemySet7||enemySet8||enemySet9)===true){
      if(setWin===false){
        console.log("DER PC HAT 2 MAL DIE GLEICHE ZAHL")
        computerSet();

      }
     
     
      
    }
  }
    
    
     
    
    


/*case 2 ||feld2===false: 
  let app2 = document.getElementById("test2");
const p2 = document.createElement("p");
p2.textContent = "O";
app2?.appendChild(p2);
feld2===true;
break;

case 3 || feld3===false :
  let app3 = document.getElementById("test3");
  const p3 = document.createElement("p");
  p3.textContent = "O";
  app3?.appendChild(p3);
  feld3===true;
  break;

  case 4 ||feld4===false:
  let app4 = document.getElementById("test4");
  const p4 = document.createElement("p");
  p4.textContent = "O";
  app4?.appendChild(p4);
  feld4===true;
  break;

  case 5 ||feld5===false:
  let app5 = document.getElementById("test5");
  const p5 = document.createElement("p");
  p5.textContent = "O";
  app5?.appendChild(p5);
  feld5===true;
  break;

  case 6 ||feld6===false :
  let app6 = document.getElementById("test6");
  const p6 = document.createElement("p");
  p6.textContent = "O";
  app6?.appendChild(p6);
  feld6===true;
  break;

  case 7 ||feld7===false:
    let app7 = document.getElementById("test7");
    const p7 = document.createElement("p");
    p7.textContent = "O";
    app7?.appendChild(p7);
    feld7===true;
    break;

    case 8 ||feld8===false:
    let app8 = document.getElementById("test8");
    const p8 = document.createElement("p");
    p8.textContent = "O";
    app8?.appendChild(p8);
    feld8===true;
    break;

    case 9 ||feld9===false:
    let app9 = document.getElementById("test9");
    const p9 = document.createElement("p");
    p9.textContent = "O";
    app9?.appendChild(p9);
    feld9===true;
    break;

    case undefined || (checkVar1||checkVar2||checkVar3||checkVar4||checkVar5||checkVar6||checkVar7||checkVar8||checkVar9||feld1||feld2||feld3||feld4||feld5||feld6||feld7||feld8||feld9)===true:
      computerSet()
      break;
  } */
}


export function getRandomInt(min:number, max:number):number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export class Feld
{
  static innerHTML: any;
  constructor(private container: HTMLImageElement){}
   h(heading: string)
{
 
 
  
  ;



}
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



  

console.log(checkVar1)
  alertMe();
}

export function put1() {
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
 export function put2() {
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
  export function put3() {
 
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

  export function put4() {
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
   export function put5() {
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
   export function put6() {
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
   export function put7() {
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

   export function put8() {
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
   export function put9() {
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

   /*function resert(){
     let reset = document.getElementById("test"&&"test1"&&"test3"&&
     "test4"&&"test5"&&"test6"&&"test7"&&"test8"&&"test9")
    // const p = document.removeElement("p");
 
   }*/


