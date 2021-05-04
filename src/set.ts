// THIS IS A MODULE

import {} from "./index";
import {
  drawOrWin,
  setWin,
  validateWinHuman,
  validateWinPC,
} from "./validateWin";

let enemyChoice: number;
const felder = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export var checkVar1: boolean;
export var checkVar2: boolean;
export var checkVar3: boolean;
export var checkVar4: boolean;
export var checkVar5: boolean;
export var checkVar6: boolean;
export var checkVar7: boolean;
export var checkVar8: boolean;
export var checkVar9: boolean;

export var feld1: boolean;
export var feld2: boolean;
export var feld3: boolean;
export var feld4: boolean;
export var feld5: boolean;
export var feld6: boolean;
export var feld7: boolean;
export var feld8: boolean;
export var feld9: boolean;

export let enemySet1: boolean;
export let enemySet2: boolean;
export let enemySet3: boolean;
export let enemySet4: boolean;
export let enemySet5: boolean;
export let enemySet6: boolean;
export let enemySet7: boolean;
export let enemySet8: boolean;
export let enemySet9: boolean;

let feldnr1: number;
let feldnr2: number;
let feldnr3: number;
let feldnr4: number;
let feldnr5: number;
let feldnr6: number;
let feldnr7: number;
let feldnr8: number;
let feldnr9: number;

export let app1 = document.getElementById("xRo1") as HTMLParagraphElement;
export let app2 = document.getElementById("xRo2") as HTMLParagraphElement;
export let app3 = document.getElementById("xRo3") as HTMLParagraphElement;
export let app4 = document.getElementById("xRo4") as HTMLParagraphElement;
export let app5 = document.getElementById("xRo5") as HTMLParagraphElement;
export let app6 = document.getElementById("xRo6") as HTMLParagraphElement;
export let app7 = document.getElementById("xRo7") as HTMLParagraphElement;
export let app8 = document.getElementById("xRo8") as HTMLParagraphElement;
export let app9 = document.getElementById("xRo9") as HTMLParagraphElement;

//kopiert

export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function init() {
  feld1 = false;
  feld2 = false;
  feld3 = false;
  feld4 = false;
  feld5 = false;
  feld6 = false;
  feld7 = false;
  feld8 = false;
  feld9 = false;
  checkVar1 = false;
  checkVar2 = false;
  checkVar3 = false;
  checkVar4 = false;
  checkVar5 = false;
  checkVar6 = false;
  checkVar7 = false;
  checkVar8 = false;
  checkVar9 = false;

  enemySet1 = false;
  enemySet2 = false;
  enemySet3 = false;
  enemySet4 = false;
  enemySet5 = false;
  enemySet6 = false;
  enemySet7 = false;
  enemySet8 = false;
  enemySet9 = false;

  feldnr1 = 0;
  feldnr2 = 0;
  feldnr4 = 0;
  feldnr5 = 0;
  feldnr6 = 0;
  feldnr7 = 0;
  feldnr8 = 0;
  feldnr9 = 0;
  setWin === false;
}

export function put1(): void {
  console.log("setze in feld 1 ein X");
  console.log(checkVar1);
  if (feld1 === false && checkVar1 === false) {
    checkVar1 = true;
    feldnr1 = 1;
    feld1 = true;
    app1.innerHTML = "X";
    validateWinHuman();
    checkIfRow();
  }
}
export function put2(): void {
  console.log("setze in feld 2 ein X");
  if (feld2 === false && checkVar2 === false) {
    checkVar2 = true;
    feldnr2 = 2;
    feld2 = true;
    console.log(checkVar2);
    app2.innerHTML = "X";
    validateWinHuman();
    checkIfRow();
  }
}
export function put3(): void {
  console.log("setze in feld 3 ein X");
  if (feld3 === false && checkVar3 === false) {
    checkVar3 = true;
    feldnr3 = 3;
    feld3 = true;
    console.log(checkVar3);
    //setze X in p element
    app3.innerHTML = "X";
    validateWinHuman();
    checkIfRow();
  }
}

