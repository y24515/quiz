const allQuestions = [
    { question: "溌剌",correct: "はつらつ" },
    { question: "誑かす（送り仮名不要）",correct: "たぶら" },
    { question: "研鑽",correct: "けんさん"},
    { question: "仄めかす（送り仮名不要）",correct: "ほの"},
    { question: "老獪",correct: "ろうかい"},
    { question: "匍匐",correct: "ほふく"},
    { question: "揶揄",correct: "やゆ"},
    { question: "華奢",correct: "きゃしゃ"},
    { question: "軋轢",correct: "あつれき", },
    { question: "鶉", correct: "うずら"},
    { question: "躓く（送り仮名不要）",correct: "つまず"},
    { question: "顰める（送り仮名不要）" ,correct: "しか" },
    { question: "贔屓",correct: "ひいき" },
    { question: "膠着",correct: "こうちゃく"},
    { question: "嘴", correct: "くちばし" },
    { question: "癇癪",correct: "かんしゃく"},
    { question: "天誅",correct: "てんちゅう"},
    { question: "邂逅",correct: "かいこう"},
    { question: "慢性",correct: "まんせい"},
];

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
    if (event.key === "Enter") {//Enterを押すと送信
        submitAnswer();
    }
});

showQuestion();
