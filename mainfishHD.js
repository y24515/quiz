const questions = [
    /*1*/ {
         question: "「鯣烏賊」という漢字の読み方はなんだ？",
         ans: "するめいか"
     },
    /*2*/ {
         question: "「鰹の烏帽子」という漢字の読み方はなんだ？",
         ans: "かつおのえぼし"
     },
     /*3*/{
         question: "「鯔」という漢字の読み方はなんだ？",
         ans: "ぼら"
     },
     /*4*/{
         question: "「鮎並」という漢字の読み方はなんだ？",
         ans: "あいなめ"
     },
     /*5*/{
         question: "「提灯鮟鱇」という漢字の読み方はなんだ？",
         ans: "ちょうちんあんこう"
     },
    /*6*/ {
         question: "「柳葉魚」という漢字の読み方はなんだ？",
         ans: "ししゃも"
     },
    /*7*/ {
         question: "「蝦蛄」という漢字の読み方はなんだ？",
         ans: "しゃこ"
     },
    /*8*/ {
         question: "「赤撞木鮫」という漢字の読み方はなんだ？",
         ans: "あかしゅもくざめ",
         ans: "はんまーへっどしゃーく"
     },
    /*9*/ {
         question: "「豹紋蛸」という漢字の読み方はなんだ？",
         ans: "ひょうもんだこ"
     },
   /*10*/{
         question: "「磯巾着」という漢字の読み方はなんだ？",
         ans: "いそぎんちゃく"
     },
     /*11*/{
         question: "「眼仁奈」という漢字の読み方はなんだ？",
         ans: "めじな"
     },
     /*12*/{
         question: "「四條笛鯛」という漢字の読み方はなんだ？",
         ans: "よすじふえだい"
     },
     /*13*/{
         question: "「魴魚」という漢字の読み方はなんだ？",
         ans: "ほうぼう"
     },
    /* 14*/{
         question: "「高砂」という漢字の読み方はなんだ？",
         ans: "たかさご"
     },
     /*15*/{
         question: "「鬼笠子」という漢字の読み方はなんだ？",
         ans: "おにかさご"
     },
     /*16*/{
         question: "「鶏魚」という漢字の読み方はなんだ？",
         ans: "いさき"
     },
     /*17*/{
        question: "「鯰」という漢字の読み方はなんだ？",
        ans: "なまず"
    },
    /*18*/{
        question: "「平鱸」という漢字の読み方はなんだ？",
        ans: "ひらすずき"
    },
    /*19*/{
        question: "「真梶木」という漢字の読み方はなんだ？",
        ans: "まかじき"
    },
    /*20*/{
        question:"「山女魚」という漢字の読み方はなんだ？",
        ans: "やまめ"
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