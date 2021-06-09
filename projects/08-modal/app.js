const modalData = [{
  title: 'Model project 1',
  btnLabel: 'open modal 1',
}, {
  title: 'Model project 2',
  btnLabel: 'open modal 2',
}, {
  title: 'Model project 3',
  btnLabel: 'open modal 3',
}]

function openModal(textValue) {
  const modal = document.querySelector('.modal-overlay');
  const text = document.getElementById('modal-text');
  console.log(textValue);
  modal.classList.add('open-modal');
  text.innerHTML = "Modal " + textValue;
  }

function closeModal() {
  const modal = document.querySelector('.modal-overlay');
  modal.classList.remove('open-modal');
}

for (let index = 0; index < modalData.length; index++) {
  const element = `
  <header class="hero">
  <div class="banner">
    <h1> ${modalData[index].title} </h1>
    <button class="btn modal-btn" onclick="openModal(${index+1})">
    ${modalData[index].btnLabel}
    </button>
  </div>
</header>`;
  document.write(element);
}