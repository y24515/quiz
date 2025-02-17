const allQuestions = [
    { question: "拳",correct: "こぶし"},
    { question: "刹那",correct: "せつな"},
    { question: "憂鬱",correct: "ゆううつ"},
    { question: "籠る（送り仮名不要）",correct: "こも"},
    { question: "妖艶",correct: "ようえん"},
    { question: "拉致",correct: "らち"},
    { question: "虎",correct: "とら"},
    { question: "疫病神",correct: "やくびょうがみ"},
    { question: "解熱剤", correct: "げねつざい"},
    { question: "羨望",  correct: "せんぼう"},
    { question: "溺れる（送り仮名不要）", correct: "おぼ",},
    { question: "嫌悪", correct: "けんお"},
    { question: "未曾有", correct: "みぞう"},
    { question: "真摯", correct: "しんし"},
    { question: "隙", correct: "すき"},
    { question: "稽古", correct: "けいこ"},
    { question: "餌", correct: "えさ"},
    { question: "語彙", correct: "ごい"},
    { question: "山車",correct: "だし"},
    
    // 他の問題を追加
];

const questions = allQuestions.sort(() => Math.random() - 0.5).slice(0, 10);


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
