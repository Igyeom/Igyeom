var chain = []
let wordList;
let validate;
let valid;
let range;
const jamo = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ']
let res = document.getElementById("wordlist").innerHTML;

wordList = res.split("\n");
console.log('WORDLIST LOADED');
validate = () => {
    if (chain.includes(document.getElementById('word').value.replaceAll(' ',''))) {
        document.getElementById("info").innerHTML = "같은 낱말을 다시 사용 하지 마세요."
        return 0;
    }

    if (chain.length > 0) {
        if (chain[chain.length-1].slice(-1) == document.getElementById('word').value.replaceAll(' ','').charAt(0)) {
            document.getElementById("info").innerHTML = "";
        } else {
            document.getElementById("info").innerHTML = chain[chain.length - 1].slice(-1) + "(으)로 시작하는 낱말만 입력하십시오.";
            return 0;
        }
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
        chain.push(document.getElementById('word').value.replaceAll(' ',''));valid = [];
        valid = [];
        if (Hangul.d(document.getElementById('word').value.replaceAll(' ','').slice(-1))[0] == 'ㅎ') {
            range = wordList.slice(wordList.indexOf(Hangul.a([Hangul.d(document.getElementById('word').value.replaceAll(' ','').slice(-1))[0], 'ㅏ'])));
        } else {
            range = wordList.slice( wordList.indexOf(Hangul.a([Hangul.d(document.getElementById('word').value.replaceAll(' ','').slice(-1))[0], 'ㅏ'])),wordList.indexOf(Hangul.a([jamo[jamo.indexOf(Hangul.d(document.getElementById('word').value.replaceAll(' ','').slice(-1))[0])+1], 'ㅏ'])));
        }
        
        for (word of range) {
            console.log(word);
            if (word.charAt(0) == document.getElementById('word').value.replaceAll(' ','').slice(-1) && !chain.includes(word) && word.length >= 2) {
                if (['튬', '듐', '뮴', '슘', '븀', '귬', '둬', '숴','궈', '탉', '갏', '잫', '돓', '쁨', '듸', '녘', '값', '읓', '픔', '읔', '읖', '읏', '릇', '읃', '븐'].includes(word.slice(-1))) {
                    chain.push(word);
                    document.getElementById("chain").innerHTML += '<a href="https://ko.dict.naver.com/#/search?query=' + document.getElementById('word').value.replaceAll(' ','') + '">' + document.getElementById('word').value.replaceAll(' ','') + '</a> → <a href="https://ko.dict.naver.com/#/search?query=' + word + '">' + word + "</a> → ";
                    document.getElementById('word').value = word.slice(-1);
                    break;
                } else {
                    valid.push(word);
                }
            }
            if (word == range.slice(-1)) {
                if (valid.length == 0) {
                    document.getElementById("chain").innerHTML += '<a href="https://ko.dict.naver.com/#/search?query=' + document.getElementById('word').value.replaceAll(' ','') + '">' + document.getElementById('word').value.replaceAll(' ','') + '</a> → GG → ';
                } else {
                    let chosen = valid[Math.floor(Math.random() * valid.length)];
                    while (chain.includes(chosen)) {
                        chosen = valid[Math.floor(Math.random() * valid.length)];
                    }
                    chain.push(chosen);
                    document.getElementById("chain").innerHTML += '<a href="https://ko.dict.naver.com/#/search?query=' + document.getElementById('word').value.replaceAll(' ','') + '">' + document.getElementById('word').value.replaceAll(' ','') + '</a> → <a href="https://ko.dict.naver.com/#/search?query=' + chosen + '">' + chosen + "</a> → ";
                    document.getElementById('word').value = chosen.slice(-1);
                }
            }
        }
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
