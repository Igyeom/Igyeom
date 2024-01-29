document.querySelector("#a").addEventListener("click", level1);
document.querySelector("#b").addEventListener("click", level1);
document.querySelector("#c").addEventListener("click", level1);
document.querySelector("#d").addEventListener("click", level1);
document.querySelector("#e").addEventListener("click", level1);
document.querySelector("#f").addEventListener("click", level1);
document.querySelector("#g").addEventListener("click", level1);
document.querySelector("#h").addEventListener("click", level1);
document.querySelector("#i").addEventListener("click", level1);
document.querySelector("#j").addEventListener("click", level1);

let idx, idx2;
let interval;
let slot = document.querySelectorAll(".box")[7];

const sleep = ms => new Promise(r => setTimeout(r, ms));

function getHTML(element) {
    return element.innerHTML;
}

function hoverHandler() {
    document.querySelectorAll(".box")[7].style.backgroundColor = "lightcoral";
    document.querySelectorAll(".box")[8].style.backgroundColor = "lightcoral";
    document.querySelectorAll(".box")[9].style.backgroundColor = "lightcoral";
    this.style.backgroundColor = "white";
    slot.style.backgroundColor = "yellow";
}

// function selectHandler() {
//     document.querySelectorAll(".box")[7].style.backgroundColor = "lightcoral";
//     document.querySelectorAll(".box")[8].style.backgroundColor = "lightcoral";
//     document.querySelectorAll(".box")[9].style.backgroundColor = "lightcoral";
//     this.style.backgroundColor = "yellow";
//     slot = this
// }

// function level12() {
//     objective.innerHTML = "Level 12: You have passed the <span style='color: navy;'>Test of Intellectual Ability and Intelligence.</span><br><h1 id='stats'>Holding: <span style='color: navy;' id='currentItem'>Default Axe</span><br>Position: <span style='color: navy;' id='currentPosition'>0</span></h1>";
//     for (box of document.querySelectorAll(".box")) {box.style.backgroundColor = 'lightcoral'; box.style.height = "100px"; box.replaceWith(box.cloneNode(true));}
    
//     for (box of document.querySelectorAll(".box")) {
//         box.innerHTML = '';
//     }
    
//     document.querySelectorAll(".box")[6].innerHTML = "💼->";
//     document.querySelectorAll(".box")[7].innerHTML = "<img src='assets/images/medieval_axe.png' width='100px' height='100px'>";
//     document.querySelectorAll(".box")[7].style.backgroundColor = "yellow";
//     document.querySelectorAll(".box")[7].addEventListener("mouseover", hoverHandler);
//     document.querySelectorAll(".box")[8].addEventListener("mouseover", hoverHandler);
//     document.querySelectorAll(".box")[9].addEventListener("mouseover", hoverHandler);
//     document.querySelectorAll(".box")[7].addEventListener("click", selectHandler);
//     document.querySelectorAll(".box")[8].addEventListener("click", selectHandler);
//     document.querySelectorAll(".box")[9].addEventListener("click", selectHandler);
// }

// function level11() {
//     objective.innerHTML = "Level 11: A medieval axe has been discovered in the ruins of an abandoned civilisation. Please keep it safe.";
//     for (box of document.querySelectorAll(".box")) {box.style.backgroundColor = 'lightcoral'; box.style.height = "100px"; box.replaceWith(box.cloneNode(true));}

//     for (box of document.querySelectorAll(".box")) {
//         box.innerHTML = '';
//         box.style.fontSize = "32pt";
//     }
    
//     document.querySelectorAll(".box")[0].innerHTML = "<img src='assets/images/medieval_axe.png' width='100px' height='100px'>";
//     document.querySelectorAll(".box")[1].innerHTML = "Take";

//     document.querySelectorAll(".box")[6].innerHTML = "💼->";
    

//     document.querySelectorAll(".box")[1].addEventListener("click", level12);
// }


async function level11() {
    objective.innerHTML = "You beat the game! Your time was " + document.getElementById("timer").innerHTML + ".";
    for (box of document.querySelectorAll(".box")) {box.style.backgroundColor = 'lightcoral'; box.style.height = "100px"; box.replaceWith(box.cloneNode(true));}
    for (let i = 0; i < 10; i++) {
        await new Promise(r => setTimeout(r, 100));
        document.querySelectorAll(".box")[i].innerHTML = "ians.site!"[i];
    }
}

