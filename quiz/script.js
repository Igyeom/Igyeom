const options = Object.keys(users);

for (let i = 0; i < 25; i++) {
    let name = Object.keys(users)[i];
    document.getElementById('name' + (i + 1)).innerHTML = name;
    document.getElementById('avatar' + (i + 1)).src = users[name];
}

let answer = Math.floor(Math.random() * data.length);
let timer = 120;
let score = 0;

const update = () => {
    answer = Math.floor(Math.random() * data.length);
    document.getElementById('avatar').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Blue_question_mark_icon.svg/2048px-Blue_question_mark_icon.svg.png";
    document.getElementById('author').innerHTML = "???";
    document.getElementById('message').innerHTML = data[answer].content;
    document.getElementById('timestamp').innerHTML = data[answer].timestamp.replaceAll('T', ' ');
}

const guess = async (guess) => {
    if (timer === 0) return;
    if (guess === data[answer].author) {
        document.getElementById('message').innerHTML = "Correct!";
        document.getElementById('message').style.color = 'limegreen';
        score++;
        document.getElementById('score').innerHTML = score;
        await new Promise(r => setTimeout(r, 300));
        document.getElementById('message').style.color = 'white';
        update();
    } else {
        document.getElementById('message').innerHTML = "Incorrect!";
        document.getElementById('message').style.color = 'red';
        document.getElementById('avatar').src = data[answer].avatar;
        document.getElementById('author').innerHTML = data[answer].author;
        await new Promise(r => setTimeout(r, 1000));
        document.getElementById('message').style.color = 'white';
        update();
    }
}

const start = () => {
    setInterval(() => {
        if (timer > 0) {timer--; document.getElementById('timer').style.color = 'white';}
        else document.getElementById('timer').style.color = 'red';
        if (timer < 10) document.getElementById('timer').innerText = Math.floor(timer / 60) + ":0" + timer%60;
        else document.getElementById('timer').innerText = Math.floor(timer / 60) + ":" + timer%60;
        if (timer === 0) {
            document.getElementById('message').innerHTML = "Time's up!";
            document.getElementById('message').style.color = 'red';
            document.getElementById('avatar').src = data[answer].avatar;
            document.getElementById('author').innerHTML = data[answer].author;
        }
    }, 1000);
    document.getElementById('start').style.display = 'none';
    document.getElementById('avatar').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Blue_question_mark_icon.svg/2048px-Blue_question_mark_icon.svg.png";
    document.getElementById('author').innerHTML = "???";
    document.getElementById('message').innerHTML = data[answer].content;
    document.getElementById('timestamp').innerHTML = data[answer].timestamp.replaceAll('T', ' ');
};