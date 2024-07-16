// Set the date for the event
const eventDate = new Date("August 15, 2024 00:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the results
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown is finished
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "The event has started!";
    }
}, 1000);
