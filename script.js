const questions = [
    {
        question: "「春」という漢字の読み方は？",
        correct: "はる"
    },
    {
        question: "「犬」という漢字の読み方は？",
        correct: "いぬ"
    },
    // 他の問題を追加
];

let currentQuestion = 0;
let timerInterval;

function showQuestion() {
    const questionElement = document.getElementById('question');
    const resultElement = document.getElementById('result');
    const answerInput = document.getElementById('answerInput');
    const timerElement = document.getElementById('timer');

    const questionData = questions[currentQuestion];
    questionElement.textContent = questionData.question;
    resultElement.textContent = '';
    answerInput.value = '';
    timerElement.textContent = '10';

    clearInterval(timerInterval);
    startTimer();
}

function startTimer() {
    const timerElement = document.getElementById('timer');
    let timeLeft = 10;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            checkAnswer('');
        }
    }, 1000);
}

function submitAnswer() {
    const answerInput = document.getElementById('answerInput');
    checkAnswer(answerInput.value.trim());
}

function checkAnswer(answer) {
    const resultElement = document.getElementById('result');
    const questionData = questions[currentQuestion];

    if (answer === questionData.correct) {
        resultElement.textContent = '正解！';
        resultElement.className = 'correct';
    } else {
        resultElement.textContent = '不正解';
        resultElement.className = 'incorrect';
    }

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            alert('クイズが終了しました！');
        }
    }, 1000);
}

showQuestion();
