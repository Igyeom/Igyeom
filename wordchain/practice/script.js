var chain = ['동영상']
let wordList;
let validate;

$.get("https://apiianssite.igyeom.repl.co/wc/v1/words").then((res) => {
    wordList = res.split("\n");
    console.log('WORDLIST LOADED');
    validate = () => {
        if (chain.includes(document.getElementById('word').value.replaceAll(' ',''))) {
            document.getElementById("info").innerHTML = "같은 낱말을 다시 사용 하지 마세요."
            return 0;
        }
    
        if (chain[chain.length - 1].slice(-1) == document.getElementById('word').value.replaceAll(' ','').charAt(0)) {
            document.getElementById("info").innerHTML = "";
        } else {
            document.getElementById("info").innerHTML = chain[chain.length - 1].slice(-1) + "(으)로 시작하는 낱말만 입력하십시오.";
            return 0;
        }
    
        if (document.getElementById('word').value.replaceAll(' ','').length < 2) {
            document.getElementById("info").innerHTML = "2글자 이상의 명사를 입력해 주십시오.";
            return 0;
        } else {
            document.getElementById("info").innerHTML = "";
        }
    
        if (document.getElementById('3letter').checked) {
            if (document.getElementById('word').value.replaceAll(' ','').length == 3) {
            document.getElementById("info").innerHTML = "";
            } else {
            document.getElementById("info").innerHTML = "3글자 길이의 명사를 입력해 주십시오.";
            return 0;
            }
        }
       
        if (wordList.includes(document.getElementById('word').value.replaceAll(' ',''))) {
            document.getElementById("chain").innerHTML += '<a href="https://ko.dict.naver.com/#/search?query=' + document.getElementById('word').value.replaceAll(' ','') + '">' + document.getElementById('word').value.replaceAll(' ','') + '</a> → ';
            chain.push(document.getElementById('word').value.replaceAll(' ',''));
            document.getElementById('word').value = document.getElementById('word').value.replaceAll(' ','').slice(-1);
        } else {
            document.getElementById("info").innerHTML = "이 명사는 존재하지 않습니다.";
            return 0;
        }
    }  
    document.querySelector("#word").addEventListener("keyup", function(e) {
        if (e.key == ' ' || e.key == 'enter') {
            validate();
        }
    })
});