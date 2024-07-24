let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;
let s1 = document.querySelector('span#kaisu');
let s2 = document.querySelector('span#answer');
let p1 = document.querySelector('p#result');
let b1 = document.querySelector('button#kaitou');
b1.addEventListener('click', hantei);
function hantei() {
  let i = document.querySelector('input[name="nyanko"]');
  let yoso = parseInt(i.value);
  kaisu = kaisu+1;
  console.log(kaisu+'回目の予想:'+yoso);
  s1.textContent = kaisu;
  s2.textContent = yoso;
  if(kaisu > 3){
    console.log('答えは '+kotae+' でした．すでにゲームは終わっています');
    p1.textContent = ('答えは'+ kotae +'でした、すでにゲームは終わっています');
  }
  else if(kotae === yoso){
    console.log('正解です．おめでとう!');
    p1.textContent = ('正解です．おめでとう!');
    kaisu = 4;
  } else {
    if(kaisu < 3){
        if(yoso<kotae){
            console.log('まちがい．答えはもっと大きいですよ');
            p1.textContent = ('まちがい．答えはもっと大きいですよ');
        }
        else if(yoso>kotae){
            console.log('まちがい．答えはもっと小さいですよ');
            p1.textContent = ('まちがい．答えはもっと小さいですよ');
        }
    }
    else if(kaisu === 3){
        console.log('まちがい．残念でした答えは '+kotae+' です');
        p1.textContent = ("まちがい．残念でした答えは"+ kotae +"です．");
        
    } 
  }

}