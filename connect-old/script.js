i = 0
word_idx = 0
word = ""
failed = false;
key = ['background: black; color: white; display: inline-block;', 'background: yellow; color: black; display: inline-block;']

fetch("https://indev.morsecode.fun/words").then(response => function(response) {
    let words = response.text().split("\n")
});

addEventListener('keyup', function(e) {
    if (e.key == ' ' || e.keyCode == 13) {
            word = ""
            word_idx += 1
            console.log(i)
            document.getElementById(i-1).style = key[word_idx % 2]
            document.getElementById(i-2).style = key[word_idx % 2]
            word += document.getElementById(i-2).innerHTML
            word += document.getElementById(i-1).innerHTML
    } else if (e.keyCode == 8) {
        i -= 1
        word.slice(0, -1)
        document.getElementById(i).remove()
    } else {
        document.getElementById('game').innerHTML += "<div id='" + i + "' class='letter' style='" + key[word_idx % 2] + "'>" + e.key.toUpperCase() + "</div>"
        word += document.getElementById(i).innerHTML
    }
    i += 1
    console.log(word)
})