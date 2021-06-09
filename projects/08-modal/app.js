// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function () {
  modal.classList.add('open-modal');
});

closeBtn.addEventListener('click', function () {
  modal.classList.remove('open-modal');
});
// modal 2
const modalBtn1 = document.querySelector('.modal-btn1');
const modal1 = document.querySelector('.modal-overlay1');
const closeBtn1 = document.querySelector('.close-btn1');

modalBtn1.addEventListener('click', function () {
  modal1.classList.add('open-modal1');
});

closeBtn1.addEventListener('click', function () {
  modal1.classList.remove('open-modal1');
});

// modal 3
const modalBtn2 = document.querySelector('.modal-btn2');
const modal2 = document.querySelector('.modal-overlay2');
const closeBtn2 = document.querySelector('.close-btn2');

modalBtn2.addEventListener('click', function () {
  modal2.classList.add('open-modal2');
});

closeBtn2.addEventListener('click', function () {
  modal2.classList.remove('open-modal2');
});