export function put4(): void {
  console.log("es cuadasd");
  if (feld4 === false && checkVar4 === false) {
    feldnr4 = 4;
    checkVar4 = true;
    feld4 = true;
    console.log(checkVar4);
    app4.innerHTML = "X";
    validateWinHuman();
    checkIfRow();
  }
}
export function put5(): void {
  console.log("es cuadasd");
  if (feld5 === false && checkVar5 === false) {
    checkVar5 = true;
    feldnr5 = 5;
    feld5 = true;
    console.log(checkVar5);
    app5.innerHTML = "X";
    validateWinHuman();
    checkIfRow();
  }
}
export function put6(): void {
  console.log("setze in feld 6 ein X");
  if (feld6 === false && checkVar6 === false) {
    feld6 = true;
    checkVar6 = true;
    feldnr6 = 6;
    console.log(checkVar6);
    app6.innerHTML = "X";
    validateWinHuman();
    checkIfRow();
  }
}
export function put7(): void {
  console.log("es cuadasd");
  if (feld7 === false && checkVar7 === false) {
    feldnr7 = 7;
    checkVar7 = true;
    feld7 = true;
    console.log(checkVar7);
    app7.innerHTML = "X";
    validateWinHuman();
    checkIfRow();
  }
}

export function put8(): void {
  console.log("setze in feld 8 ein X");
  if (feld8 === false && checkVar8 === false) {
    feldnr8 = 8;
    checkVar8 = true;
    feld8 = true;
    console.log(checkVar8);
    app8.innerHTML = "X";
    validateWinHuman();
    checkIfRow();
  }
}
export function put9(): void {
  console.log("es cuadasd");
  if (feld9 === false && checkVar9 === false) {
    feldnr9 = 9;
    checkVar9 = true;
    feld9 = true;
    console.log(checkVar9);
    app9.innerHTML = "X";
    validateWinHuman();
    checkIfRow();
  }
}

export function computerSet(): void {
  enemyChoice = felder[getRandomInt(1, 9)];
  console.log(enemyChoice);

  if (enemyChoice === 1 && feld1 === false && feldnr1 != enemyChoice) {
    app1.innerHTML = "O";
    feld1 = true;
    enemySet1 = true;
    validateWinPC();
  } else if (enemyChoice === 2 && feld2 === false && feldnr2 != enemyChoice) {
    app2.innerHTML = "O";
    feld2 = true;
    enemySet2 = true;
    validateWinPC();
  } else if (enemyChoice === 3 && feld3 === false && feldnr3 != enemyChoice) {
    app3.innerHTML = "O";
    feld3 = true;
    enemySet3 = true;
    validateWinPC();
  } else if (enemyChoice === 4 && feld4 === false && feldnr4 != enemyChoice) {
    app4.innerHTML = "O";
    feld4 = true;
    enemySet4 = true;
    validateWinPC();
  } else if (enemyChoice === 5 && feld5 === false && feldnr5 != enemyChoice) {
    app5.innerHTML = "O";
    feld5 = true;
    enemySet5 = true;
    validateWinPC();
  } else if (enemyChoice === 6 && feld6 === false && feldnr6 != enemyChoice) {
    app6.innerHTML = "O";
    feld6 = true;
    enemySet6 = true;
    validateWinPC();
  } else if (enemyChoice === 7 && feld7 === false && feldnr7 != enemyChoice) {
    app7.innerHTML = "O";
    feld7 = true;
    enemySet7 = true;
    validateWinPC();
  } else if (enemyChoice === 8 && feld8 === false && feldnr8 != enemyChoice) {
    app8.innerHTML = "O";
    feld8 = true;
    enemySet8 = true;
    validateWinPC();
  } else if (enemyChoice === 9 && feld9 === false && feldnr9 != enemyChoice) {
    app9.innerHTML = "O";
    feld9 = true;
    enemySet9 = true;
    validateWinPC();
  } else if (
    ((feld1 &&
      feld2 &&
      feld3 &&
      feld4 &&
      feld5 &&
      feld6 &&
      feld7 &&
      feld8 &&
      feld9) ||
      (checkVar1 &&
        checkVar2 &&
        checkVar3 &&
        checkVar4 &&
        checkVar5 &&
        checkVar6 &&
        checkVar7 &&
        checkVar8 &&
        checkVar9)) === true
  ) {
    drawOrWin();
  } else if (
    feldnr1 === enemyChoice ||
    feldnr3 === enemyChoice ||
    feldnr2 === enemyChoice ||
    feldnr4 === enemyChoice ||
    feldnr5 === enemyChoice ||
    feldnr6 === enemyChoice ||
    feldnr7 === enemyChoice ||
    feldnr8 === enemyChoice ||
    feldnr9 === enemyChoice
  ) {
    console.log("der comp hat die versucht ins gegnerfeld zu setzen");

    computerSet();
  } else if (
    (enemySet1 ||
      enemySet2 ||
      enemySet3 ||
      enemySet4 ||
      enemySet5 ||
      enemySet6 ||
      enemySet7 ||
      enemySet8 ||
      enemySet9) === true
  ) {
    console.log("DER PC HAT 2 MAL DIE GLEICHE ZAHL");

    computerSet();
  } else if (enemyChoice === undefined) {
    console.log("PC HAT undefined");
    computerSet();
  }
}

