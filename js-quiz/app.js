const question = 'ゲーム市場、最も売れたゲーム機は次の内どれ？'
const answers = [
    'スーパファミコン2',
    'プレイステーション2',
    '任天堂スイッチ',
    '任天堂DS'
];
const correct = '任天堂DS';

document.getElementById('js-question').textContent = question;

// 「$」でHTMLのオブジェクトが入っていることが理解しやすい
const $button = document.getElementsByTagName('button');

$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3]; 

document.getElementsByTagName('button')[0].addEventListener('click', () => {
    if(correct === $button[0].textContent) {
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
});
document.getElementsByTagName('button')[1].addEventListener('click', () => {
    if(correct === $button[1].textContent) {
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
});
document.getElementsByTagName('button')[2].addEventListener('click', () => {
    if(correct === $button[2].textContent) {
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
});
document.getElementsByTagName('button')[3].addEventListener('click', () => {
    if(correct === $button[3].textContent) {
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
});
