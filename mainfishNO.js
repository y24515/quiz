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
 