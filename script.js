


let display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    try{
        display.value = eval(display.value);
    }

    catch{
        display.value = "Error";
    }

}




let seconds = 0;
let minutes = 0;
let hours = 0;

let timer;
let isRunning = false;

function updateTimer(){

    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 60){
        minutes = 0;
        hours++;
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("time").innerHTML =
        `${h} : ${m} : ${s}`;
}


function startTimer(){

    if(!isRunning){

        timer = setInterval(updateTimer,1000);

        isRunning = true;
    }
}


function pauseTimer(){

    clearInterval(timer);

    isRunning = false;
}


function resetTimer(){

    clearInterval(timer);

    isRunning = false;

    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById("time").innerHTML =
        "00 : 00 : 00";
}
