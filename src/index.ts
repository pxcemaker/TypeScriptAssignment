

import {
  init,
  put1,
  put2,
  put3,
  put4,
  put5,
  put6,
  put7,
  put8,
  put9,
} from "./set";
import { resetAll } from "./reset";

document.querySelector("#feld")?.addEventListener("click", put1);
document.querySelector("#feld2")?.addEventListener("click", put2);
document.querySelector("#feld3")?.addEventListener("click", put3);
document.querySelector("#feld4")?.addEventListener("click", put4);
document.querySelector("#feld5")?.addEventListener("click", put5);
document.querySelector("#feld6")?.addEventListener("click", put6);
document.querySelector("#feld7")?.addEventListener("click", put7);
document.querySelector("#feld8")?.addEventListener("click", put8);
document.querySelector("#feld9")?.addEventListener("click", put9);

document.querySelector("#resetBtn")?.addEventListener("click", resetAll);

init();
