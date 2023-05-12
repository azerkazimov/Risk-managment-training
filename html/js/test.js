const quizData = [
  {
    question: "What is the definition of risk management?",
    a: "Accepting all risks without mitigation",
    b: "Avoiding all risks at all costs",
    c: "Identifying, assessing, and mitigating potential risks",
    d: "Transferring all risks to a third party",
    correct: "c",
  },
  {
    question: "Which of the following is an example of a financial risk?",
    a: "Increase in interest rates",
    b: "Theft of company equipment",
    c: "Loss of important documents",
    d: "Employee turnover",
    correct: "a",
  },
  {
    question: "What is the purpose of a risk assessment?",
    a: "To identify potential risks and develop a plan to mitigate them",
    b: "To ignore potential risks",
    c: "To determine the likelihood of a risk occurring",
    d: "To eliminate all risks",
    correct: "a",
  },
  {
    question: "Which of the following is an example of an external risk?",
    a: "Changes in government regulations",
    b: "Employee theft",
    c: "System failures",
    d: "Workplace injuries",
    correct: "a",
  },
];
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answersEls = document.querySelectorAll(".answer");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  currentQuiz + 1;
}

function getSelected() {
  let answer = undefined;

  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswer() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // TODO: Show Results
      quiz.innerHTML = `<h2>You answerd correctly at ${score}/${quizData.length} questions. </h2> <button onClick="reload()">Reload</button>`;
    }
  }
});
