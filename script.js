if (window.location.pathname === "/") {
    window.location.href = "/index.html";
}

function minTwoDigits(n) {
    return (n < 10 ? '0' : '') + n;
}

// Update the count down every 1 second
var x = setInterval(function () {

    /* ADD BY ME */
    var currentTime = new Date();
    var currentDay = currentTime.getDay();

    // Déterminer le dernier lundi à 9h00
    var lastMonday = new Date(currentTime);
    lastMonday.setDate(currentTime.getDate() - (currentDay + 6) % 7); // Définir la date au dernier lundi
    lastMonday.setHours(9, 0, 0, 0); // Définir l'heure à 9h00

    // Déterminer le prochain lundi à 9h00
    var nextMonday = new Date(currentTime);
    nextMonday.setDate(currentTime.getDate() + (8 - currentDay) % 7); // Définir la date au prochain lundi
    nextMonday.setHours(9, 0, 0, 0); // Définir l'heure à 9h00

    // Déterminer le dernier vendredi à 17h00
    var lastFriday = new Date(currentTime);
    lastFriday.setDate(currentTime.getDate() - (currentDay + 2) % 7); // Définir la date au dernier vendredi
    lastFriday.setHours(17, 0, 0, 0); // Définir l'heure à 17h00

    // Déterminer le prochain vendredi à 17h00
    var nextFriday = new Date(currentTime);
    nextFriday.setDate(currentTime.getDate() + (5 - currentDay) % 7); // Définir la date au prochain vendredi
    nextFriday.setHours(17, 0, 0, 0); // Définir l'heure à 17h00

    // Set the date we're counting down to
    var now = new Date().getTime();
    var file = (window.location.href).substr(0, ((window.location.href).lastIndexOf("/")) + 1);

    if (lastMonday < now && now < nextFriday) {
        if (location.href == file + 'countdown.html') {
            window.location.href = file + 'index.html';
        }
        countDownDate = nextFriday.getTime();
    } else if (lastFriday < now && now < nextMonday) {
        if (location.href == file + 'index.html') {
            window.location.href = file + 'countdown.html';
        }
        countDownDate = nextMonday.getTime();
    }
    /* END ADD BY ME */

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var weeks = Math.floor(days / 7);
    days = days % 7;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (location.href == file + 'countdown.html') {
        var counterWeekElement = document.getElementById("weeks").querySelector(".clock_counter");
        counterWeekElement.innerText = minTwoDigits(weeks);

        var counterDaysElement = document.getElementById("days").querySelector(".clock_counter");
        counterDaysElement.innerText = minTwoDigits(days);

        var counterHoursElement = document.getElementById("hours").querySelector(".clock_counter");
        counterHoursElement.innerText = minTwoDigits(hours);

        var counterMinutesElement = document.getElementById("minutes").querySelector(".clock_counter");
        counterMinutesElement.innerText = minTwoDigits(minutes);

        var counterSecondsElement = document.getElementById("seconds").querySelector(".clock_counter");
        counterSecondsElement.innerText = minTwoDigits(seconds);
    }
},
    1000);