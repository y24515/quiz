const questions = [
    {
        question: "理想と平和の決断",
        correct: "ぱーふぇくとあるかでぃあ"
    },
    {
        question:"魔誕と光喜と学識と炎怒と哀樹の決断",
        correct: "ぱーふぇくとばろむ"
    },
    {
        question:"楽楽楽楽楽楽楽楽楽楽",
        correct:"らくらくらくらくらくらくらくらくらくらく"
    },
    {
        question:"メイプル超もみ人",
        correct:"めいぷるちょうもみじん"
    },
    {
        question:"蒼き団長ドギラゴン剣",
        correct:"あおきだんちょうどぎらごんばすたー"
    },
    {
        question:"終末の時計ザ・クロック",
        correct:"らぐなろくざくろっく"
    },
    {
        question:"煌龍サッヴァーク",
        correct:"きらぜおすさっゔぁーく"
    },
    {
        question:"勝利宣言鬼丸「覇」",
        correct:"びくとりーらっしゅおにまるへっど"
    },
    {
        question:"狂戦士ブレイズ・クロー",
        correct:"きょうせんしぶれいずくろー"
    },
    {
        question:"霞み妖精ジャスミン",
        correct:"かすみようせいじゃすみん"
    },
    {
        question:"DARK MATERIAL COMPLEX",
        correct:"くらやみのこんげんこんぷれっくす"
    },
    {
        question:"BAKUOOON・ミッツァイル",
        correct:"ばくおーん・みっつぁいる"
    },
    {
        question:"銀河大剣ガイハート",
        correct:"ぎんがたいけんがいはーと"
    },
    {
        question:"瞬閃と疾駆と双撃の決断",
        correct:"ぱーふぇくとふぁいあ"
    },
    {
        question:"”必駆”蛮触礼亜",
        correct:"びっくばんふれあ"
    },
    {
        question:"P・P・P・P",
        correct:"ぽぽぴぱ"
    },
    {
        question:"T・T・T",
        correct:"ざとりぷるすりー"
    },
    {
        question:"キユリのASMラジオ",
        correct:"きゆりのあさまでらじお"
    },
    {
        question:"鬼ヶ覇覇覇ジャオウガ",
        correct:"おにがはいぱーじゃおうが"
    },
    {
        question:"",
        correct:""
    },
    {
        question:"",
        correct:""
    },
    {
        question:"",
        correct:""
    },
    {
        question:"",
        correct:""
    },
    {
        question:"",
        correct:""
    },
    {
        question:"",
        correct:""
    },
    {
        question:"",
        correct:""
    },
    {
        question:"",
        correct:""
    },
    {
        question:"",
        correct:""
    },
    {
        question:"",
        correct:""
    },
    {
        question:"",
        correct:""
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
    timerElement.textContent = '45';

    clearInterval(timerInterval);
    startTimer();
}

function startTimer() {
    const timerElement = document.getElementById('timer');
    let timeLeft = 45;

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