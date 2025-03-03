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

// シャッフルして配列からランダムに10問選択
const questions = allQuestions.sort(() => Math.random() - 0.5).slice(0, 10);
//Math.random（）- 0.5 を使用s手シャッフルを実行
//.slice(0,10)で10問取り出す

let currentQuestion = 0;//現在の何問目かをカウント
let timerInterval;//タイマーを制御
let score = 0; // ユーザーの正解数をカウント

function showQuestion() {
    const questionElement = document.getElementById('question');//問題を表示
    const resultElement = document.getElementById('result');//初期化
    const answerInput = document.getElementById('answerInput');//初期化
    const timerElement = document.getElementById('timer');//回答時間

    const questionData = questions[currentQuestion];//currentQuestionで現在の問題番号を示す
    questionElement.textContent = questionData.question;//配列から漢字を取り出し、その漢字を表示する
    resultElement.textContent = '';//前の問題の結果をクリア
    answerInput.value = '';//問題の入力をクリア
    timerElement.textContent = '10';//回答時間は10秒

    clearInterval(timerInterval);//回答したら時間をリセット
    startTimer();
}

function startTimer() {
    const timerElement = document.getElementById('timer');
    let timeLeft = 10;//タイマーは10から開始

    timerInterval = setInterval(() => {
        timeLeft--;
        //残り時間を減らす
        timerElement.textContent = timeLeft;
        //残り時間が減るにつれて画面に表示されている数字も減らしていく

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            checkAnswer('');
            //タイムアップしたら空の答えを強制的に送信
        }
    }, 1000);
}

function submitAnswer() {
    const answerInput = document.getElementById('answerInput');
    checkAnswer(answerInput.value.trim());
    }
    //checkAnswerで入力した回答に応じて正解や解答を表示
    //answerInput.value で入力した文字を取得
    //.trim で回答に空白があった場合削除

function checkAnswer(answer) {
    const resultElement = document.getElementById('result');
    const questionData = questions[currentQuestion];//現在の問題の漢字とその答えの取得

    if (answer === questionData.correct) //回答と解答を比較し同じだった場合
        {
        resultElement.textContent = '正解！';
        resultElement.className = 'correct';
        score++; // 正解したらスコアを1増やす
        } 
    else //不正解だった場合
        {
        resultElement.textContent = `A,${questionData.correct}`;//問題の答えを表示
        resultElement.className = 'incorrect';
        }

    setTimeout(() => {
        currentQuestion++;//問題数のカウント
        if (currentQuestion < questions.length) //10問目まで
            {
            showQuestion();
            } 
        else 
            {
            
            alert('クイズが終了しました！\nあなたのスコアは: ' + score + '点です');
            // 最後の問題が終わったらスコアを表示
            }
    }, 2000); // 2秒後に次の問題へ
}

window.addEventListener('keydown', function(event) {
    if (event.key === "Enter") 
        {
        submitAnswer();
        //Enterを押すとsubmitAnswerを呼び出し、回答を送信
        }
});

showQuestion();//最初の問題を表示
