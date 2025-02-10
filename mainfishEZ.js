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
         question: "「鰈」という漢字の読み方はなんだ？",
         ans: "かれい"
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
        ans: "かつお",
        ans: "かっつお"
    },
     // 他の問題を追加
 ];
 let QuestionNow=0;
 let QuestionKazueru=0;
 let currentQuestion = 0;
 let timerInterval;
 
 function showQuestion() {
     const question = document.getElementById('question');
     const result = document.getElementById('result');
     const ansInput = document.getElementById('ansInput');
     const time = document.getElementById('time');
     const now = document.getElementById('now');
 
     const questionData = questions[currentQuestion];
     question.textContent = questionData.question;
     result.textContent = '';
     ansInput.value = '';
     time.textContent = '15';
     QuestionNow++;
     now.textContent ='今'+QuestionNow+'問目です。';
 
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
 
 function submitAnswer() {
     const ansInput = document.getElementById('ansInput');
     checkAnswer(ansInput.value.trim());
 }
 
 function checkAnswer(answer) {
     const result = document.getElementById('result');
     const questionData = questions[currentQuestion];
    
     if (answer === questionData.ans) {
         result.textContent = '正解！';
         result.className = 'correct';
        QuestionKazueru++;
     } else {
         result.textContent = '不正解';
         result.className = 'incorrect';
     }
 
     setTimeout(() => {
         currentQuestion++;
         if (currentQuestion < questions.length) {
             showQuestion();
         } else {
             alert('クイズが終了しました！');
             alert('あなたは30問中'+QuestionKazueru+'問正解しました。');
         }
     }, 1000);
 }
 
 showQuestion();
 