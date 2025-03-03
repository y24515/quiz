const questions = [
    /*1*/ {
         question: "「鱓」という漢字の読み方はなんだ？",
         ans: "うつぼ"
     },
    /*2*/ {
         question: "「鰍」という漢字の読み方はなんだ？",
         ans: "かじか"
     },
     /*3*/{
         question: "「鱚」という漢字の読み方はなんだ？",
         ans: "きす"
     },
     /*4*/{
         question: "「鯱」という漢字の読み方はなんだ？",
         ans: "しゃち"
     },
     /*5*/{
         question: "「太刀魚」という漢字の読み方はなんだ？",
         ans: "たちうお"
     },
    /*6*/ {
         question: "「魛」という漢字の読み方はなんだ？",
         ans: "たちうお"
     },
    /*7*/ {
         question: "「鰒」という漢字の読み方はなんだ？",
         ans: "ふぐ"
     },
    /*8*/ {
         question: "「鰙」という漢字の読み方はなんだ？",
         ans: "わかさぎ"
     },
    /*9*/ {
         question: "「鮍」という漢字の読み方はなんだ？",
         ans: "かわはぎ"
     },
   /*10*/{
         question: "「鰕」という漢字の読み方はなんだ？",
         ans: "えび"
     },
     /*11*/{
         question: "「鯏」という漢字の読み方はなんだ？",
         ans: "あさり"
     },
     /*12*/{
         question: "「烏賊」という漢字の読み方はなんだ？",
         ans: "いか"
     },
     /*13*/{
         question: "「河童」という漢字の読み方はなんだ？",
         ans: "かっぱ"
     },
    /* 14*/{
         question: "「蛸」という漢字の読み方はなんだ？",
         ans: "たこ"
     },
     /*15*/{
         question: "「鰤」という漢字の読み方はなんだ？",
         ans: "ぶり"
     },
     /*16*/{
         question: "「鱗」という漢字の読み方はなんだ？",
         ans: "うろこ"
     },
     /*17*/{
        question: "「鮑」という漢字の読み方はなんだ？",
        ans: "あわび"
    },
    /*18*/{
        question: "「岩魚」という漢字の読み方はなんだ？",
        ans: "いわな"
    },
    /*19*/{
        question: "「鱟」という漢字の読み方はなんだ？",
        ans: "かぶとがに"
    },
    /*20*/{
        question:"「鱧」という漢字の読み方はなんだ？",
        ans: "はも"
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
 