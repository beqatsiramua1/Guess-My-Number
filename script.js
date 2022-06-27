"use strict";
let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let high_score = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".input").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  } else if (guess === secret_number) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector(".number").textContent = secret_number;
    document.querySelector("body").style.backgroundColor = "green";
    if (score > high_score) {
      high_score = score;
      document.querySelector(".highscore").textContent = high_score;
    }
  } else if (guess !== secret_number) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secret_number ? "Too High" : "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secret_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start Guessing......";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".input").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
