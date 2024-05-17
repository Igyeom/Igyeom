function activate() {
  setTimeout(one, 500);
}

function one() {
  document.querySelector("#h").innerHTML = "サーバーに送信中...";
  setTimeout(two, 30000);
}

function two() {
  document.querySelector("#h").innerHTML = "データをロード中...";
  setTimeout(three, 21000);
}

function three() {
  document.querySelector("#h").innerHTML = "1日から2日程かかる場合があるのでログインはお控えください。";
}
