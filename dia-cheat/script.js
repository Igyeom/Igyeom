function activate() {
  setTimeout(one, 1000);
}

function one() {
  document.querySelector("#h").innerHTML = "詳細を取得中...";
  setTimeout(two, 570);
}

function two() {
  document.querySelector("#h").innerHTML = "注射を開始しています...";
  setTimeout(three, 1500);
}

function three() {
  document.querySelector("#h").innerHTML = "終わり！ 平素は弊社サービスをご利用いただき誠にありがとうございます。";
}
