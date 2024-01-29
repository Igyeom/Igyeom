function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function console() {
    async function output(message) {
        for (i of message.split("")) {
            await sleep(50)
            document.getElementById('output').innerHTML += i
        }
    }
    
    await sleep(500)
    document.getElementById('cursor').hidden = true
    
    await sleep(500)
    document.getElementById('cursor').hidden = false
    output("toki, o kama pona!")
    await sleep(500)
    document.getElementById('cursor').hidden = true
    
    await sleep(500)
    document.getElementById('cursor').hidden = false
    output(" sina wile seme?")
}