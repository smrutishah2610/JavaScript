//using selectors inside the element
const questions = [{
    que: 'do you accept all major credit cards?',
    ans: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos tenetur veniam exercitationem tempore est animi eius quas temporibus sit tempora!',
  },
  {
    que: 'do you support local farmers?',
    ans: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos tenetur veniam exercitationem tempore est animi eius quas temporibus sit tempora!',
  },
  {
    que: 'do you use organic ingredients?',
    ans: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos tenetur veniam exercitationem tempore est animi eius quas temporibus sit tempora!',
  },
];

const ques = document.querySelector('.question');
const question = document.querySelector('question-title');
const btn = document.querySelector('.question-btn');
const text = document.querySelector('.question-text');
const q = document.getElementById('q');

let currentItem = 0;
// console.log(ques.classList.contains('question'));

function showQuestion(i) {
  document.write(questions[i].que + '<br>');
  document.write(questions[i].ans + '<br>');
}

for (let i = 0; i < questions.length; i++) {
  // const item = questions[i];
  // q.textContent = item.que;
  // text.textContent = item.ans;
  showQuestion(i);
}

let i = 0;
window.addEventListener("DOMContentLoaded", function () {
  // console.log(ques.classList.contains('question'));
  const item = ques.classList.contains('question');
  const value = item.questions[i];
  q.textContent = value.que;
  text.textContent = value.ans;
});













































/* questions.forEach(function (q) {
  // console.log(questions);
  const btn = q.questionBtn;
  // console.log(buttons);
  btn.addEventListener('click', function () {
    questions.forEach(function (item) {
      if (item !== q) {
        item.classList.remove('show-text');
      }
    })
    q.classList.toggle('show-text');
  })
});*/

// traversing the dom
const btns = document.querySelectorAll('.question-btn');
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle('show-text');
  });
});