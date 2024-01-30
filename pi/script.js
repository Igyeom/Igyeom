function judge() {
    if(document.querySelector("#digits").innerHTML.split("3.")[1].startsWith(document.querySelector("#attempt").value)){
        document.querySelector("#result").innerHTML = "All " + document.querySelector("#attempt").value.length + " digit(s) are correct!";
        document.querySelector("#result").style.background = "limegreen";
    }else{
        for(let i = 0; i < document.querySelector("#attempt").value.length; i++){
            if(document.querySelector("#attempt").value[i]!=document.querySelector("#digits").innerHTML.split("3.")[1][i]){
                document.querySelector("#result").innerHTML = "Only the first " + i + " digit(s) are correct!";
                document.querySelector("#result").style.background = "red";
                break;
            }
        }
    }
}

function update() {
    document.querySelector("#result").innerHTML = "Length: " + document.querySelector("#attempt").value.length;
    document.querySelector("#result").style.background = "grey";
}