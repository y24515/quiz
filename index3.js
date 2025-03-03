const questions = [
    { question: "理想と平和の決断", correct: "ぱーふぇくとあるかでぃあ", img:"./img/理想と平和の決断.jpg"},
    { question:"魔誕と光喜と楽識と炎怒と哀樹の決断", correct: "ぱーふぇくとばろむ", img:"./img/魔誕と光喜と楽識と炎怒と哀樹の決断.jpg"},
    { question:"♪楽楽楽 楽楽楽楽 楽楽楽", correct:"らくらくらくらくらくらくらくらくらくらく", img:"./img/♪楽楽楽 楽楽楽楽 楽楽楽.jpg" },
    { question:"メイプル超もみ人", correct:"めいぷるちょうもみじん", img:"./img/メイプル超もみ人.jpg" },
    { question:"蒼き団長 ドギラゴン剣", correct:"あおきだんちょうどぎらごんばすたー", img:"./img/蒼き団長 ドギラゴン剣.jpg"},
    { question:"終末の時計 ザ・クロック", correct:"らぐなろくざくろっく", img:"./img/終末の時計 ザ・クロック.jpg" },
    { question:"煌龍 サッヴァーク", correct:"きらぜおすさっゔぁーく", img:"./img/煌龍 サッヴァーク.jpg" },
    { question:"勝利宣言 鬼丸「覇」", correct:"びくとりーらっしゅおにまるへっど", img:"./img/勝利宣言 鬼丸「覇」.jpg" },
    { question:"狂戦士 ブレイズ・クロー", correct:"きょうせんしぶれいずくろー", img:"./img/狂戦士 ブレイズ・クロー.jpg" },
    { question:"霞み妖精ジャスミン", correct:"かすみようせいじゃすみん", img:"./img/霞み妖精ジャスミン.jpg" },
    { question:"DARK MATERIAL COMPLEX", correct:"くらやみのこんげんこんぷれっくす", img:"./img/DARK MATERIAL COMPLEX.jpg" },
    { question:"BAKUOOON・ミッツァイル", correct:"ばくおーんみっつぁいる", img:"./img/BAKUOOON・ミッツァイル.jpg" },
    { question:"銀河大剣 ガイハート", correct:"ぎんがたいけんがいはーと", img:"./img/銀河大剣 ガイハート.jpg" },
    { question:"瞬閃と疾駆と双撃の決断", correct:"ぱーふぇくとふぁいあ", img:"./img/瞬閃と疾駆と双撃の決断.jpg" },
    { question:"“必駆”蛮触礼亞", correct:"びっくばんふれあ", img:"./img/“必駆”蛮触礼亞.jpg" },
    { question:"P・P・P・P", correct:"ぽぽぴぱ", img:"./img/P・P・P・P.jpg" },
    { question:"T・T・T", correct:"ざとりぷるすりー", img:"./img/T・T・T.jpg" },
    { question:"キユリのASMラジオ", correct:"きゆりのあさまでらじお", img:"./img/キユリのASMラジオ.jpg" },
    { question:"鬼ヶ覇覇覇 ジャオウガ", correct:"おにがはいぱーじゃおうが", img:"./img/鬼ヶ覇覇覇ジャオウガ.jpg" },
    { question:"運 命", correct:"うんめい", img:"./img/運 命.jpg" },
    { question:"「獅星」の頂 ザ・ライオネル", correct:"れおのいただきざらいおねる", img:"./img/「獅星」の頂 ザ・ライオネル.jpg" },
    { question:"「俺獅」の頂点 ライオネル", correct:"おのれのちょうてんらいおねる", img:"./img/「俺獅」の頂点 ライオネル.jpg" },
    { question:"「俺」の頂 ライオネル", correct:"おれのいただきらいおねる", img:"./img/「俺」の頂 ライオネル.jpg" },
    { question:"A・A・A", correct:"あらいぶえーてるおるたねーしょん", img:"./img/A・A・A.jpg" },
    { question:"S・S・S", correct:"すくらっぱーすぱいらるすぱーく", img:"./img/S・S・S.jpg" },
    { question:"超天使 ゴルドラン・ゴルギーニ", correct:"はいぱーえんじぇるごるどらんごるぎーに", img:"./img/超天使 ゴルドラン・ゴルギーニ.jpg" },
    { question:"Napo獅子-Vi無粋", correct:"なぽれおんばいぶす", img:"./img/Napo獅子-Vi無粋.jpg" },
    { question:"一王二命三眼槍", correct:"ぱらどゔぃなしゅーら", img:"./img/一王二命三眼槍.jpg" },
    { question:"天地ヲ別ツ龍断ノ裁キ", correct:"てんちをわかつりゅうだんのさばき", img:"./img/天地ヲ別ツ龍断ノ裁キ.jpg" },
    { question:"甲型龍帝式キリコ³", correct:"こうがたりゅうていしききりこきゅーびっく", img:"./img/甲型龍帝式キリコ³.jpg" },
    { question:"飛翔龍 5000VT", correct:"ふらいんぐぶい５０００ぶいてぃー", img:"./img/飛翔龍 5000VT.jpg" },
    { question:"百万超邪 クロスファイア", correct:"みりおねあくろすふぁいあ", img:"./img/百万超邪 クロスファイア.jpg" },
    { question:"天災 デドダム", correct:"でぃざすたーでどだむ", img:"./img/天災 デドダム.jpg" },
    { question:"暴走龍 5000GT", correct:"らいおっと５０００じーてぃー", img:"./img/暴走龍 5000GT.jpg" },
    { question:"S級不死 デッドゾーン", correct:"えすきゅうぞんびでっどぞーん", img:"./img/S級不死 デッドゾーン.jpg" },
    { question:"零龍", correct:"ぜーろん", img:"./img/零龍.jpg" },
    { question:"超銀河団 HELL", correct:"ぎゃらくしーしょっとへる", img:"./img/超銀河団 HELL.jpg" },
    { question:"Q.Q.QX", correct:"きゅーきゅらーきゅらっくす", img:"./img/Q.Q.QX.jpg" },
    { question:"覇帝なき侵略 レッドゾーンF", correct:"はてなきしんりゃくれっどぞーんふぉーみゅらー", img:"./img/覇帝なき侵略 レッドゾーンF.jpg" },
    { question:"爆竜 GENJI XX", correct:"ばくりゅうげんじだぶるくろす", img:"./img/爆竜 GENJI XX.jpg" },
    { question:"英知と追撃の宝剣", correct:"えたーなるそーど", img:"./img/英知と追撃の宝剣.jpg" },
    { question:"轟破天九十九語", correct:"ごうはてんつくもがたり", img:"./img/轟破天九十九語.jpg" },
    { question:"偽りの名 ナンバーナイン", correct:"こーどねーむなんばーないん", img:"./img/偽りの名 ナンバーナイン.jpg" },
    { question:"無法頂上会談", correct:"れいじーちゅーん", img:"./img/無法頂上会談.jpg" },
    { question:"革命の絆", correct:"ますたーおぶれゔぉりゅーしょん", img:"./img/革命の絆.jpg" },
    { question:"忍蛇の聖沌 c0br4", correct:"にんじゃのせいとんこぶら", img:"./img/忍蛇の聖沌 c0br4.jpg" },
    { question:"クック・驚・ブルッチ", correct:"くっくあんべりーばぶるっち", img:"./img/クック・驚・ブルッチ.jpg" },
    { question:"完全不明", correct:"かんぜんふめい", img:"./img/完全不明.jpg" },
    { question:"文藍月 Drache der'Zen", correct:"ぶんらんげつどらっへだーぜん", img:"./img/文藍月 Drache der'Zen.jpg" },
    { question:"失われた世界", correct:"ろすとわーるど", img:"./img/失われた世界.jpg" },
    { question:"同期の妖精", correct:"しんくろふぇありー", img:"./img/同期の妖精.jpg"},
    { question:"R.S.F.K", correct:"ろいやるすとれーとふらっしゅかいざー", img:"./img/R.S.F.K.jpg"},
    { question:"夢幻の無", correct:"でいどりーむだーくまたー", img:"./img/夢幻の無.jpg"},
    { question:"「正義全帝」", correct:"じゃすてぃすあんどえぶりしんぐえるす", img:"./img/「正義全帝」.jpg"},
    { question:"白騎士の精霊王 ℵ HEVEN", correct:"しろきしのせいれいおうあれふへゔん", img:"./img/白騎士の精霊王 ℵ HEVEN.jpg"},
    { question:"神にも届く歌声", correct:"ごっとのうず", img:"./img/神にも届く歌声.jpg"},
    { question:"「光魔の鎧」", correct:"めいじおぶかーすぶれいかー", img:"./img/「光魔の鎧」.jpg"},
    { question:"飛ベル津バサ「曲通風」", correct:"とべるつばさまがつかぜ", img:"./img/飛ベル津バサ「曲通風」.jpg"},
    { question:"とこしえの超人", correct:"ぷらいまるじゃいあんと", img:"./img/とこしえの超人.jpg"},
    { question:"卍 新世壊 卍", correct:"ぐらんどぜーろ", img:"./img/卍新世壊卍.jpg"},
    { question:"青銅の鎧", correct:"ぶろんずあーむとらいぶ", img:"./img/青銅の鎧.jpg"},
    { question:"終止の時計 ザ・ミュート", correct:"どぅーむすていざみゅーと", img:"./img/終止の時計 ザ・ミュート.jpg"},
    { question:"「正義帝」", correct:"あいあむじゃすてぃすいふゆーうぉんと", img:"./img/「正義帝」.jpg"},
    { question:"「正義星帝」", correct:"すてぃるじゃすてぃすているじえんど", img:"./img/「正義星帝」.jpg"},
    { question:"†正義†と「正義」", correct:"ゆーあーじゃっじめんとあいあむじゃすてぃす", img:"./img/†正義†と「正義」.jpg"},
    { question:"サイレンス トパーズ", correct:"じゅもんたちのちんもくとぱーず", img:"./img/サイレンス トパーズ.jpg"},
    { question:"ドンドン火噴くナウ", correct:"どんどんぼるかにっくなう", img:"./img/ドンドン火噴くナウ.jpg"},
    { question:"有象夢造", correct:"ぱらどきしかるふぁくとりー", img:"./img/有象夢造.jpg"},
    { question:"最終命令 3150-1059", correct:"ふぁいなるこーどわんだぶるへぶん", img:"./img/最終命令 3150-1059.jpg"},
    { question:"終末の監視者 ジ・ウォッチ", correct:"らぐなろくじうぉっち", img:"./img/終末の監視者 ジ・ウォッチ.jpg"},
    { question:"完璧問題 オーパーツ", correct:"らすとくうぇすちょんおーぱーつ", img:"./img/完璧問題 オーパーツ.jpg"},
    { question:"決闘者・チャージャー", correct:"でゅえりすとちゃーじゃー", img:"./img/決闘者・チャージャー.jpg"},
    { question:"正義ノ裁キ", correct:"じゃっじうぃずじゃすてぃす", img:"./img/正義ノ裁キ.jpg"},
    { question:"♪君は煌銀河の正義を見たか？", correct:"きみはぎゃらくしーのじゃすてぃすをみたか", img:"./img/♪君は煌銀河の正義を見たか？.jpg"},
    { question:"ドンドン吹雪くナウ", correct:"どんどんふぶくなう", img:"./img/ドンドン吹雪くナウ.jpg"},
    { question:"月と破壊と魔王と天使", correct:"つきとはかいとさたんとえんじぇる", img:"./img/月と破壊と魔王と天使.jpg"},
    { question:"ドンドン水撒くナウ", correct:"どんどんしゃわーなう", img:"./img/ドンドン水撒くナウ.jpg"},
    { question:"頂上電融 クライアッシュ”覇星”’２２", correct:"ちょうじょうでんゆうくらいあっしゅへっざーとぅうぇんてぃつー", img:"./img/頂上電融 クライアッシュ”覇星”’２２.jpg"},
    { question:"邪魂の王道 ジャシン帝", correct:"あびすきんぐじゃしんてい", img:"./img/邪魂の王道 ジャシン帝.jpg"},
    { question:"再興王女プリン", correct:"さいこーぷりんせすぷりん", img:"./img/再興王女 プリン.jpg"},
    { question:"九番目の旧王", correct:"ざいんてぃざいん", img:"./img/九番目の旧王.jpg"},
    { question:"7777777", correct:"せぶんすせぶん", img:"./img/7777777.jpg"},
    { question:"B.F.F モーメント", correct:"ずっとももーめんと", img:"./img/B.F.F モーメント.jpg"},
    { question:"二刀龍覇 グレンモルト「王」", correct:"にとうりゅうはぐれんもるときんぐ", img:"./img/二刀龍覇 グレンモルト「王」.jpg"},
    { question:"剛力羅王 ゴリオ・ブゴリ", correct:"ごりらおうごりおぶごり", img:"./img/剛力羅王 ゴリオ・ブゴリ.jpg"},
    { question:"「王宮の処罰者」", correct:"ろいやるぱれすぱにっしゃー", img:"./img/「王宮の処罰者」.jpg"},
    { question:"ガイアッシュの海地図", correct:"がいあっしゅのゔぃじょん", img:"./img/ガイアッシュの海地図.jpg"},
    { question:"超法無敵宇宙合金武闘鼓笛魔槍絶頂百仙閻魔神拳銃極太陽友情暴剣R・M・G チーム・エグザイル ～カツドンと仲間たち～", 
      correct:"びくとれいじあうとろーこすもあるけみーかんふーほるんぶるーすくらいばいとへるしぇんがんまんごんぶとれじゃーふれんずくろすろびんみけらんぐろーばるちーむえくざいるかつどんとなかまたち",
      img:"./img/超法無敵宇宙合金武闘鼓笛魔槍絶頂百仙閻魔神拳銃極太陽友情暴剣R・M・G チーム・エグザイル ～カツドンと仲間たち～.jpg"},
    { question:"愛魂憎男", correct:"あいこにっくおとこ", img:"./img/愛魂憎男.jpg"},
    { question:"天上天下輪廻天頂", correct:"ぜにすはざーど", img:"./img/天上天下輪廻天頂.jpg"},
    { question:"新世界秩序", correct:"にゅーわーるどおーだー", img:"./img/新世界秩序.jpg"},
    { question:"灰燼と天門の儀式", correct:"へぶにあっしゅさいん", img:"./img/灰燼と天門の儀式.jpg"},
    { question:"終焉の開闢", correct:"びぎにんぐおぶじえんど", img:"./img/終焉の開闢.jpg"},
    { question:"龍の極限 ドギラゴールデン", correct:"ふぁいなるどぎらごーるでん", img:"./img/龍の極限 ドギラゴールデン.jpg"},
    { question:"零誕祭", correct:"ぜろばーすでい", img:"./img/零誕祭.jpg"},
    { question:"調和と暴動の混乱", correct:"えたーなるかおす", img:"./img/調和と暴動の混乱.jpg"},
    { question:"武家類武士目 ステージュラ", correct:"ぶけるいもののふもくすてーじゅら", img:"./img/武家類武士目 ステージュラ.jpg"},
    { question:"百族の長 プチョヘンザ", correct:"みあもじゃぷちょへんざ", img:"./img/百族の長 プチョヘンザ.jpg"},
    { question:"超七極 Gio", correct:"ちょうななきょくじお", img:"./img/超七極 Gio.jpg"},
    { question:"蒼き夢双 ドギラゴン天", correct:"あおきむそうどぎらごんどりーむ", img:"./img/蒼き夢双 ドギラゴン天.jpg"}
];