function level10() {
    const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    let a = primeNumbers[Math.floor(Math.random() * 10)]
    let b = primeNumbers[Math.floor(Math.random() * 10)]
    let c = primeNumbers[Math.floor(Math.random() * 10)]
    let d = primeNumbers[Math.floor(Math.random() * 10)]
    let factors = 1

    objective.innerHTML = "Level 10: Click every prime factor of " + a*b*c*d + ". If it appears multiple times, click it that many times.";
    for (box of document.querySelectorAll(".box")) {box.style.backgroundColor = "lightcoral"; box.replaceWith(box.cloneNode(true));
        box.style.fontSize = "64pt";
    }

    document.querySelectorAll(".box")[0].innerHTML = '2';
    document.querySelectorAll(".box")[1].innerHTML = '3';
    document.querySelectorAll(".box")[2].innerHTML = '5';
    document.querySelectorAll(".box")[3].innerHTML = '7';
    document.querySelectorAll(".box")[4].innerHTML = '11';
    document.querySelectorAll(".box")[5].innerHTML = '13';
    document.querySelectorAll(".box")[6].innerHTML = '17';
    document.querySelectorAll(".box")[7].innerHTML = '19';
    document.querySelectorAll(".box")[8].innerHTML = '23';
    document.querySelectorAll(".box")[9].innerHTML = '29';
    let attempt = ''
    for (let i = 0; i < 10; i++) {
        document.querySelectorAll(".box")[i].addEventListener("click", () => {const num = i; console.log(attempt);if (factors < 4) {document.querySelectorAll(".box")[num].style.backgroundColor = "white"; attempt += primeNumbers[num] + '*'; factors++; } else {console.log(eval(attempt.slice(0,-1)) * primeNumbers[num] + ' ' +  a*b*c*d); if (eval(attempt.slice(0,-1)) * primeNumbers[num] == a*b*c*d) {level11();} else {level10();}}});
    }
}

function level9() {
    let ans = Math.floor(Math.random() * 26 + 65);
    let attempt = ''
    objective.innerHTML = "Level 9: Click the digits of the ASCII base 10 value that corresponds to the character '" + String.fromCharCode(ans) + "' in order of appearance.";
    for (box of document.querySelectorAll(".box")) {box.style.backgroundColor = "lightcoral"; box.replaceWith(box.cloneNode(true));}
    for (let i = 1; i <= 10; i++) {
        digit = i % 10
        document.querySelectorAll(".box")[i-1].style.fontSize = "64pt";
        document.querySelectorAll(".box")[i-1].innerHTML = digit;
        document.querySelectorAll(".box")[i-1].addEventListener("click", () => {const num = i; console.log(attempt);if (attempt == '') {document.querySelectorAll(".box")[num-1].style.backgroundColor = "white"; attempt += num%10;} else {console.log(attempt + (num%10).toString() + ' ' + ans.toString()); if (attempt + (num%10).toString() == ans.toString()) {level10();} else {level9();}}});
    }
}

function level8() {
    objective.innerHTML = "Level 8: Click the number divisible by 1984.";
    for (box of document.querySelectorAll(".box")) {
    box.replaceWith(box.cloneNode(true))}
    for (box of document.querySelectorAll(".box")){
        box.style.fontSize = "20pt";
        while (true) {
            let num = Math.floor(Math.random() * 1000000);
            if (num % 1984 != 0) {
                box.innerHTML = num;
                break;
            }
        }
        box.addEventListener("click", level7)
    }
    let ans = document.querySelectorAll(".box")[Math.floor(Math.random() * 10)]
    while (true) {
        let num = Math.floor(Math.random() * 1000000);
        if (num % 1984 == 0) {
            ans.innerHTML = num;
            break;
        }
    }
    ans.removeEventListener("click", level7);
    ans.addEventListener("click", level9);
}

function level7() {
    for (box of document.querySelectorAll(".box")) {
        box.replaceWith(box.cloneNode(true))
        document.querySelector(".container").replaceWith(document.querySelector(".container").cloneNode(true))
    }
    objective.innerHTML = "Level 7: Click the median number.";
    for (box of document.querySelectorAll(".box")){
        box.style.fontSize = "32pt";
        box.innerHTML = "";
    }
    for (let i = 0; i < 9; i++) {
        document.querySelectorAll(".box")[i].innerHTML = Math.floor(Math.random() * 10000);
        document.querySelectorAll(".box")[i].addEventListener("click", level6);
    }
    let arr = [];
    for (let i = 0; i < 9; i++){
        arr.push(parseInt(document.querySelectorAll(".box")[i].innerHTML));
    }
    arr.sort((a, b) => a - b);
    [...document.querySelectorAll(".box")][[...document.querySelectorAll(".box")].map(getHTML).map((num) => { return parseInt(num, 10); }).indexOf(arr[4])].addEventListener("click", level8);
}

