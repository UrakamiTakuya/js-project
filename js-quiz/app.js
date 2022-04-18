const question = 'ゲーム市場、最も売れたゲーム機は次の内どれ？'
const answers = [
    'スーパファミコン2',
    'プレイステーション2',
    '任天堂スイッチ',
    '任天堂DS'
];
const correct = '任天堂DS';

// 「$」でHTMLのオブジェクトが入っていることが理解しやすい
const $button = document.getElementsByTagName('button');

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = question;
    for (let i = 0; i < 4; i ++) {
        $button[i].textContent = answers[i];
    }
}
setupQuiz();

// ボタンをクリックしたら正誤判定
const clickHandler = (e) => {
    if(correct === e.target.textContent) {
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
}

for(let i = 0; i < 4; i ++) {
    $button[i].addEventListener('click', (e) => {
        clickHandler(e);
    });
}