let currentQuestionIndex = 0;
let selectedQuestions = [];
let timerInterval;
let quizScore = 0; // グローバル変数としてスコアを定義
const music = new Audio('correct.mp3');
const music1 = new Audio('incorrect.mp3');
const music2 = new Audio('incorrect.mp3');

function getRandomQuestions() {
    let shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
}

function showQuestion() {

    music.currentTime = 0;
    music.play();
    
    const questionElement = document.getElementById('question');
    const resultElement = document.getElementById('result');
    const answerInput = document.getElementById('answerInput');
    const timerElement = document.getElementById('timer');
    const questionNumberElement = document.getElementById('questioncounter');
    const answerElement = document.getElementById('correctAnswer');
    const answerImage = document.getElementById('answerImage');

    answerImage.style.display = 'none';
    answerImage.classList.remove('show');

    const questionData = questions[currentQuestionIndex];
    questionElement.textContent = questionData.question;
    resultElement.textContent = '';
    answerInput.value = '';
    timerElement.textContent = '60';

    answerElement.textContent = "";

    questionNumberElement.textContent = `${currentQuestionIndex + 1}問目`;

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
    const answerImage = document.getElementById('answerImage'); 
    clearInterval(timerInterval);

    if (answer === questionData.correct) {
        resultElement.textContent = '正解！';
        resultElement.className = 'correct';

        music.currentTime = 0;
        music.play();

        quizScore++;  // 正解ならスコアを加算

        // localStorageにスコアを保存
        localStorage.setItem('quizScore', quizScore);

        answerImage.src = questionData.img; 
        answerImage.style.display = 'block'; 
    } else {
        resultElement.textContent = '不正解';
        resultElement.className = 'incorrect';

        music1.currentTime = 0;
        music1.play();

        answerImage.src = questionData.img; 
        answerImage.style.display = 'block'; 
    }

    answerElement.textContent = `正しい答え: ${questionData.correct}`;

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            showQuestion();  
        } else {
            window.location.href = 'result.html';
        }
    }, 3000);
}

selectedQuestions = getRandomQuestions();
showQuestion();
