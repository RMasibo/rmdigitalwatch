function clock() {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    var today = new Date();

    document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + " " + today.getDate() + " " + monthNames[today.getMonth()] + " " + today.getFullYear());

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = h < 12 ? 'am' : 'pm';
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
    document.getElementById('ampm').innerHTML = day;
}

let inter = setInterval(clock, 400);
