var char_size = 1;
var audio_size = 1;
var len = 0;


for (i of document.getElementsByClassName("img")) {
    i.addEventListener("keyup", (e) => {
        res = parseInt(document.getElementById("w").value) * parseInt(document.getElementById("h").value) * parseInt(document.getElementById("c").value)
        document.getElementById("res_img").innerHTML = "Result:\nW*H*C = " + document.getElementById("w").value + "*" + document.getElementById("h").value + "*" + document.getElementById("c").value + " = " + res + " bits\n" + (res/8).toFixed(2) + "B\n" + (res/8/1024).toFixed(2) + "KiB\n" + (res/8/1024/1024).toFixed(2) + "MiB\n" + (res/8/1024/1024/1024).toFixed(2) + "GiB\n" + (res/8/1024/1024/1024/1024).toFixed(2) + "TiB";
    });
}


for (i of document.getElementsByClassName("audio")) {
    i.addEventListener("keyup", (e) => {
        res = parseInt(document.getElementById("hz").value) * parseInt(document.getElementById("bits").value) * parseInt(document.getElementById("s").value) * audio_size
        document.getElementById("res_audio").innerHTML = "Result:\n" + document.getElementById("hz").value + "*" + document.getElementById("bits").value + "*" + document.getElementById("s").value + "*" + audio_size + " = " + res + " bits\n" + (res/8).toFixed(2) + "B\n" + (res/8/1024).toFixed(2) + "KiB\n" + (res/8/1024/1024).toFixed(2) + "MiB\n" + (res/8/1024/1024/1024).toFixed(2) + "GiB\n" + (res/8/1024/1024/1024/1024).toFixed(2) + "TiB";
    });
}


setInterval(() => {
    if (document.getElementById("encoding").value == "a") {
        char_size = 1;
    } else if (document.getElementById("encoding").value == "u") {
        char_size = 4;
    }
    if (document.getElementById("channel").value == "m") {
        audio_size = 1;
        res = parseInt(document.getElementById("hz").value) * parseInt(document.getElementById("bits").value) * parseInt(document.getElementById("s").value) * audio_size
        document.getElementById("res_audio").innerHTML = "Result:\n" + document.getElementById("hz").value + "*" + document.getElementById("bits").value + "*" + document.getElementById("s").value + "*" + audio_size + " = " + res + " bits\n" + (res/8).toFixed(2) + "B\n" + (res/8/1024).toFixed(2) + "KiB\n" + (res/8/1024/1024).toFixed(2) + "MiB\n" + (res/8/1024/1024/1024).toFixed(2) + "GiB\n" + (res/8/1024/1024/1024/1024).toFixed(2) + "TiB";
    } else if (document.getElementById("channel").value == "s") {
        audio_size = 2;
        res = parseInt(document.getElementById("hz").value) * parseInt(document.getElementById("bits").value) * parseInt(document.getElementById("s").value) * audio_size
        document.getElementById("res_audio").innerHTML = "Result:\n" + document.getElementById("hz").value + "*" + document.getElementById("bits").value + "*" + document.getElementById("s").value + "*" + audio_size + " = " + res + " bits\n" + (res/8).toFixed(2) + "B\n" + (res/8/1024).toFixed(2) + "KiB\n" + (res/8/1024/1024).toFixed(2) + "MiB\n" + (res/8/1024/1024/1024).toFixed(2) + "GiB\n" + (res/8/1024/1024/1024/1024).toFixed(2) + "TiB";
    }
    if (document.getElementById("mode").value == "len") {
        document.getElementById("len").disabled = false;
        document.getElementById("txt").disabled = true;
        len = parseInt(document.getElementById("len").value);
    } else if (document.getElementById("mode").value == "txt") {
        document.getElementById("len").disabled = true;
        document.getElementById("txt").disabled = false;
        len = document.getElementById("txt").value.length;
        document.getElementById("len").value = len;
    }
    document.getElementById("res_txt").innerHTML = "Result:\n" + len + "*" + char_size + "B = " + len*char_size + "B = " + (len*char_size/1024).toFixed(2) + "KiB";
}, 50);
