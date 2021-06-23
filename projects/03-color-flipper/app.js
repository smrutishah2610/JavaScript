var colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// "green", "red", "rgba(133,122,200)", "#f15025"
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const colorName = document.querySelector(".color-names");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  
  colorName.textContent = colors[randomNumber];
});

function getRandomNumber() {
      return Math.floor(Math.random() * colors.length);
}


function colorPicker() {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
}