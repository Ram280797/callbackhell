var seconds = 0;
var el = function(){
    if(seconds <= 0){
      clearInterval(el);document.getElementById('seconds-counter');

function incrementSeconds() {
    seconds += 1;
    el.innerText = "You have been here for " + seconds + " seconds.";
}

var cancel = setInterval(incrementSeconds, 1000);


var gr = document.getElementById("greet");

function greet() {
    gr.innerText=' HAPPY INEDPENDANCE DAY ';
}

setTimeout(greet, 10000);