function level6() {
    objective.innerHTML = "Level 6: At most two of the boxes lead to the next level. The rest are all traps. Good luck.";
    for (box of document.querySelectorAll(".box")) {
        box.replaceWith(box.cloneNode(true))
        document.querySelector(".container").replaceWith(document.querySelector(".container").cloneNode(true))
    }
    for (box of document.querySelectorAll(".box")){
        box.innerHTML = "";
        box.addEventListener("click", level5);
    }
    idx = Math.floor(Math.random() * 10);
    idx2 = Math.floor(Math.random() * 10);
    document.querySelectorAll(".box")[idx].addEventListener("click", level7);
    document.querySelectorAll(".box")[idx2].addEventListener("click", level7);
}

function level5() {
    objective.innerHTML = "Level 5: Catch the box!";
    for (box of document.querySelectorAll(".box")) {
    box.replaceWith(box.cloneNode(true))}
for (box of document.querySelectorAll(".box")){
        box.style.fontSize = "64pt";
        box.innerHTML = "";
    }

    idx = Math.floor(Math.random() * 10);
    document.querySelectorAll(".box")[idx].innerHTML = "📦";
    document.querySelectorAll(".box")[idx].addEventListener("mouseover", async () => {await sleep(50); document.querySelectorAll(".box")[idx].removeEventListener("click", level6); idx = Math.floor(Math.random() * 10);

        for (box of document.querySelectorAll(".box")){
            box.innerHTML = "";
        }
        
        document.querySelectorAll(".box")[idx].innerHTML = "📦";
        document.querySelectorAll(".box")[idx].addEventListener("mouseover", async () => {await sleep(50); level5();});
        document.querySelectorAll(".box")[idx].addEventListener("click", level6);
        document.querySelector(".container").addEventListener("mouseleave", level5);});
    document.querySelectorAll(".box")[idx].addEventListener("click", level6);
    document.querySelector(".container").addEventListener("mouseleave", level5);
}

function level4() {
    objective.innerHTML = "Level 4: Click the number divisible by 4.";
    for (box of document.querySelectorAll(".box")) {
    box.replaceWith(box.cloneNode(true))}
for (box of document.querySelectorAll(".box")){
        while (true) {
            let num = Math.floor(Math.random() * 10000);
            if (num % 4 != 0) {
                box.innerHTML = num;
                break;
            }
        }
        box.addEventListener("click", level3)
    }
    let ans = document.querySelectorAll(".box")[Math.floor(Math.random() * 10)]
    while (true) {
        let num = Math.floor(Math.random() * 10000);
        if (num % 4 == 0) {
            ans.innerHTML = num;
            break;
        }
    }
    ans.addEventListener("click", level5);
}

function level3() {
    objective.innerHTML = "Level 3: Click the number divisible by 3.";
    for (box of document.querySelectorAll(".box")) {
        box.replaceWith(box.cloneNode(true))}
for (box of document.querySelectorAll(".box")){
        while (true) {
            let num = Math.floor(Math.random() * 10000);
            if (num % 3 != 0) {
                box.innerHTML = num;
                break;
            }
        }
        box.addEventListener("click", level2)
    }
    let ans = document.querySelectorAll(".box")[Math.floor(Math.random() * 10)]
    while (true) {
        let num = Math.floor(Math.random() * 10000);
        if (num % 3 == 0) {
            ans.innerHTML = num;
            break;
        }
    }
    ans.addEventListener("click", level4);
}

function level2() {
    objective.innerHTML = "Level 2: Click the odd symbol out.";
    for (box of document.querySelectorAll(".box")) {
    box.replaceWith(box.cloneNode(true))}
for (box of document.querySelectorAll(".box")){
        box.innerHTML = ".";
        box.addEventListener("click", level2);
    }

    idx = Math.floor(Math.random() * 10);
    document.querySelectorAll(".box")[idx].innerHTML = ",";
    document.querySelectorAll(".box")[idx].addEventListener("click", level3);
}

function level1() {
    if (interval == null) {
        let startTime = Date.now();
    
        interval = setInterval(() => {
            var elapsedTime = (Date.now() - startTime) / 1000;
            if (elapsedTime < 60) {
                document.getElementById("timer").innerHTML = elapsedTime.toFixed(3);
            } else {
                let mm = Math.floor(elapsedTime / 60.0)
                let ss = elapsedTime % 60.0
                if (ss < 10.0) {
                    document.getElementById("timer").innerHTML = mm + ':0' + ss.toFixed(3);
                } else {
                    document.getElementById("timer").innerHTML = mm + ':' + ss.toFixed(3);
                }
            }
        }, 7);
        level2();
    }
}