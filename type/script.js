function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length)
    return choices[index]
}

async function thirty() {
    let test = document.querySelector("#test")
    let preview = document.querySelector("#preview")
    let textarea = document.querySelector("#textarea")
    let words = document.querySelector("#words").innerHTML.split("\n")

    for (i of Array(15).keys()) {
        for (x of choose(words).split("")) {
            preview.innerHTML += "<span id='white'>" + x + "</span>"
        }
        preview.innerHTML += "&nbsp;"
    }
    
    test.hidden = false

    setInterval(function() {
        if (textarea.value == preview.childNodes[0].innerHTML) {
            preview.childNodes.splice(preview.childNodes, 0)
        }
        textarea.value = ""
    }, 10)

    j = 30
    for (i of Array(30).keys()) {
        await sleep(1000)
        j -= 1
        document.querySelector("#thirty").innerHTML = j + "s"
    }
}