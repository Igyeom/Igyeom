let cells = [...q("#container").children]
let running = 0

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function asyncBottleneck(fn, concurrency = 1) {
    const queue = [];
    let pending = 0;
    return async (...args) => {
      if (pending === concurrency) {
        await new Promise((resolve) => queue.push(resolve));
      }
  
      pending++;
  
      return fn(...args).then((value) => {
        pending--;
        queue.length && queue.shift()();
        return value;
      });
    };
  }

function q(query) {
  return document.querySelector(query)
}

function reset() {
    q("#container").innerHTML = ""
    for (cell of cells){
        cell.style.cursor = "none"
    }
    for (_ of Array(Number(q("#difficulty").value)).keys()){
        for (_ of Array(Number(q("#difficulty").value)).keys()){
            q("#container").innerHTML += "<div class='cell'></div>&nbsp;"
        }
        q("#container").appendChild(document.createElement("br"))
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]]
    }
  
    return array;
}

async function start(id) {
    console.log("-----")
    await sleep(1000)
    let idx = 0
    let jdx = 0
    for (cell of cells.sort((a, b) => 0.5 - Math.random())){
        if(id != running) {
            return
        }
        if(cell.classList.contains("cell")&!cell.classList.contains("selected")){
            await sleep(Number(q("#speed").value))
            cell.classList.add("selected")
            cell.id = idx.toString()
            console.log(cell.id + "   " + idx)
            idx++
        }
    }
    for (cell of cells) {
        if(id != running) {
            return
        }
        if(cell.classList.contains("cell")){
            cell.style.cursor = "pointer"
            cell.addEventListener("click", (e) => {
                if(e.target.style.cursor == "pointer") {
                    if (jdx == e.target.id){
                        e.target.classList.add("correct")
                    } else {
                        e.target.classList.add("wrong")
                    }
                    console.log(jdx + " " + e.target.id)
                    jdx++
                    e.target.style.cursor = "not-allowed"
                }

            })
        }
    }
}

q("#difficulty").addEventListener("keyup", (e) => {
    reset()

    cells = [...q("#container").children]
    running++
    start(running)
})

q("#speed").addEventListener("keyup", (e) => {
    reset()

    cells = [...q("#container").children]
    running++
    start(running)
})

q("#reset").addEventListener("click", (e) => {
    reset()

    cells = [...q("#container").children]
    running++
    start(running)
})