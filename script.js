const roll1 = document.querySelector("#roll1");
const result1 = document.querySelector("#result1");
const stats1 = document.querySelector("#stats1");

const counts = [0, 0, 0, 0, 0, 0, 0];

roll1.addEventListener("click", function () {
  const n = Math.floor(Math.random() * 6) + 1;
  counts[n]++;

  let type = "Нечётное";
  if (n % 2 === 0) {
    type = "Чётное";
  }

  result1.textContent = "Выпало: " + n + " (" + type + ")";

  stats1.textContent =
    "1 — " + counts[1] +
    ", 2 — " + counts[2] +
    ", 3 — " + counts[3] +
    ", 4 — " + counts[4] +
    ", 5 — " + counts[5] +
    ", 6 — " + counts[6];
});

const roll3 = document.querySelector("#roll3");
const result3 = document.querySelector("#result3");

roll3.addEventListener("click", function () {
  const a = Math.floor(Math.random() * 6) + 1;
  const b = Math.floor(Math.random() * 6) + 1;
  const c = Math.floor(Math.random() * 6) + 1;
  const sum = a + b + c;

  result3.textContent = a + " + " + b + " + " + c + " = " + sum;

  if (a === b && b === c) {
    result3.style.color = "green";
  } else {
    result3.style.color = "black";
  }
});
