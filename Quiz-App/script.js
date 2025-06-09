const startBtn = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const quizContainer = document.getElementById('quiz-container');
const usernameInput = document.getElementById('username');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const submitBtn = document.getElementById('submit-btn');
const scoreContainer = document.getElementById('score-container');
const scoreText = document.getElementById('score-text');
const restartBtn = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;
let username = '';

const questions = [
  {
    question: "Which language is primarily used for Android app development?",
    options: ["Swift", "Kotlin", "Ruby", "Python"],
    answer: "Kotlin"
  },
  {
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which company developed the React library?",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    answer: "Facebook"
  },
  {
    question: "In JavaScript, which keyword is used to declare a variable?",
    options: ["var", "let", "const", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "What does SQL stand for?",
    options: ["Strong Question Language", "Structured Query Language", "Simple Query Language", "Stylish Question Language"],
    answer: "Structured Query Language"
  },
  {
    question: "Which HTML tag is used to link JavaScript files?",
    options: ["<js>", "<script>", "<javascript>", "<link>"],
    answer: "<script>"
  },
  {
    question: "What is the output of 'typeof NaN' in JavaScript?",
    options: ["number", "NaN", "undefined", "object"],
    answer: "number"
  },
  {
    question: "Which HTTP method is used to update resources partially?",
    options: ["PUT", "GET", "PATCH", "POST"],
    answer: "PATCH"
  },
  {
    question: "Which of these is a NoSQL database?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    answer: "MongoDB"
  },
  {
    question: "Which property is used to change the font of an element in CSS?",
    options: ["font-style", "font-weight", "font-family", "text-style"],
    answer: "font-family"
  }
];

startBtn.addEventListener('click', () => {
  username = usernameInput.value.trim();
  if (username === '') {
    alert('Please enter your name');
    return;
  }
  startScreen.style.display = 'none';
  quizContainer.style.display = 'block';
  showQuestion();
});

function showQuestion() {
  const q = questions[currentQuestionIndex];
  questionText.textContent = `${currentQuestionIndex + 1}. ${q.question}`;
  optionsContainer.innerHTML = '';
  
  q.options.forEach(option => {
    const optionDiv = document.createElement('div');
    optionDiv.classList.add('option');

    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = 'option';
    radioInput.id = option;
    radioInput.value = option;

    const label = document.createElement('label');
    label.htmlFor = option;
    label.textContent = option;

    optionDiv.appendChild(radioInput);
    optionDiv.appendChild(label);

    optionsContainer.appendChild(optionDiv);
  });
  submitBtn.style.display = 'block';
  scoreContainer.style.display = 'none';
}

submitBtn.addEventListener('click', () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert('Please select an option');
    return;
  }
  
  if (selectedOption.value === questions[currentQuestionIndex].answer) {
    score++;
  }
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  quizContainer.style.display = 'none';
  scoreContainer.style.display = 'block';
  scoreText.textContent = `${username}, you scored ${score} out of ${questions.length}! 🎉`;
}

restartBtn.addEventListener('click', () => {
  currentQuestionIndex = 0;
  score = 0;
  scoreContainer.style.display = 'none';
  startScreen.style.display = 'block';
  usernameInput.value = '';
});
