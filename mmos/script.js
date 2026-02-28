const options = Object.keys(users);
let sources = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];

for (let j = 0; j < data.length; j++) {
    for (let i = 0; i < 20; i++) {
        let name = Object.keys(users)[i];
        document.getElementById('name' + (i + 1)).innerHTML = name;
        document.getElementById('avatar' + (i + 1)).src = users[name];
        if (data[j].author.nickname == name) {
            sources[i].push(data[j]);
        }
    }
}

let answer = Math.floor(Math.random() * 20);
let index = Math.floor(Math.random() * sources[answer].length);
let timer = 121;
let score = 0;

const update = () => {
    answer = Math.floor(Math.random() * 20);
    index = Math.floor(Math.random() * sources[answer].length);
    document.getElementById('avatar').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Blue_question_mark_icon.svg/2048px-Blue_question_mark_icon.svg.png";
    document.getElementById('author').innerHTML = "???";
    document.getElementById('message').innerHTML = sources[answer][index].content;
    document.getElementById('timestamp').innerHTML = sources[answer][index].timestamp.replaceAll('T', ' ');
}

const guess = async (guess) => {
    if (timer === 0) return;
    if (timer === 121) alert("Press 'Start' to begin the quiz.");
    if (guess === options[answer]) {
        document.getElementById('message').innerHTML = "Correct!";
        document.getElementById('message').style.color = 'limegreen';
        if (timer < 121) score++;
        document.getElementById('score').innerHTML = score;
        await new Promise(r => setTimeout(r, 300));
        document.getElementById('message').style.color = 'white';
        update();
    } else {
        document.getElementById('message').innerHTML = "Incorrect!";
        document.getElementById('message').style.color = 'red';
        document.getElementById('avatar').src = users[options[answer]];
        document.getElementById('author').innerHTML =  options[answer];
        if (timer < 121) score--;
        document.getElementById('score').innerHTML = score;
        await new Promise(r => setTimeout(r, 2000));
        document.getElementById('message').style.color = 'white';
        update();
    }
}

const start = () => {
    timer--;
    setInterval(() => {
        if (timer > 0) {timer--; document.getElementById('timer').style.color = 'white';}
        else document.getElementById('timer').style.color = 'red';
        if (timer%60 < 10) document.getElementById('timer').innerText = Math.floor(timer / 60) + ":0" + timer%60;
        else document.getElementById('timer').innerText = Math.floor(timer / 60) + ":" + timer%60;
        if (timer === 0) {
            document.getElementById('message').innerHTML = "Time's up!";
            document.getElementById('message').style.color = 'red';
            document.getElementById('avatar').src = sources[answer][index].avatar;
            document.getElementById('author').innerHTML = sources[answer][index].author;
        }
    }, 1000);
    document.getElementById('start').style.display = 'none';
    document.getElementById('avatar').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Blue_question_mark_icon.svg/2048px-Blue_question_mark_icon.svg.png";
    document.getElementById('author').innerHTML = "???";
    document.getElementById('message').innerHTML = sources[answer][index].content;
    document.getElementById('timestamp').innerHTML = sources[answer][index].timestamp.replaceAll('T', ' ');
};
