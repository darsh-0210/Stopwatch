let hr = 0;
let min = 0;
let sec = 0;
// let count = 0;

let timer = false;

function start() {
    timer = true;
    swatch();
}
function stop() {
    timer=false;
}
function reset() {
    timer=false;
    hr = 0;
    min = 0;
    sec = 0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
}

function swatch() {
    if (timer==true) {
       
        sec=sec+1;
        if (sec==60){
            min = min+1;
            sec = 0;
        }
        
        if(min==60){
            hr = hr +1;
            min = 0;
            sec = 0;
        }

        let string_hr = hr;
        let string_min = min;
        let string_sec = sec;
        if(hr<10){
            string_hr = "0"+string_hr
        }
        if(min<10){
            string_min = "0"+string_min
        }
        if(sec<10){
            string_sec = "0"+ string_sec
        }
        document.getElementById("hr").innerHTML = string_hr;
        document.getElementById("min").innerHTML = string_min;
        document.getElementById("sec").innerHTML = string_sec;
        
        setTimeout("swatch()", 1000);
    }
}