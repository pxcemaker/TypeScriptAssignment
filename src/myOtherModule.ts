// THIS IS A MODULE

import { feld1, feld2, feld3, feld4, feld5, feld6, feld7, feld8, feld9, checkVar1, checkVar2, checkVar3, checkVar4, checkVar5, checkVar6, checkVar7, checkVar8, checkVar9 } from "./myModule";
export let setWin:boolean;
export function alertMe(): void {
  alert("ATTENTION PLEASE");
}
export function validateWin()
{
  switch(feld1||feld2||feld3||feld4||feld5||feld6||feld7||feld8||feld9)
  {
    //horizontale wins
   case (feld1&&feld2&&feld3&&
    checkVar1&&checkVar2&&checkVar3)===true:
   alert("you won mit feld1+2+3")
setWin=true;
  
   break;


   case (feld4&&feld5&&feld6&&
    checkVar4&&checkVar5&&checkVar6)===true:
    alert("you won mit feld1+4+7")
    setWin=true;
    break;

    case (feld7&&feld8&&feld9&&
      checkVar7&&checkVar8&&checkVar9)===true:
    alert("you won mit feld1+4+7")
    setWin=true;
    break;
//senkrechte wins
   case (feld1&&feld4&&feld7&&
    checkVar1&&checkVar4&&checkVar7)===true:
    alert("you won mit feld1+4+7")
    setWin=true;
    break;

    case (feld2&&feld5&&feld8
      &&checkVar2&&checkVar5&&checkVar8)===true:
      alert("you won mit feld1+4+7")
      setWin=true;
      break;

      case (feld3&&feld6&&feld9
        &&checkVar3&&checkVar6&&checkVar9)===true:
      alert("you won mit feld1+4+7")
      setWin=true;
      break;
//diagonale wins
      case (feld1&&feld5&&feld9
        &&checkVar1&&checkVar5&&checkVar9)===true:
        alert("you won mit feld1+4+7")
        setWin=true;
        break;

        case (feld3&&feld5&&feld7
          &&checkVar3&&checkVar5&&checkVar7)===true:
          alert("you won mit feld1+4+7")
          setWin=true;
          break;


  }

}