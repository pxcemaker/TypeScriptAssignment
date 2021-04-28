import { feld1, feld2, feld3, feld4, feld5, feld6, feld7, feld8, feld9, checkVar1, checkVar2, checkVar3, checkVar4, checkVar5, checkVar6, checkVar7, checkVar8, checkVar9, enemySet1, enemySet2, enemySet3, enemySet4, enemySet5, enemySet6, enemySet7, enemySet8, enemySet9 } from "./myModule";
import { setWin } from "./myOtherModule";

const result = document.getElementById("result") as HTMLSpanElement;
export var winsHuman:number;
let hilf:string;


export function howMuchWinsHuman(){
  hilf = winsHuman.toString()
  result.innerHTML = hilf

}

export function zeitSchleife(){
  let i:number;
  if(i=0 , i<=100 , i++){
    i--;
  console.log(i)
  }
  
}


export function animateFelder(){
  
  switch(feld1||feld2||feld3||feld4||feld5||feld6||feld7||feld8||feld9)
  {
    //horizontale wins
   case (checkVar1&&checkVar2&&checkVar3)===true:
    let animate = document.querySelector("#test")
    animate?.classList.add("animation")
    let animate1 = document.querySelector("#test2")
    animate1?.classList.add("animation")
    let animate2 = document.querySelector("#test3")
    animate2?.classList.add("animation")
    winsHuman = +1;

    howMuchWinsHuman();
   break;


   case (checkVar4&&checkVar5&&checkVar6)===true:
    let animate3 = document.querySelector("#test")
    animate3?.classList.add("animation")
    let animate4 = document.querySelector("#test2")
    animate4?.classList.add("animation")
    let animate5 = document.querySelector("#test3")
    animate5?.classList.add("animation")
    break;

    case ( checkVar7&&checkVar8&&checkVar9)===true:

    break;
//senkrechte wins
   case (checkVar1&&checkVar4&&checkVar7)===true:

    break;

    case (checkVar2&&checkVar5&&checkVar8)===true:

      break;

      case (checkVar3&&checkVar6&&checkVar9)===true:

      break;
//diagonale wins
      case (checkVar1&&checkVar5&&checkVar9)===true:

        break;

        case (checkVar3&&checkVar5&&checkVar7)===true:

          break;


    //horizontale wins
   case (enemySet1&&enemySet2&&enemySet3)===true:
 
   break;


   case (enemySet4&&enemySet5&&enemySet6)===true:

    break;
  
    case ( enemySet7&&enemySet8&&enemySet9)===true:
   
    break;
//senkrechte wins
   case (enemySet1&&enemySet4&&enemySet7)===true:
    
    break;

    case (enemySet2&&enemySet5&&enemySet8)===true:
     
      break;

      case (enemySet3&&enemySet6&&enemySet9)===true:
      
      break;
//diagonale wins
      case (enemySet1&&enemySet5&&enemySet9)===true:
        
        break;

        case (enemySet3&&enemySet5&&enemySet7)===true:
          
          break;

  }
  
}



  

