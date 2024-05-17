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
  document.querySelector("#h").innerHTML = "1日から2日程かかる場合があるのでログインはお控えください。";
}
