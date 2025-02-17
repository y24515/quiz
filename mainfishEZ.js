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
    let shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
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
 
     const questionData = questions[QuestionIti];
     question.textContent = questionData.question;
     result.textContent = '';
     ansInput.value = '';
     time.textContent = '15';
     QuestionNow++;
     now.textContent ='今'+QuestionNow+'問目です。';
     hint.style.display = 'none';
     answerbutton.disabled = false;
 
     clearInterval(timerInterval);
     startTimer();
 }
 
 //制限時間
 function startTimer() {
     const time = document.getElementById('time');
     let timeout = 15;
 
     timerInterval = setInterval(() => {
         timeout--;
         time.textContent = timeout;
 
         if (timeout <= 0) {
             clearInterval(timerInterval);
             checkAnswer('');
         }
     }, 1000);
 }
 

 //入力した答えを送信
 function FinalAnswer() {
     const ansInput = document.getElementById('ansInput');
     const answerbutton = document.getElementById('FinalAnswer');
     answerbutton.disabled = true;
     checkAnswer(ansInput.value.trim());
 }

//ヒントを表示する
 function hint() {
    const hintt=document.getElementById('hintt');
    const hint = document.getElementById('hint');
    const questionData = questions[QuestionIti];
    hint.style.display = 'block';
    hintt.textContent="一文字目："+questionData.ans.charAt(0);
}

 //答えがあっているかどうか
 function checkAnswer(answer) {
     const result = document.getElementById('result');
     const questionData = questions[QuestionIti];
    
     if (answer === questionData.ans) {
         result.textContent = '正解！';
         result.className = 'seikai';
         clearInterval(timerInterval);
        QuestionKazueru++;
   
     } else {
         result.textContent = '不正解！こたえは”'+questionData.ans+"”でした！";
         clearInterval(timerInterval);
         result.className = 'miss';
      
     }
 

     //終わったら
     setTimeout(() => {
        QuestionIti++;
         if (QuestionIti< 10) {
             showQuestion();
         } else {
            clearInterval(timerInterval);
             alert('クイズが終了しました！');
             alert('あなたは10問中'+QuestionKazueru+'問正解しました。');
         }
     }, 3000);
 }
 selectedQuestions = getRandomQuestions();
 showQuestion();
 