const allQuestions = [
    { question: "半端", correct: "はんぱ" },
    { question: "狭い", correct: "せまい" },
    { question: "応援", correct: "おうえん" },
    { question: "象徴", correct: "しょうちょう" },
    { question: "猛暑", correct: "もうしょ" },
    { question: "漫画", correct: "まんが" },
    { question: "獣医", correct: "じゅうい" },
    { question: "娘", correct: "むすめ" },
    { question: "圧迫", correct: "あっぱく" },
    { question: "恒星", correct: "こうせい" },
    { question: "麗しい（送り仮名不要）", correct: "うるわ" },
    { question: "芋", correct: "いも" },
    { question: "皮膚", correct: "ひふ" },
    { question: "毛髪", correct: "もうはつ" },
    { question: "連鎖", correct: "れんさ" },
    { question: "握手", correct: "あくしゅ" },
    { question: "観賞", correct: "かんしょう" },
    { question: "避ける（送り仮名不要）", correct: "さ" },
    { question: "慢性", correct: "まんせい" }
];

// シャッフルして10問選択
const questions = allQuestions.sort(() => Math.random() - 0.5).slice(0, 10); // 出題数を10問に固定

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

window.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        submitAnswer();
    }
});

showQuestion();
