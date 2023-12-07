/*  Задача
Написать игру в “Крестики-нолики”. Можете использовать
любые парадигмы, которые посчитаете наиболее
подходящими. Можете реализовать доску как угодно - как
одномерный массив или двумерный массив (массив массивов).
Можете использовать как правила, так и хардкод, на своё
усмотрение. Главное, чтобы в игру можно было поиграть через
терминал с вашего компьютера */

let step = 0;
const cellEl = document.querySelectorAll(".cell");
const messageEl = document.querySelector(".message");

cellEl.forEach((el, index) => {
  el.textContent = index;
  el.style.color = "white";
});

function cellPaste(e) {
  const cell = e.target;
  if (step % 2 == 0) {
    cell.style.color = "black";
    cell.textContent = "X";
    step++;
    checkWinner();
  } else {
    cell.style.color = "red";
    cell.textContent = "O";
    step++;
    checkWinner();
  }
}

cellEl.forEach((element) => {
  element.addEventListener("click", cellPaste, { once: true });
});

function checkWinner() {
  const allBlock = Array.from(cellEl);
  if (
    (allBlock[0].textContent == allBlock[1].textContent &&
      allBlock[1].textContent == allBlock[2].textContent) ||
    (allBlock[3].textContent == allBlock[4].textContent &&
      allBlock[4].textContent == allBlock[5].textContent) ||
    (allBlock[6].textContent == allBlock[7].textContent &&
      allBlock[7].textContent == allBlock[8].textContent) ||
    (allBlock[0].textContent == allBlock[3].textContent &&
      allBlock[3].textContent == allBlock[6].textContent) ||
    (allBlock[1].textContent == allBlock[4].textContent &&
      allBlock[4].textContent == allBlock[7].textContent) ||
    (allBlock[2].textContent == allBlock[5].textContent &&
      allBlock[5].textContent == allBlock[8].textContent) ||
    (allBlock[0].textContent == allBlock[4].textContent &&
      allBlock[4].textContent == allBlock[8].textContent) ||
    (allBlock[2].textContent == allBlock[4].textContent &&
      allBlock[4].textContent == allBlock[6].textContent)
  ) {
    messageEl.textContent = "Победа!";
    cellEl.forEach((element) => {
      element.removeEventListener("click", paste);
    });
  } else if (step === 9) {
    messageEl.textContent = "Ничья!";
  }
}
