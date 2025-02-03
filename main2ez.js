const questions = [
    {
        question: "日本で一番高い山は？",
        correct: "富士山"
    },
    {
        question: "一番奥に生えている歯の名称は？",
        correct: "親知らず"
    },
    {
        question: "こどもの日は何月何日？",
        correct: "5月5日",
        correct: "５月５日"
    },
    {
        question: "15の二乗は？(全角)",
        correct: "２２５",
        correct: "225"
    },
    {
        question: "3世紀に卑弥呼が納めていた国の名称は？",
        correct: "邪馬台国",
        correct: "大和国"
    },
    {
        question: "SDGsは全部で何項目？",
        correct: "１７",
        correct: "17"
    },
    {
        question: "会釈の角度は？",
        correct: "１５",
        correct: "15"
    },
    {
        question: "2025年2月現在の総理大臣の名前は？",
        correct: "石破茂"
    },
    {
        question: "気圧の単位は？",
        correct: "ヘクトパスカル",
        correct: "hPa"
    },
    {
        question: "「楽しい」の英訳は？",
        correct: "enjoyable",
        correct: "pleasant",
        correct: "fun",
        correct: "happy",
        correct: "delightful",
        correct: "cheerful",
        correct: "pleasurable",
        correct: "merry",
        correct: "delectable"
    },
    {
        question: "[眠い」の英訳は？",
        correct: "sleep",
        correct: "drowsy"
    },
    {
        question: "一番奥に生えている歯の名称は？",
        correct: "親知らず"
    },
    {
        question: "一番奥に生えている歯の名称は？",
        correct: "親知らず"
    },
    {
        question: "一番奥に生えている歯の名称は？",
        correct: "親知らず"
    },
    {
        question: "一番奥に生えている歯の名称は？",
        correct: "親知らず"
    },
    {
        question: "一番奥に生えている歯の名称は？",
        correct: "親知らず"
    },
    {
        question: "一番奥に生えている歯の名称は？",
        correct: "親知らず"
    },
    {
        question: "一番奥に生えている歯の名称は？",
        correct: "親知らず"
    },
    {
        question: "一番奥に生えている歯の名称は？",
        correct: "親知らず"
    },
    {
        question: "一番奥に生えている歯の名称は？",
        correct: "親知らず"
    },
    {
        question: "一番奥に生えている歯の名称は？",
        correct: "親知らず"
    },
    {
        question: "一番奥に生えている歯の名称は？",
        correct: "親知らず"
    },
    {
        question: "一番奥に生えている歯の名称は？",
        correct: "親知らず"
    },
    {
        question: "一番奥に生えている歯の名称は？",
        correct: "親知らず"
    },
    {
        question: "一番奥に生えている歯の名称は？",
        correct: "親知らず"
    },
    {
        question: "一番奥に生えている歯の名称は？",
        correct: "親知らず"
    },
    {
        question: "一番奥に生えている歯の名称は？",
        correct: "親知らず"
    },
    {
        question: "一番奥に生えている歯の名称は？",
        correct: "親知らず"
    },
    {
        question: "一番奥に生えている歯の名称は？",
        correct: "親知らず"
    },
    {
        question: "一番奥に生えている歯の名称は？",
        correct: "親知らず"
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