function checkIfRow() {
  enemyChoice = felder[getRandomInt(0, 1)];
  console.log(enemyChoice + " hier hat er 1 oder 2 gewürfelt");

  if (
    (checkVar1 && checkVar2) === true &&
    enemySet3 === false &&
    feld3 === false
  ) {
    if (enemyChoice === 1) {
      app3.innerHTML = "O";
      enemySet3 = true;
      validateWinPC();
    } else {
      computerSet();
    }
  } else if (
    (checkVar2 && checkVar3) === true &&
    enemySet1 === false &&
    feld1 === false
  ) {
    if (enemyChoice === 1) {
      app1.innerHTML = "O";
      enemySet1 = true;
      validateWinPC();
    } else {
      computerSet();
    }
  } else if (
    (checkVar7 && checkVar8) === true &&
    enemySet9 === false &&
    feld9 === false
  ) {
    if (enemyChoice === 1) {
      app9.innerHTML = "O";
      enemySet9 = true;
      validateWinPC();
    } else {
      computerSet();
    }
  } else if (
    (checkVar1 && checkVar4) === true &&
    enemySet7 === false &&
    feld7 === false
  ) {
    if (enemyChoice === 1) {
      app7.innerHTML = "O";
      enemySet7 = true;
      validateWinPC();
    } else {
      computerSet();
    }
  } else if (
    (checkVar2 && checkVar5) === true &&
    enemySet8 === false &&
    feld8 === false
  ) {
    if (enemyChoice === 1) {
      app8.innerHTML = "O";
      enemySet8 = true;
      validateWinPC();
    } else computerSet();
  } else if (
    (checkVar3 && checkVar6) === true &&
    enemySet9 === false &&
    feld9 === false
  ) {
    app9.innerHTML = "O";
    enemySet9 = true;
    validateWinPC();
  } else if (
    (checkVar4 && checkVar7) === true &&
    enemySet1 === false &&
    feld1 === false
  ) {
    if (enemyChoice === 1) {
      app1.innerHTML = "O";
      enemySet1 = true;
      validateWinPC();
    } else {
      computerSet();
    }
  } else if (
    (checkVar5 && checkVar8) === true &&
    enemySet2 === false &&
    feld2 === false
  ) {
    if (enemyChoice === 1) {
      app2.innerHTML = "O";
      enemySet2 = true;
      validateWinPC();
    } else {
      computerSet();
    }
  } else if (
    (checkVar6 && checkVar9) === true &&
    enemySet3 === false &&
    feld3 === false
  ) {
    if (enemyChoice === 1) {
      app3.innerHTML = "O";
      enemySet3 = true;
      validateWinPC();
    } else {
      computerSet();
    }
  } else if (
    (checkVar2 && checkVar3) === true &&
    enemySet1 === false &&
    feld1 === false
  ) {
    if (enemyChoice === 1) {
      app1.innerHTML = "O";
      enemySet1 = true;
      validateWinPC();
    } else {
      computerSet();
    }
  } else if (
    (checkVar8 && checkVar9) === true &&
    enemySet7 === false &&
    feld7 === false
  ) {
    if (enemyChoice === 1) {
      app7.innerHTML = "O";
      enemySet7 = true;
      validateWinPC();
    } else {
      computerSet();
    }
  } else if (
    (checkVar5 && checkVar6) === true &&
    enemySet4 === false &&
    feld4 === false
  ) {
    if (enemyChoice === 1) {
      app4.innerHTML = "O";
      enemySet4 = true;
      validateWinPC();
    } else {
      computerSet();
    }
  } else if (
    (checkVar1 && checkVar5) === true &&
    enemySet9 === false &&
    feld9 === false
  ) {
    if (enemyChoice === 1) {
      app9.innerHTML = "O";
      enemySet9 = true;
      validateWinPC();
    } else {
      computerSet();
    }
  } else if (
    (checkVar5 && checkVar9) === true &&
    enemySet1 === false &&
    feld1 === false
  ) {
    if (enemyChoice === 1) {
      app1.innerHTML = "O";
      enemySet1 = true;
      validateWinPC();
    } else {
      computerSet();
    }
  } else if (
    (checkVar3 && checkVar5) === true &&
    enemySet7 === false &&
    feld7 === false
  ) {
    if (enemyChoice === 1) {
      app7.innerHTML = "O";
      enemySet7 = true;
      validateWinPC();
    } else {
      computerSet();
    }
  } else if (
    (checkVar8 && checkVar5) === true &&
    enemySet3 === false &&
    feld3 === false
  ) {
    if (enemyChoice === 1) {
      app3.innerHTML = "O";
      enemySet3 = true;
      validateWinPC();
    } else {
      computerSet();
    }
  }
  //nicht nur die, die hinter einander sind, sondern auch die die generell eine reihe bilden könnten = 5 Fälle mehr
  else if (
    (checkVar1 && checkVar3) === true &&
    enemySet2 === false &&
    feld2 === false
  ) {
    if (enemyChoice === 1) {
      app2.innerHTML = "O";
      enemySet2 = true;
      validateWinPC();
    } else {
      computerSet();
    }
  } else if (
    (checkVar4 && checkVar6) === true &&
    enemySet5 === false &&
    feld5 === false
  ) {
    if (enemyChoice === 1) {
      app5.innerHTML = "O";
      enemySet5 = true;
      validateWinPC();
    } else {
      computerSet();
    }
  } else if (
    (checkVar7 && checkVar9) === true &&
    enemySet8 === false &&
    feld8 === false
  ) {
    if (enemyChoice === 1) {
      app8.innerHTML = "O";
      enemySet8 = true;
      validateWinPC();
    } else {
      computerSet();
    }
  } else if (
    (checkVar1 && checkVar7) === true &&
    enemySet4 === false &&
    feld4 === false
  ) {
    if (enemyChoice === 1) {
      app4.innerHTML = "O";
      enemySet4 = true;
      validateWinPC();
    } else {
      computerSet();
    }
  } else if (
    (checkVar3 && checkVar9) === true &&
    enemySet6 === false &&
    feld6 === false
  ) {
    if (enemyChoice === 1) {
      app6.innerHTML = "O";
      enemySet6 = true;
      validateWinPC();
    } else {
      computerSet();
    }
  } else if (
    ((feld1 &&
      feld2 &&
      feld3 &&
      feld4 &&
      feld5 &&
      feld6 &&
      feld7 &&
      feld8 &&
      feld9) ||
      (checkVar1 &&
        checkVar2 &&
        checkVar3 &&
        checkVar4 &&
        checkVar5 &&
        checkVar6 &&
        checkVar7 &&
        checkVar8 &&
        checkVar9)) === true
  ) {
    drawOrWin();
  } else if (enemyChoice === undefined) {
    computerSet();
  } else {
    computerSet();
  }
}
