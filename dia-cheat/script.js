function activate() {
  setTimeout(one, 1000);
}

function one() {
  document.querySelector("#h").innerHTML = "サーバーに送信中...";
  setTimeout(two, 570);
}

function two() {
  document.querySelector("#h").innerHTML = "データをロード中...";
  setTimeout(three, 1500);
}

function three() {
  document.querySelector("#h").innerHTML = "終わり！ 平素は弊社サービスをご利用いただき誠にありがとうございます。";
}
