const quiz = [
    {
        question: 'ゲーム市場、最も売れたゲーム機は次の内どれ？',
        answers: [
            'スーパファミコン2',
            'プレイステーション2',
            '任天堂スイッチ',
            '任天堂DS'
        ],
        correct: '任天堂DS'
    }, {
        question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        answers: [
            'MOTHER2',
            'スーパーマリオブラザーズ2',
            'スーパードンキーコング',
            '星のカービィ'
        ],
        correct: 'MOTHER2'
    }
]
let quizIndex = 0;
const quizLength = quiz.length;
let score = 0;

// 「$」でHTMLのオブジェクトが入っていることが理解しやすい
const $button = document.getElementsByTagName('button');

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex]['question'];
    for (let i = 0; i < 4; i ++) {
        $button[i].textContent = quiz[quizIndex].answers[i];
    }
}
setupQuiz();

// ボタンをクリックしたら正誤判定
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解！');
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        // 問題文があればこちらを実行
        setupQuiz()
    }else {
        window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です');

    }
}

for(let i = 0; i < 4; i ++) {
    $button[i].addEventListener('click', (e) => {
        clickHandler(e);
    });
}

