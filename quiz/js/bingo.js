let make_col = function (base) {
    let arr = [];
    for(let i=0; i<15; i++) {
        arr.push(i);
    }
    let list = [];
    for (let i = 1; i <= 5; i++) {
        // ランダムで値を取得
        let a = parseInt(Math.random() * arr.length);
        list.push(arr[a] + base);
        // 数字を重複させないため、元々のリストから値を削除する
        arr.splice(a, 1);
    }
    return list;
};

let make_table = function () {
    // B列、I列...とそれぞれで5つの数字をランダムで取得
    let col_b = make_col(1);
    let col_i = make_col(16);
    let col_n = make_col(31);
    let col_g = make_col(46);
    let col_o = make_col(61);
    
    // 25個分の数字を格納できるtableに取ってきた列の数字を設定
    let list = new Array(25);
    for (let i = 0; i < 5; i++) {
        list[i * 5 + 0] = col_b[i];
        list[i * 5 + 1] = col_i[i];
        list[i * 5 + 2] = col_n[i];
        list[i * 5 + 3] = col_g[i];
        list[i * 5 + 4] = col_o[i];
    }
    // 中心はfreeで固定
    list[12] = 'free';
    return list;
};

// カード作成関数
let create_card = function () {
    // 取ってきた数字が入ったtableをhtmlに出力する
    let table = make_table();
    for (let i = 0; i < table.length; i++) {
        document.getElementById('bi' + i).innerHTML=table[i];
    }
};

// 初期化関数
let init = function () {
    create_card();
    
    // チェック状態を外す
    // ('#bingo td').each(function () {
    //     $(this).removeClass('check');
    // });
};

// 初期
init();


element_id_list = ['bi0', 'bi1', 'bi2', 'bi3', 'bi4', 'bi5', 'bi6',
                   'bi7', 'bi8', 'bi9', 'bi10', 'bi11', 'bi12', 'bi13',
                   'bi14', 'bi15', 'bi16', 'bi17', 'bi18', 'bi19', 'bi20',
                   'bi21', 'bi22', 'bi23', 'bi24']
element_id_list.forEach(element => {
  document.getElementById(element).addEventListener('click',
  function () {
    if (this.style.backgroundColor == '' || this.style.backgroundColor == 'rgb(183, 141, 74)'
    ) {
      this.style.backgroundColor = "#F0F0F0";
      this.style.color = "#B78D4A";
    } else {
      this.style.backgroundColor = "#B78D4A";
      this.style.color = "#F0F0F0";
    }
  }
)
});

// カード作成 ボタンをクリックすると、初期化
Vue.createApp({
    methods: {
      onclick(){
        init();
      }
    }
}).mount('#button');
