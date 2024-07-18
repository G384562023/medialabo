// let data = {
//   "coord": {
//     "lon": 116.3972,
//     "lat": 39.9075
//   },
//   "weather": [
//     {
//       "id": 803,
//       "main": "Clouds",
//       "description": "曇りがち",
//       "icon": "04d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 9.94,
//     "feels_like": 8.65,
//     "temp_min": 9.94,
//     "temp_max": 9.94,
//     "pressure": 1022,
//     "humidity": 14,
//     "sea_level": 1022,
//     "grnd_level": 1016
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 2.65,
//     "deg": 197,
//     "gust": 4.84
//   },
//   "clouds": {
//     "all": 53
//   },
//   "dt": 1646542386,
//   "sys": {
//     "type": 1,
//     "id": 9609,
//     "country": "CN",
//     "sunrise": 1646520066,
//     "sunset": 1646561447
//   },
//   "timezone": 28800,
//   "id": 1816670,
//   "name": "北京市",
//   "cod": 200
// };

// ////////// 課題3-2 ここからプログラムを書こう
// console.log("緯度: "+data.coord.lon+" 経度: "+data.coord.lat);
// console.log(data.weather[0].description);
// console.log("最低気温: "+data.main.temp_min);
// console.log("最高気温: "+data.main.temp_max);
// console.log("湿度: "+data.main.humidity);
// console.log("風速: "+data.wind.speed);
// console.log("風向き: "+data.wind.deg);
// console.log("都市名: "+data.name);

// // 課題4-2
// let w = document.querySelector('div#result');
// let li = document.createElement("li");
// li.textContent ="世界の天気(検索結果1件) "+"緯度: "+data.coord.lon+" 経度: "+data.coord.lat
// +" 天気: "+data.weather[0].description
// +" 最低気温: "+data.main.temp_min+" 最高気温: "+data.main.temp_max
// +" 湿度: "+data.main.humidity+" 風速: "+data.wind.speed
// +" 風向き: "+data.wind.deg+" 都市名: "+data.name;
// w.insertAdjacentElement('beforeend', li);

let w = document.querySelector('div#result');
let li = document.createElement("li");

function print(data){
li.remove();
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