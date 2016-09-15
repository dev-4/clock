function startTime() {
    var theClock = new Date();
    var h = theClock.getHours();
    var m = theClock.getMinutes();
    var s = theClock.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('digital').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);

}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}