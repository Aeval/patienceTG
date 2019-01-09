var activeTimer;
var time;
var IsOne;
var score = 0;
var startTime = 5;

//Start or Stop timer
function startTimer(startAt, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;

    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = startAt - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
        time = minutes + ':' + seconds;
        isZero(time);
    };
    // we don't want to wait a full second before the timer starts
    timer();
    activeTimer = setInterval(timer, 1000);
}

function stopTimer() {
    clearInterval(activeTimer);
}

//Set state of buttons
function resetBtnState() {
    $('#stopBtn').hide();
    $('#startBtn').show();
}

function setBtnState() {
    $('#startBtn').hide();
    $('#stopBtn').show();
}

//Set and update score
function isZero(time) {
    if (time == '00:00') {
        stopTimer();
        setTimerColor('red');
        resetBtnState();
        $('#timer').html('Time\'s Up!');
        score = 0;
        startTime = 5;
        updScore();
    }
}

function isOne(time) {
    var display = $('#timer')[0];

    if (time == '00:01') {
        stopTimer();
        setTimerColor('green');
        score++;
        $('#score').html(score);
        startTime += 1;
        setTimerColor('black');
        startTimer(startTime, display);
    } else {
        stopTimer();
        setTimerColor('red');
        resetBtnState();
        score = 0;
        $('#score').html(score);
        startTime = 5;
    }
}

function updScore() {
    $('#score').html(score);
}

function setTimerColor(color) {
    $('#timer').css('color', color);
}