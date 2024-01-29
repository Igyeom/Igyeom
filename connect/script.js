let words = document.getElementById('words').innerHTML.toUpperCase().split('\n')
let streak = 0

function reset() {
    document.getElementById('log').innerHTML = ""
    document.getElementById('word').innerHTML = ""
    streak = 0
    document.getElementById('streak').innerHTML = streak
}

function share() {
    navigator.clipboard.writeText("Connect: Streak of " + streak + "\nhttps://ians.site/connect\n\nWords:" + document.getElementById('log').innerHTML.split("\n").reverse().join("\n"))
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function c() {
    document.getElementById('kb').setAttribute('placeholder', '')
}

addEventListener('keyup', async function(e) {
    document.getElementById('kb').value = ""
    if (e.key == ' ' || e.keyCode == 13) {
        if (words.includes(document.getElementById('word').innerHTML) && document.getElementById('word').innerHTML.length > 2 && !document.getElementById('log').innerHTML.split('\n').includes(document.getElementById('word').innerHTML)) {
            document.getElementById('log').innerHTML = document.getElementById('word').innerHTML + "\n" + document.getElementById('log').innerHTML
            document.getElementById('word').innerHTML = document.getElementById('word').innerHTML.slice(-2)
            streak += 1
            document.getElementById('streak').innerHTML = streak
            
        } else {
            document.getElementById('word').style = "color: red; font-size: 48pt;"
            await sleep(500)
            document.getElementById('word').style = "color: lime; font-size: 48pt;"
            document.getElementById('word').innerHTML = document.getElementById('log').innerHTML.split("\n")[0].slice(-2)
        }
    } else if (e.keyCode == 8) {
        document.getElementById('word').innerHTML = document.getElementById('word').innerHTML.slice(0, 2)
    } else {
        document.getElementById('word').innerHTML += e.key.toUpperCase()
    }
})