const questions = [
    { question: "理想と平和の決断", correct: "ぱーふぇくとあるかでぃあ" },
    { question:"魔誕と光喜と楽識と炎怒と哀樹の決断", correct: "ぱーふぇくとばろむ" },
    { question:"♪楽楽楽 楽楽楽楽 楽楽楽", correct:"らくらくらくらくらくらくらくらくらくらく" },
    { question:"メイプル超もみ人", correct:"めいぷるちょうもみじん" },
    { question:"蒼き団長 ドギラゴン剣", correct:"あおきだんちょうどぎらごんばすたー" },
    { question:"終末の時計 ザ・クロック", correct:"らぐなろくざくろっく" },
    { question:"煌龍 サッヴァーク", correct:"きらぜおすさっゔぁーく" },
    { question:"勝利宣言 鬼丸「覇」", correct:"びくとりーらっしゅおにまるへっど" },
    { question:"狂戦士 ブレイズ・クロー", correct:"きょうせんしぶれいずくろー" },
    { question:"霞み妖精ジャスミン", correct:"かすみようせいじゃすみん" },
    { question:"DARK MATERIAL COMPLEX", correct:"くらやみのこんげんこんぷれっくす" },
    { question:"BAKUOOON・ミッツァイル", correct:"ばくおーんみっつぁいる" },
    { question:"銀河大剣 ガイハート", correct:"ぎんがたいけんがいはーと" },
    { question:"瞬閃と疾駆と双撃の決断", correct:"ぱーふぇくとふぁいあ" },
    { question:"“必駆”蛮触礼亞", correct:"びっくばんふれあ" },
    { question:"P・P・P・P", correct:"ぽぽぴぱ" },
    { question:"T・T・T", correct:"ざとりぷるすりー" },
    { question:"キユリのASMラジオ", correct:"きゆりのあさまでらじお" },
    { question:"鬼ヶ覇覇覇 ジャオウガ", correct:"おにがはいぱーじゃおうが" },
    { question:"運 命", correct:"うんめい" },
    { question:"「獅星」の頂 ザ・ライオネル", correct:"れおのいただきざらいおねる" },
    { question:"「俺獅」の頂点 ライオネル", correct:"おのれのちょうてんらいおねる" },
    { question:"「俺」の頂 ライオネル", correct:"おれのいただきらいおねる" },
    { question:"A・A・A", correct:"あらいぶえーてるおるたねーしょん" },
    { question:"S・S・S", correct:"すくらっぱーすぱいらるすぱーく" },
    { question:"超天使 ゴルドラン・ゴルギーニ", correct:"はいぱーえんじぇるごるどらんごるぎーに" },
    { question:"Napo獅子-Vi無粋", correct:"なぽれおんばいぶす" },
    { question:"一王二命三眼槍", correct:"ぱらどゔぃなしゅーら" },
    { question:"天地ヲ別ツ龍断ノ裁キ", correct:"てんちをわかつりゅうだんのさばき" },
    { question:"甲型龍帝式キリコ³", correct:"こうがたりゅうていしききりこきゅーびっく" },
    { question:"飛翔龍 5000VT", correct:"ふらいんぐぶい５０００ぶいてぃー" },
    { question:"百万超邪 クロスファイア", correct:"みりおねあくろすふぁいあ" },
    { question:"天災 デドダム", correct:"でぃざすたーでどだむ" },
    { question:"暴走龍 5000GT", correct:"らいおっと５０００じーてぃー" },
    { question:"S級不死 デッドゾーン", correct:"えすきゅうぞんびでっどぞーん" },
    { question:"零龍", correct:"ぜーろん" },
    { question:"超銀河団 HELL", correct:"ぎゃらくしーしょっとへる" },
    { question:"Q.Q.QX", correct:"きゅーきゅらーきゅらっくす" },
    { question:"覇帝なき侵略 レッドゾーンF", correct:"はてなきしんりゃくれっどぞーんふぉーみゅらー" },
    { question:"爆竜 GENJI XX", correct:"ばくりゅうげんじだぶるくろす" },
    { question:"英知と追撃の宝剣", correct:"えたーなるそーど" },
    { question:"轟破天九十九語", correct:"ごうはてんつくもがたり" },
    { question:"偽りの名 ナンバーナイン", correct:"こーどねーむなんばーないん" },
    { question:"無法頂上会談", correct:"れいじーちゅーん" },
    { question:"革命の絆", correct:"ますたーおぶれゔぉりゅーしょん" },
    { question:"忍蛇の聖沌 c0br4", correct:"にんじゃのせいとんこぶら" },
    { question:"クック・驚・ブルッチ", correct:"くっくあんべりーばぶるっち" },
    { question:"完全不明", correct:"かんぜんふめい" },
    { question:"文藍月 Drache der'Zen", correct:"ぶんらんげつどらっへだーぜん" },
    { question:"失われた世界", correct:"ろすとわーるど" },
    { question:"同期の妖精", correct:"しんくろふぇありー"},
    { question:"R.S.F.K", correct:"ろいやるすとれーとふらっしゅかいざー"},
    { question:"夢幻の無", correct:"でいどりーむだーくまたー"},
    { question:"「正義全帝」", correct:"じゃすてぃすあんどえぶりしんぐえるす"},
    { question:"白騎士の精霊王 ℵ HEVEN", correct:"しろきしのせいれいおうあれふへゔん"},
    { question:"神にも届く歌声", correct:"ごっとのうず"},
    { question:"「光魔の鎧」", correct:"めいじおぶかーすぶれいかー"},
    { question:"飛ベル津バサ「曲通風」", correct:"とべるつばさまがつかぜ"},
    { question:"とこしえの超人", correct:"ぷらいまるじゃいあんと"},
    { question:"卍 新世壊 卍", correct:"ぐらんどぜーろ"},
    { question:"青銅の鎧", correct:"ぶろんずあーむとらいぶ"},
    { question:"終止の時計 ザ・ミュート", correct:"どぅーむすていざみゅーと"},
    { question:"「正義帝」", correct:"あいあむじゃすてぃすいふゆーうぉんと"},
    { question:"「正義星帝」", correct:"すてぃるじゃすてぃすているじえんど"},
    { question:"†正義†と「正義」", correct:"ゆーあーじゃっじめんとあいあむじゃすてぃす"},
    { question:"サイレンス トパーズ", correct:"じゅもんたちのちんもくとぱーず"},
    { question:"ドンドン火噴くナウ", correct:"どんどんぼるかにっくなう"},
    { question:"有象夢造", correct:"ぱらどきしかるふぁくとりー"},
    { question:"最終命令 3150-1059", correct:"ふぁいなるこーどわんだぶるへぶん"},
    { question:"終末の監視者 ジ・ウォッチ", correct:"らぐなろくじうぉっち"},
    { question:"完璧問題 オーパーツ", correct:"らすとくうぇすちょんおーぱーつ"},
    { question:"決闘者・チャージャー", correct:"でゅえりすとちゃーじゃー"},
    { question:"正義ノ裁キ", correct:"じゃっじうぃずじゃすてぃす"},
    { question:"♪君は煌銀河の正義を見たか？", correct:"きみはぎゃらくしーのじゃすてぃすをみたか"},
    { question:"ドンドン吹雪くナウ", correct:"どんどんふぶくなう"},
    { question:"月と破壊と魔王と天使", correct:"つきとはかいとさたんとえんじぇる"},
    { question:"ドンドン水撒くナウ", correct:"どんどんしゃわーなう"},
    { question:"頂上電融 クライアッシュ”覇星”’２２", correct:"ちょうじょうでんゆうくらいあっしゅへっざーとぅうぇんてぃつー"},
    { question:"邪魂の王道 ジャシン帝", correct:"あびすきんぐじゃしんてい"},
    { question:"再興王女プリン", correct:"さいこーぷりんせすぷりん"},
    { question:"九番目の旧王", correct:"ざいんてぃざいん"},
    { question:"7777777", correct:"せぶんすせぶん"},
    { question:"B.F.F モーメント", correct:"ずっとももーめんと"},
    { question:"二刀龍覇 グレンモルト「王」", correct:"にとうりゅうはぐれんもるときんぐ"},
    { question:"剛力羅王 ゴリオ・ブゴリ", correct:"ごりらおうごりおぶごり"},
    { question:"「王宮の処罰者」", correct:"ろいやるぱれすぱにっしゃー"},
    { question:"ガイアッシュの海地図", correct:"がいあっしゅのゔぃじょん"},
    { question:"超法無敵宇宙合金武闘鼓笛魔槍絶頂百仙閻魔神拳銃極太陽友情暴剣R・M・G チーム・エグザイル ～カツドンと仲間たち～", 
      correct:"びくとれいじあうとろーこすもあるけみーかんふーほるんぶるーすくらいばいとへるしぇんがんまんごんぶとれじゃーふれんずくろすろびんみけらんぐろーばるちーむえくざいるかつどんとなかまたち"},
    { question:"愛魂憎男", correct:"あいこにっくおとこ"},
    { question:"天上天下輪廻天頂", correct:"ぜにすはざーど"},
    { question:"新世界秩序", correct:"にゅーわーるどおーだー"},
    { question:"灰燼と天門の儀式", correct:"へぶにあっしゅさいん"},
    { question:"終焉の開闢", correct:"びぎにんぐおぶじえんど"},
    { question:"龍の極限 ドギラゴールデン", correct:"ふぁいなるどぎらごーるでん"},
    { question:"零誕祭", correct:"ぜろばーすでい"},
    { question:"調和と暴動の混乱", correct:"えたーなるかおす"},
    { question:"武家類武士目 ステージュラ", correct:"ぶけるいもののふもくすてーじゅら"},
    { question:"百族の長 プチョヘンザ", correct:"みあもじゃぷちょへんざ"},
    { question:"超七極 Gio", correct:"ちょうななきょくじお"},
    { question:"蒼き夢双 ドギラゴン天", correct:"あおきむそうどぎらごんどりーむ"}
];


