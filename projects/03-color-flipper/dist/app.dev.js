"use strict";

var colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; // "green", "red", "rgba(133,122,200)", "#f15025"

var btn = document.getElementById("btn");
var color = document.querySelector(".color");
var colorName = document.querySelector(".color-names");
btn.addEventListener("click", function () {
  var randomNumber = getRandomNumber(); // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  colorName.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

function colorPicker() {
  var randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
}