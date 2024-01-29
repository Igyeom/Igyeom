let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let token = "";
let tokens = [];
let state = 0;
let s = [];

function eval() {
    if (document.getElementById('command').value.split(' ')[0] == "represent") {
        for (var c of document.getElementById('command').value.split(' ')[1]) {
            if (state == 1) {
                if (c in digits) {
                    token += c;
                    
                    tokens.push(parseInt(token));
                    token = ""
                    continue;
                }
            } else if (state == 2) {
                if (c == "x") {
                    token += "x";
                    
                    tokens.push(token);
                    token = "";
                    continue;
                }
            }
            
            if (c in digits) {
                token += c;
                state = 1;
            } else if (c == "x") {
                token += "x";
                state = 2;
            }
        }

        tokens.push(token);
        token = ""
    }
    
    document.getElementById('command').value = "";
    console.log(tokens);

    state = 0;

    for (var t of tokens) {
        if (t.toString() in digits) {
            state = 1;
        } else if (t == "x" && state == 1) {
            s += ["+x.png", tokens[tokens.index(t)-1]]
        } else if (t == "x" && state == 0) {
            s += ["+x.png", 1]
        } else if (state == 1) {
            s += ["+1.png", tokens[tokens.index(t)-1]]
        }
    }

    for (var x of s) {
        var img = new Image();
        img.src = x[0];

        img.onload = function() {
            for (var i of Array(x[1]).keys()) {
                document.getElementById('repr').innerHTML += img;
            }
        }
    }
    state = 0;
    tokens = [];
}