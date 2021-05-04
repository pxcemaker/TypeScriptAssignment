import {
  app1,
  app2,
  app3,
  app4,
  app5,
  app6,
  app7,
  app8,
  app9,
  enemySet1,
  enemySet2,
  enemySet3,
  enemySet4,
  enemySet5,
  enemySet6,
  enemySet7,
  enemySet8,
  enemySet9,
  feld1,
  feld2,
  feld3,
  feld4,
  feld5,
  feld6,
  feld7,
  feld8,
  feld9,
  init,
} from "./set";
import { drawOrWin, setWin } from "./validateWin";

/*const result = document.getElementById("result") as HTMLSpanElement;
let speicher:number;

export var winsHuman:number;
let hilf:string;

export function setHumanWin(){
 Leider funktioniert das nicht :/
  winsHuman =+1
  console.log(winsHuman + " wins")
  hilf = winsHuman.toString()
  result.innerHTML = hilf
  winsHuman= speicher;
  speicher =+1
  console.log(speicher + " speicher")
  

  return winsHuman;
  
}*/

export function resetAll() {
  init();
  app1.innerHTML = "";
  app2.innerHTML = "";
  app3.innerHTML = "";
  app4.innerHTML = "";
  app5.innerHTML = "";
  app6.innerHTML = "";
  app7.innerHTML = "";
  app8.innerHTML = "";
  app9.innerHTML = "";
}

export function stopSet() {
  if (setWin === true) {
    enemySet1 === true;
    enemySet2 === true;
    enemySet3 === true;
    enemySet4 === true;
    enemySet5 === true;
    enemySet6 === true;
    enemySet7 === true;
    enemySet8 === true;
    enemySet9 === true;

    feld1 === true;
    feld2 === true;
    feld3 === true;
    feld4 === true;
    feld5 === true;
    feld6 === true;
    feld7 === true;
    feld8 === true;
    feld9 === true;
  }
}

//funktion kopiert von https://www.w3schools.com/js/js_timing.asp
export function alertHumanWin() {
  alert("You won");
  drawOrWin();
}

export function alertTocRoboWin() {
  alert("TocRobo won");
  drawOrWin();
}
export function alertToReset() {
  alert("Please reset your game with the reset Button");
}
