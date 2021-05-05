// THIS IS A MODULE

import {
  feld1,
  feld2,
  feld3,
  feld4,
  feld5,
  feld6,
  feld7,
  feld8,
  feld9,
  checkVar1,
  checkVar2,
  checkVar3,
  checkVar4,
  checkVar5,
  checkVar6,
  checkVar7,
  checkVar8,
  checkVar9,
  enemySet1,
  enemySet2,
  enemySet3,
  enemySet4,
  enemySet5,
  enemySet6,
  enemySet7,
  enemySet8,
  enemySet9,
} from "./set";
import {
  alertHumanWin,
  alertTocRoboWin,
  alertToReset,
  resetAll,
  stopSet,
} from "./reset";
export let setWin: boolean;
export function drawOrWin(): void {
  if (setWin === true) {
    setTimeout(alertToReset, 100);
    stopSet();
  } else {
    setTimeout(alertToReset, 100);
  }
}
export function validateWinHuman():void {
  //Hier wird geprüft ob der Mensch gewonnen hat
  switch (
    feld1 ||
    feld2 ||
    feld3 ||
    feld4 ||
    feld5 ||
    feld6 ||
    feld7 ||
    feld8 ||
    feld9
  ) {
    //horizontale wins
    case (checkVar1 && checkVar2 && checkVar3) === true:
      setTimeout(alertHumanWin, 100); //kopiert von https://www.w3schools.com/js/js_timing.asp
      setWin = true;
      break;

    case (checkVar4 && checkVar5 && checkVar6) === true:
      setTimeout(alertHumanWin, 100);
      setWin = true;
      break;

    case (checkVar7 && checkVar8 && checkVar9) === true:
      setTimeout(alertHumanWin, 100);
      setWin = true;
      break;
    //senkrechte wins
    case (checkVar1 && checkVar4 && checkVar7) === true:
      setTimeout(alertHumanWin, 100);
      setWin = true;
      break;

    case (checkVar2 && checkVar5 && checkVar8) === true:
      setTimeout(alertHumanWin, 100);
      setWin = true;
      break;

    case (checkVar3 && checkVar6 && checkVar9) === true:
      setTimeout(alertHumanWin, 100);
      setWin = true;
      break;
    //diagonale wins
    case (checkVar1 && checkVar5 && checkVar9) === true:
      setTimeout(alertHumanWin, 100);
      setWin = true;
      break;

    case (checkVar3 && checkVar5 && checkVar7) === true:
      setTimeout(alertHumanWin, 100);
      setWin = true;
      break;
  }
}

export function validateWinPC():void {
  //Hier wird geprüft ob der Mensch gewonnen hat
  switch (
    enemySet1 ||
    enemySet2 ||
    enemySet3 ||
    enemySet4 ||
    enemySet5 ||
    enemySet6 ||
    enemySet7 ||
    enemySet8 ||
    enemySet9
  ) {
    //horizontale wins
    case (enemySet1 && enemySet2 && enemySet3) === true:
      setTimeout(alertTocRoboWin, 100);
      setWin = true;
      break;

    case (enemySet4 && enemySet5 && enemySet6) === true:
      setTimeout(alertTocRoboWin, 100);
      setWin = true;
      break;

    case (enemySet7 && enemySet8 && enemySet9) === true:
      setTimeout(alertTocRoboWin, 100);
      setWin = true;
      break;
    //senkrechte wins
    case (enemySet1 && enemySet4 && enemySet7) === true:
      setTimeout(alertTocRoboWin, 100);
      setWin = true;
      break;

    case (enemySet2 && enemySet5 && enemySet8) === true:
      setTimeout(alertTocRoboWin, 100);
      setWin = true;
      break;

    case (enemySet3 && enemySet6 && enemySet9) === true:
      setTimeout(alertTocRoboWin, 100);
      setWin = true;
      break;
    //diagonale wins
    case (enemySet1 && enemySet5 && enemySet9) === true:
      setTimeout(alertTocRoboWin, 100);
      setWin = true;
      break;

    case (enemySet3 && enemySet5 && enemySet7) === true:
      setTimeout(alertTocRoboWin, 100);
      setWin = true;
      break;
  }
}
