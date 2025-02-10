const questions = [
    { question: "理想と平和の決断", correct: "ぱーふぇくとあるかでぃあ" },
    { question:"魔誕と光喜と学識と炎怒と哀樹の決断", correct: "ぱーふぇくとばろむ" },
    { question:"楽楽楽楽楽楽楽楽楽楽", correct:"らくらくらくらくらくらくらくらくらくらく" },
    { question:"メイプル超もみ人", correct:"めいぷるちょうもみじん" },
    { question:"蒼き団長ドギラゴン剣", correct:"あおきだんちょうどぎらごんばすたー" },
    { question:"終末の時計ザ・クロック", correct:"らぐなろくざくろっく" },
    { question:"煌龍サッヴァーク", correct:"きらぜおすさっゔぁーく" },
    { question:"勝利宣言鬼丸「覇」", correct:"びくとりーらっしゅおにまるへっど" },
    { question:"狂戦士ブレイズ・クロー", correct:"きょうせんしぶれいずくろー" },
    { question:"霞み妖精ジャスミン", correct:"かすみようせいじゃすみん" },
    { question:"DARK MATERIAL COMPLEX", correct:"くらやみのこんげんこんぷれっくす" },
    { question:"BAKUOOON・ミッツァイル", correct:"ばくおーんみっつぁいる" },
    { question:"銀河大剣ガイハート", correct:"ぎんがたいけんがいはーと" },
    { question:"瞬閃と疾駆と双撃の決断", correct:"ぱーふぇくとふぁいあ" },
    { question:"”必駆”蛮触礼亜", correct:"びっくばんふれあ" },
    { question:"P・P・P・P", correct:"ぽぽぴぱ" },
    { question:"T・T・T", correct:"ざとりぷるすりー" },
    { question:"キユリのASMラジオ", correct:"きゆりのあさまでらじお" },
    { question:"鬼ヶ覇覇覇ジャオウガ", correct:"おにがはいぱーじゃおうが" },
    { question:"運命", correct:"うんめい" },
    { question:"「獅星」の頂ザ・ライオネル", correct:"れおのいただきざらいおねる" },
    { question:"「俺獅」の頂点ライオネル", correct:"おのれのちょうてんらいおねる" },
    { question:"「俺」の頂ライオネル", correct:"おれのいただきらいおねる" },
    { question:"A・A・A", correct:"あらいぶえーてるえゔぉりゅーしょん" },
    { question:"S・S・S", correct:"すくらっぱーすぱいらるすぱーく" },
    { question:"超天使ゴルドラン・ゴルギーニ", correct:"はいぱーえんじぇるごるどらんごるぎーに" },
    { question:"Napo獅子-Vi無粋", correct:"なぽれおんばいぶす" },
    { question:"一王二命三眼槍", correct:"ぱらどゔぃなしゅーら" },
    { question:"天地ヲ別ツ龍断ノ裁キ", correct:"てんちをわかつりゅうだんのさばき" },
    { question:"甲型龍帝式キリコ³", correct:"こうがたりゅうていしききりこきゅーびっく" },
    { question:"飛翔龍5000VT", correct:"ふらいんぐぶい５０００ぶいてぃー" },
    { question:"百万超邪クロスファイア", correct:"みりおねあくろすふぁいあ" },
    { question:"天災デドダム", correct:"でぃざすたーでどだむ" },
    { question:"暴走龍5000GT", correct:"らいおっと５０００じーてぃー" },
    { question:"S級不死デッドゾーン", correct:"えすきゅうぞんびでっどぞーん" },
    { question:"零龍", correct:"ぜーろん" },
    { question:"超銀河団HELL", correct:"ぎゃらくしーしょっとへる" },
    { question:"Q.Q.QX", correct:"きゅーきゅらーきゅらっくす" },
    { question:"覇帝なき侵略レッドゾーンF", correct:"はてなきしんりゃくれっどぞーんふぉーみゅらー" },
    { question:"爆竜　GENJI　XX", correct:"ばくりゅうげんじだぶるくろす" },
    { question:"英知と追撃の宝剣", correct:"えたーなるそーど" },
    { question:"轟破天九十九語", correct:"ごうはてんつくもがたり" },
    { question:"偽りの名ナンバーナイン", correct:"こーどねーむなんばーないん" },
    { question:"無法頂上会談", correct:"れいじーちゅーん" },
    { question:"革命の絆", correct:"ますたーおぶれゔぉりゅーしょん" },
    { question:"忍蛇の聖沌c0br4", correct:"にんじゃのせいとんこぶら" },
    { question:"クック・驚・ルッチ", correct:"くっくあんべりーばぶるっち" },
    { question:"完全不明", correct:"かんぜんふめい" },
    { question:"文藍月 Drache der'Zen", correct:"ぶんらんげつどらっへだーぜん" },
    { question:"失われた世界", correct:"ロストワールド" }

];


let currentQuestionIndex = 0;
let selectedQuestions = [];
let timerInterval;

function getRandomQuestions() {
    let shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const resultElement = document.getElementById('result');
    const answerInput = document.getElementById('answerInput');
    const timerElement = document.getElementById('timer');

    const questionData = questions[currentQuestionIndex];
    questionElement.textContent = questionData.question;
    resultElement.textContent = '';
    answerInput.value = '';
    timerElement.textContent = '60';

    clearInterval(timerInterval);
    startTimer();
}

function startTimer() {
    const timerElement = document.getElementById('timer');
    let timeLeft = 60;

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
    const questionData = questions[currentQuestionIndex];

    if (answer === questionData.correct) {
        resultElement.textContent = '正解！';
        resultElement.className = 'correct';
    } else {
        resultElement.textContent = '不正解';
        resultElement.className = 'incorrect';
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            showQuestion();
        } else {
            alert('クイズが終了しました！');
        }
    }, 1000);
}

selectedQuestions = getRandomQuestions();
showQuestion();