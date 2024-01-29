let times = [];
let timing = false;
let timer = 0;
let started;
let inspection = false;
let inspecting = false;
let inspectionTimer = 15;
let insp = null;

import { randomScrambleForEvent } from "https://cdn.cubing.net/js/cubing/scramble";

async function changeCube() {
    document.getElementById('scramble').innerHTML = await randomScrambleForEvent(document.getElementById('type').value);
}

async function scramble() {
    document.getElementById('scramble').innerHTML = await randomScrambleForEvent(document.getElementById('type').value);
}

function interval(duration, fn){
  var _this = this
  this.baseline = undefined
  
  this.run = function(){
    if(_this.baseline === undefined){
      _this.baseline = new Date().getTime()
    }
    fn()
    var end = new Date().getTime()
    _this.baseline += duration
 
    var nextTick = duration - (end - _this.baseline)
    if(nextTick<0){
      nextTick = 0
    }
    
    _this.timer = setTimeout(function(){
      _this.run(end)
    }, nextTick)
  }

  this.stop = function(){
    clearTimeout(_this.timer)
  }
}

if (localStorage.getItem('times') != ["none"]) {
    //console.log(localStorage.getItem('times'))
    times = localStorage.getItem('times').split(",").map(Number);
    document.getElementById('times').innerHTML = "Times: " + times.join(", ");
}

function run() {
    started = new interval(9, function(){
      document.getElementById("timer").innerHTML = (timer/1000).toFixed(3);timer+=9;
    })
    started.run()
}

function stop() {
    timing = false;
    timer = 0;
    let last;
    started.stop()
    times.push(document.getElementById('timer').innerHTML)
    if(times.length >= 5) {
        last = times.slice(-5).map(function (x) { 
  return parseFloat(x);});;
        last.sort()
        document.getElementById('avg').innerHTML = "ao5: " + ((last[1]+last[2]+last[3])/3).toFixed(3);
        if(times.length >= 12) {
            last = times.slice(-12).map(function (x) { 
          return parseFloat(x);});;
                last.sort()
                document.getElementById('avg').innerHTML += " ao12: " + ((last[1]+last[2]+last[3]+last[4]+last[5]+last[6]+last[7]+last[8]+last[9]+last[10])/10).toFixed(3);
        }
    }
    
    localStorage.setItem("times", times)
    document.getElementById('times').innerHTML = "Times: " + times.join(", ")
    
    scramble()
}

addEventListener('keyup', function(e){
    if (e.key == " ") {
        if(inspection){
            if (timing){
                stop()
            } else if(inspecting) {
                timing = true;
                inspecting = false;
                inspectionTimer = 15;
                document.getElementById('timer').style.color = "";
                clearInterval(insp);
                document.getElementById('timer').innerHTML = "0.000";
                run();
            } else {
                document.getElementById('timer').style.color = "red"
                document.getElementById('timer').innerHTML = 15
                if(insp != null){clearInterval(insp);}
                insp = setInterval(function(){inspectionTimer -= 1; if(inspectionTimer<-2){document.getElementById('timer').innerHTML ="DNF"}else if(inspectionTimer<0){document.getElementById('timer').innerHTML = "+2"}else{document.getElementById('timer').innerHTML = inspectionTimer}}, 1000)
                inspecting = true;
            }
        }else{
            if (timing){
                stop()
            } else {
                timing = true;
                document.getElementById('timer').innerHTML = "0.000";
                run();
            }
        }
    }
});

document.getElementById('timer').addEventListener('touchend', function(){
    if(inspection){
        if (timing){
            stop()
        } else if(inspecting) {
            timing = true;
            inspecting = false;
            inspectionTimer = 15;
            document.getElementById('timer').style.color = "";
            clearInterval(insp);
            document.getElementById('timer').innerHTML = "0.000";
            run();
        } else {
            document.getElementById('timer').style.color = "red"
            document.getElementById('timer').innerHTML = 15
            if(insp != null){clearInterval(insp);}
            insp = setInterval(function(){inspectionTimer -= 1; if(inspectionTimer<-2){document.getElementById('timer').innerHTML ="DNF"}else if(inspectionTimer<0){document.getElementById('timer').innerHTML = "+2"}else{document.getElementById('timer').innerHTML = inspectionTimer}}, 1000)
            inspecting = true;
        }
    }else{
        if (timing){
            stop()
        } else {
            timing = true;
            document.getElementById('timer').innerHTML = "0.000";
            run();
        }
    }
});

function reset() {
    localStorage.setItem('times', ["none"]);
    location.reload();
}

scramble();

document.getElementById('reset').addEventListener("click", reset)
document.getElementById('new').addEventListener("click", scramble)
document.getElementById('type').addEventListener("change", changeCube)
document.getElementById("inspection").addEventListener("click",function(){inspection=!inspection;if(inspection){
    document.getElementById("inspection").innerHTML = "Inspection: ON"
} else {
    document.getElementById("inspection").innerHTML = "Inspection: OFF"
}})