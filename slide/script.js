let left = 0
let right = 0

let start = new Date()

addEventListener('keyup', function(e) {
    if (e.key == "j") {
        if (left < 5) {
            left += 1
        } else {
            end = new Date()
            document.getElementById('l').innerHTML = "L: " + 5 / ((end.getTime() - start.getTime()) / 1000) + " Hz";
            left = 0
            start = new Date()
        }
    }
    if (e.key == "l") {
        if (right < 5) {
            right += 1
        } else {
            end = new Date()
            document.getElementById('r').innerHTML = "R: " + 5 / ((end.getTime() - start.getTime()) / 1000) + " Hz";
            right = 0
            start = new Date()
        }
    }
})