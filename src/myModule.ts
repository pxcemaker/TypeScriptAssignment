// THIS IS A MODULE

import { checkVar1, checkVar2, checkVar3, feld1 } from "./index";
let enemyChoice:number;
const felder =[1,2,3,4,5,6,7,8,9]
export function alertMe(): void {
  alert("ATTENTION PLEASE");
}

export function computerSet(){
  console.log("asdasd3454")
  enemyChoice=felder[getRandomInt(0,1)]
  console.log(enemyChoice)
  if(checkVar1=== 0 && enemyChoice===feld1){
    let app = document.getElementById("test");
// 2. Create a new <p></p> element programmatically
const p = document.createElement("p");
// 3. Add the text content
p.textContent = "O";
// 4. Append the p element to the div element //wichtig
app?.appendChild(p);

  }
}
function getRandomInt(min:number, max:number):number {
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