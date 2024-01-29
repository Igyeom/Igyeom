const clap = new Audio("clap.mp3");
const sadViolin = new Audio("sad_violin.mp3");
var clapCount = 0;
var dead = false;
var clapped = false;
var accepted = false;
var random_1, random_2, random_3;

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

setInterval(() => {
    if (document.querySelector("#countdown").innerHTML == "GO!" && !dead) {
        if (clapped) {
            clapped = false;
            clap.play();
            clapCount++;
        } else if (accepted) {
            accepted = false;
            if (clapCount == (document.querySelector("#number").innerHTML.split(random_1.toString()).length - 1) + (document.querySelector("#number").innerHTML.split(random_2.toString()).length - 1) + (document.querySelector("#number").innerHTML.split(random_3.toString()).length - 1)) {
                clapCount = 0;
                score++;
                document.querySelector("#score").innerHTML = score;

                document.querySelector("#number").innerHTML = document.querySelector("#next_1").innerHTML;
                document.querySelector("#next_1").innerHTML = document.querySelector("#next_2").innerHTML;
                document.querySelector("#next_2").innerHTML = Math.floor(Math.random() * 100000);
            } else {
                clapCount = 0;
                dead = true;
                sadViolin.play();
            }
        }
    }
}, 10);


const start = async (mode) => {
    dead = false;
    clapCount = 0;
    score = 0;
    document.querySelector("#score").innerHTML = score;
    sadViolin.pause();

    if (mode) {
        while (!(random_1 < random_2 && random_2 < random_3)) {
            random_1 = Math.ceil(Math.random() * 9);
            random_2 = Math.ceil(Math.random() * 9);
            random_3 = Math.ceil(Math.random() * 9);
            document.querySelector("#target").innerHTML = random_1 + " " + random_2 + " " + random_3;
        }
    } else {
        random_1 = 3;
        random_2 = 6;
        random_3 = 9;
        document.querySelector("#target").innerHTML = random_1 + " " + random_2 + " " + random_3;
    }

    document.querySelector("#number").innerHTML = Math.floor(Math.random() * 100000);
    document.querySelector("#next_1").innerHTML = Math.floor(Math.random() * 100000);
    document.querySelector("#next_2").innerHTML = Math.floor(Math.random() * 100000);

    document.querySelector("#countdown").hidden = false;
    document.querySelector("#countdown").style.color = "red";
    document.querySelector("#countdown").innerHTML = "3";
    await sleep(1000);
    document.querySelector("#countdown").style.color = "orange";
    document.querySelector("#countdown").innerHTML = "2";
    await sleep(1000);
    document.querySelector("#countdown").style.color = "yellow";
    document.querySelector("#countdown").innerHTML = "1";
    await sleep(1000);
    document.querySelector("#countdown").style.color = "limegreen";
    document.querySelector("#countdown").innerHTML = "GO!";

    addEventListener("keyup", (e) => {
        if (document.querySelector("#countdown").innerHTML == "GO!" && !dead) {
            if (e.key === "ArrowLeft") {
                clap.play();
                clapCount++;
            } else if (e.key === "ArrowRight") {
                if (clapCount == (document.querySelector("#number").innerHTML.split(random_1.toString()).length - 1) + (document.querySelector("#number").innerHTML.split(random_2.toString()).length - 1) + (document.querySelector("#number").innerHTML.split(random_3.toString()).length - 1)) {
                    clapCount = 0;
                    score++;
                    document.querySelector("#score").innerHTML = score;

                    document.querySelector("#number").innerHTML = document.querySelector("#next_1").innerHTML;
                    document.querySelector("#next_1").innerHTML = document.querySelector("#next_2").innerHTML;
                    document.querySelector("#next_2").innerHTML = Math.floor(Math.random() * 100000);
                } else {
                    clapCount = 0;
                    dead = true;
                    sadViolin.play();
                }
            }
        }
    });

    await sleep(500);
    document.querySelector("#countdown").hidden = true;
}

start();
addEventListener("keyup", (e) => {
    if (e.key == '1') {
        start(mode = 0);
    } else if (e.key == '2') {
        start(mode = 1);
    }
});