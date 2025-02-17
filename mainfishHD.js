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
     // 他の問題を追加
 ];
 let QuestionNow=0;
 let QuestionKazueru=0;
 let currentQuestion = 0;
 let timerInterval;

 function getRandomQuestions() {
    let shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
}

window.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        FinalAnswer();
    }
});

 function showQuestion() {
     const question = document.getElementById('question');
     const result = document.getElementById('result');
     const ansInput = document.getElementById('ansInput');
     const time = document.getElementById('time');
     const now = document.getElementById('now');
     const hint = document.getElementById('hint');
     const answerbutton = document.getElementById('FinalAnswer');
 
     const questionData = questions[currentQuestion];
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
 
 function FinalAnswer() {
     const ansInput = document.getElementById('ansInput');
     const answerbutton = document.getElementById('FinalAnswer');
     answerbutton.disabled = true;
     checkAnswer(ansInput.value.trim());
 }


 function hint() {
    const hintt=document.getElementById('hintt');
    const hint = document.getElementById('hint');
    const questionData = questions[currentQuestion];
    hint.style.display = 'block';
    hintt.textContent="一文字目："+questionData.ans.charAt(0);
}

 
 function checkAnswer(answer) {
     const result = document.getElementById('result');
     const questionData = questions[currentQuestion];
    
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
 
     setTimeout(() => {
         currentQuestion++;
         if (currentQuestion < 10) {
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
 