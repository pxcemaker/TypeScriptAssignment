import { app1, app2, app3, app4, app5, app6, app7, app8, app9, init } from "./set";


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



export function resetAll(){
  init();
  app1.innerHTML= "";
  app2.innerHTML="";
  app3.innerHTML="";
  app4.innerHTML="";
  app5.innerHTML="";
  app6.innerHTML="";
  app7.innerHTML="";
  app8.innerHTML="";
  app9.innerHTML="";


}



