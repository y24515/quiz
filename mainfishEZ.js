const questions = [
    /*1*/ {
         question: "鱈という漢字の読み方はなんだ？",
         ans: "たら"
     },
    /*2*/ {
         question: "「鰻」という漢字の読み方はなんだ？",
         ans: "うなぎ"
     },
     /*3*/{
         question: "「鯖」という漢字の読み方はなんだ？",
         ans: "さば"
     },
     /*4*/{
         question: "「鮎」という漢字の読み方はなんだ？",
         ans: "あゆ"
     },
     /*5*/{
         question: "「鯵」という漢字の読み方はなんだ？",
         ans: "あじ"
     },
    /*6*/ {
         question: "「鮭」という漢字の読み方はなんだ？",
         ans: "さけ"
     },
    /*7*/ {
         question: "「鮪」という漢字の読み方はなんだ？",
         ans: "まぐろ"
     },
    /*8*/ {
         question: "「河童」という漢字の読み方はなんだ？",
         ans: "かっぱ"
     },
    /*9*/ {
         question: "「鰯」という漢字の読み方はなんだ？",
         ans: "いわし"
     },
   /*10*/{
         question: "「海老」という漢字の読み方はなんだ？",
         ans: "えび"
     },
     /*11*/{
         question: "「秋刀魚」という漢字の読み方はなんだ？",
         ans: "さんま"
     },
     /*12*/{
         question: "「鰐」という漢字の読み方はなんだ？",
         ans: "わに"
     },
     /*13*/{
         question: "「鯨」という漢字の読み方はなんだ？",
         ans: "くじら"
     },
    /* 14*/{
         question: "「雲丹」という漢字の読み方はなんだ？",
         ans: "うに"
     },
     /*15*/{
         question: "「鮃」という漢字の読み方はなんだ？",
         ans: "ひらめ"
     },
     /*16*/{
         question: "「鮫」という漢字の読み方はなんだ？",
         ans: "さめ"
     },
     /*17*/{
        question: "「帆立」という漢字の読み方はなんだ？",
        ans: "ほたて"
    },
    /*18*/{
        question: "「海月」という漢字の読み方はなんだ？",
        ans: "くらげ"
    },
    /*19*/{
        question: "「海豚」という漢字の読み方はなんだ？",
        ans: "いるか"
    },
    /*20*/{
        question:"「鰹」という漢字の読み方はなんだ？",
        ans: "かつお"
    },

 ];
 let QuestionNow=0;//今何問目ですのやつ
 let QuestionKazueru=0;//正解数数えるやつ
 let QuestionIti = 0;//問題の位置
 let timerInterval;


//ランダムに問題出題するやつ
 function getRandomQuestions() {
    let shuffled = questions.sort(() => 0.5 - Math.random());//ランダムに入れ替えてる
    return shuffled.slice(0, 10);//10個取ってる
}

//Enterキーで答えられるやつ
window.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        FinalAnswer();
    }
});

//問題、とかを表示するやつ
 function showQuestion() {
     const question = document.getElementById('question');
     const result = document.getElementById('result');
     const ansInput = document.getElementById('ansInput');
     const time = document.getElementById('time');
     const now = document.getElementById('now');
     const hint = document.getElementById('hint');
     const answerbutton = document.getElementById('FinalAnswer');
     const questionData = questions[QuestionIti];//問題のデータを持ってきてる
     question.textContent = questionData.question;//問題表示してる
     result.textContent = '';//答えが正解か不正解かを
     ansInput.value = '';//回答欄を空にしている
     time.textContent = '15';//制限時間15秒
     QuestionNow++;//今何問目かを数えてる
     now.textContent ='今'+QuestionNow+'問目です。';//今何問目かを表示している
     hint.style.display = 'none';//ヒントを非表示にしている
     answerbutton.disabled = false;//解答ボタン
 
     clearInterval(timerInterval);
     startTimer();
 }
 
 //制限時間
 function startTimer() {
     const time = document.getElementById('time');
     let timeout = 15;
 
     timerInterval = setInterval(() => {
         timeout--;//１秒ずつ減らしてる
         time.textContent = timeout;
 
         if (timeout <= 0) {//０になったら下の処理をする
             clearInterval(timerInterval);//タイマー停止
             checkAnswer('');//答えを入力しなかった時に空白を送る
         }
     }, 1000);
 }
 

 //入力した答えを送信
 function FinalAnswer() {
     const ansInput = document.getElementById('ansInput');
     const answerbutton = document.getElementById('FinalAnswer');
     answerbutton.disabled = true;//ボタンの無効化送信したら次の問題まで押せなくしている
     checkAnswer(ansInput.value.trim());//checkanswerを呼び出して、入力した答えを渡してる。//.trim():入力値の前後の空白を削除している
 }

//ヒントを表示する
 function hint() {
    const hintt=document.getElementById('hintt');
    const hint = document.getElementById('hint');
    const questionData = questions[QuestionIti];//問題のデータを持ってきてる
    hint.style.display = 'block';//押したら表示する..非表示から表示するようにしている
    hintt.textContent="一文字目："+questionData.ans.charAt(0);//答えの1文字目を出す。questionData.ans.charAt(0);は最初の一文字を答えから取得してる。
}

 //答えがあっているかどうか
// 答えが合っているかどうかチェックする関数
function checkAnswer(answer) {
    const result = document.getElementById('result');
    const questionData = questions[QuestionIti];

    if (answer === questionData.ans) {
        result.textContent = '正解！';
        const audioCorrect = new Audio('「さあ、いくぞ！」.mp3');
        audioCorrect.play();//bgmを流す
        result.className = 'seikai';
        QuestionKazueru++;
    } else {
        result.textContent = '不正解！こたえは”' + questionData.ans + "”でした！";
        const audioIncorrect = new Audio('「ぐああっ！」.mp3');
        audioIncorrect.play();//bgmを流す
        result.className = 'miss';
    }
    
    clearInterval(timerInterval);

    // 次の問題に進む
    setTimeout(() => {
        QuestionIti++;
        if (QuestionIti < 10) {
            showQuestion();
        } else {
            alert('クイズが終了しました！');
            alert('あなたは10問中' + QuestionKazueru + '問正解しました。');
        }
    }, 3000);
}

 selectedQuestions = getRandomQuestions();//ランダムに取得
 showQuestion();//問題を表示
 