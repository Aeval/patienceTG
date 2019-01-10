updScore();
$('#stopBtn').hide();
$('#timer').html('Hit Start!');
$('#highScore').html(highScore);

$('#startBtn').on('click', function (e) {
    var startAt = startTime;
    var display = $('#timer')[0];
    setTimerColor('white');
    startTimer(startAt, display);
    setBtnState();
});

$('#stopBtn').on('click', function (e) {
    setTimerColor('red');
    isOne(time);
});