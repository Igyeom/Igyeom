$(document).ready(function() {
    $("img").on("click", function(event) {
        var x = event.pageX - this.offsetLeft;
        var y = event.pageY - this.offsetTop;

        document.getElementById('player').style.marginLeft = x + "px";
        document.getElementById('player').style.marginTop = y + "px";
        document.getElementById('player').hidden = false
    });
});