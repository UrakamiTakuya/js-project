// 即時関数 
(()=> {

    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    const IS_ACTIVE = 'is-active';

    // 初期化（読み込んだ時に最初にしたいこと）
    const init = () => {
        $content[0].style.display = 'block';
    };
    init();

    // クリックしたら起こるイベント
    const handleClick = (e) => {
        e.preventDefault();
        console.log('Clicked!');

        // クリックされたnavとそのdataを取得
        const $this = e.target;
        const targetVal = $this.dataset.nav;

        // 不要なnav、contentを全て一旦リセットする
        for (let i = 0; i < $nav.length; i++) {
            $content[i].style.display = 'none';
            $nav[i].classList.remove(IS_ACTIVE);
        }
        
        // 対象のコンテンツをアクティブ化（動的にコンテンツを取得する）
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add(IS_ACTIVE);
    };
    
    // 全nav要素に対して関数を適応・発火
    for (let i = 0; i < 4; i++) {
        $nav[i].addEventListener('click', (e) => handleClick(e));
    }

})();