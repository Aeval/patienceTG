updScore();
$('#stopBtn').hide();
$('#timer').html('Hit Start!');

$('#startBtn').on('click', function (e) {
    var startAt = startTime;
    var display = $('#timer')[0];
    $('#timer').css('color', 'black');
    startTimer(startAt, display);
    setBtnState();
});

$('#stopBtn').on('click', function (e) {
    $('#timer').css('color', 'red');
    isOne(time);
});