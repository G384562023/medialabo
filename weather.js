let w = document.querySelector('div#result');
let li = document.createElement("li");

div = document.querySelector('div#phototable');

let p1 = document.createElement('p');
let img = document.createElement('img');
img.setAttribute('src','earth.png');
p1.insertAdjacentElement('beforeend', img);
div.insertAdjacentElement('beforeend', p1);

function print(data){
li.remove(); //　前回の検索結果を削除
li.textContent ="世界の天気(検索結果1件) "+"緯度: "+data.coord.lon+" 経度: "+data.coord.lat
+" 天気: "+data.weather[0].description
+" 最低気温: "+data.main.temp_min+" 最高気温: "+data.main.temp_max
+" 湿度: "+data.main.humidity+" 風速: "+data.wind.speed
+" 風向き: "+data.wind.deg+" 都市名: "+data.name;
w.insertAdjacentElement('beforeend', li);

}
// プルダウン
let c = document.querySelector('button#btn');
c.addEventListener('click', showSelectResult);

function showSelectResult() {
    let s = document.querySelector('select#kokumei');
    let idx = s.selectedIndex;  // idx 番目の option が選択された
    let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
    let o = os.item(idx);       // os の idx 番目の要素
    if(idx ===0){
      console.log("国名をえらんでください");
      li.remove();
    }
    else{
    console.log('選択された ' + idx + ' 番目の option の情報:');
    key =o.getAttribute('value');  // id 属性を表示
    console.log('  textContent='+o.textContent);
    console.log("入力されたidは"+key+"です。");
    // URL を設定
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/"+key+".json";
  
      // 通信開始
      axios.get(url)
          .then(showResult)   // 通信成功
          .catch(showError)   // 通信失敗
          .then(finish);      // 通信の最後の処理
    }
}


// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    print(data);
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}