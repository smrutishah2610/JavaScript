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
for (let i = 0; i < questions.length; i++) {

  // const show = questions[i].que + '<br>' + questions[i].ans + '<br>';
  const show = `<div class="section-center">
  <article class="question">
  <div class="question-title">
<p id="q"> ${questions[i].que} </p>
<button class="question-btn">
  <span class="plus-icon">
    <i class="far fa-plus-square"></i>
  </span>
  <span class="minus-icon">
    <i class="far fa-minus-square"></i>
  </span>
</button>
</div>
<div class="question-text" id="question-text">
<p>${questions[i].ans}</p>
</div>
</article>
</div>`;

  document.write(show);
  }
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
btns.forEach(function (btn, index) {
      // console.log(index);
  btn.addEventListener('click', function (e) {
    console.log(e);
    const question = e.currentTarget.parentElement.parentElement;
    console.log(question);
    // if (item !== index) {
    //   item.classList.remove('show-text');
    // }
    question.classList.toggle('show-text');
  });
});