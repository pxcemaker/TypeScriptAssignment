// THIS IS A MODULE

import { feld1, feld2, feld3, feld4, feld5, feld6, feld7, feld8, feld9, checkVar1, checkVar2, checkVar3, checkVar4, checkVar5, checkVar6, checkVar7, checkVar8, checkVar9, enemySet1, enemySet2, enemySet3, enemySet4, enemySet5, enemySet6, enemySet7, enemySet8, enemySet9 } from "./myModule";
export let setWin:boolean;
export function alertMe(): void {
  alert("ATTENTION PLEASE");
}
export function validateWinHuman() //Hier wird geprüft ob der Mensch gewonnen hat
{
  switch(feld1||feld2||feld3||feld4||feld5||feld6||feld7||feld8||feld9)
  {
    //horizontale wins
   case (checkVar1&&checkVar2&&checkVar3)===true:
   alert("you won mit feld1+2+3")

  
   break;


   case (checkVar4&&checkVar5&&checkVar6)===true:
    alert("you won mit feld1+4+7")

    break;

    case ( checkVar7&&checkVar8&&checkVar9)===true:
    alert("you won mit feld1+4+7")

    break;
//senkrechte wins
   case (checkVar1&&checkVar4&&checkVar7)===true:
    alert("you won mit feld1+4+7")

    break;

    case (checkVar2&&checkVar5&&checkVar8)===true:
      alert("you won mit feld1+4+7")

      break;

      case (checkVar3&&checkVar6&&checkVar9)===true:
      alert("you won mit feld1+4+7")

      break;
//diagonale wins
      case (checkVar1&&checkVar5&&checkVar9)===true:
        alert("you won mit feld1+4+7")

        break;

        case (checkVar3&&checkVar5&&checkVar7)===true:
          alert("you won mit feld1+4+7")

          break;

  }
  
}

export function validateWinPC() //Hier wird geprüft ob der Mensch gewonnen hat
{
  switch(enemySet1|| enemySet2|| enemySet3|| enemySet4|| enemySet5|| enemySet6|| enemySet7|| enemySet8|| enemySet9)
  {
    //horizontale wins
   case (enemySet1&&enemySet2&&enemySet3)===true:
   alert("you won mit feld1+2+3")

  
   break;


   case (enemySet4&&enemySet5&&enemySet6)===true:
    alert("TocRobo won mit feld 4+5+6")

    break;

    case ( enemySet7&&enemySet8&&enemySet9)===true:
    alert("TocRobo won mit feld7+8+9")

    break;
//senkrechte wins
   case (enemySet1&&enemySet4&&enemySet7)===true:
    alert("TocRobo won mit feld1+4+7")

    break;

    case (enemySet2&&enemySet5&&enemySet8)===true:
      alert("you won mit feld1+4+7")

      break;

      case (enemySet3&&enemySet6&&enemySet9)===true:
      alert("you won mit feld1+4+7")

      break;
//diagonale wins
      case (enemySet1&&enemySet5&&enemySet9)===true:
        alert("TocRobo won mit feld1+5+9")

        break;

        case (enemySet3&&enemySet5&&enemySet7)===true:
          alert("TocRobo won mit feld 3+5+7")

          break;

  }
  
}