let currentQuestionIndex = 0;
let selectedQuestions = [];
let timerInterval;
let correctAnswersCount = 0;

function getRandomQuestions() {
    let shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const resultElement = document.getElementById('result');
    const answerInput = document.getElementById('answerInput');
    const timerElement = document.getElementById('timer');
    const questionNumberElement = document.getElementById('questioncounter');
    const answerElement = document.getElementById('correctAnswer');

    const questionData = questions[currentQuestionIndex];
    questionElement.textContent = questionData.question;
    resultElement.textContent = '';
    answerInput.value = '';
    timerElement.textContent = '60';

    answerElement.textContent = "";

    questionNumberElement.textContent = `${currentQuestionIndex + 1}問目`

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
    const answerElement = document.getElementById('correctAnswer'); 
    clearInterval(timerInterval);

    if (answer === questionData.correct) {
        resultElement.textContent = '正解！';
        resultElement.className = 'correct';
        correctAnswersCount++;
    } else {
        resultElement.textContent = '不正解' ;
        resultElement.className = 'incorrect';
    }

    answerElement.textContent = `正しい答え: ${questionData.correct}`;

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            showQuestion();  
        } else {
            alert('クイズが終了しました！');
        }
    }, 3000);
}

selectedQuestions = getRandomQuestions();
showQuestion();