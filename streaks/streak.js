document.addEventListener("DOMContentLoaded", function() {
    const currentStreakElem = document.getElementById("current-streak");
    const nextMilestoneElem = document.getElementById("next-milestone");
    const challengeDayElem = document.getElementById("challenge-day");
    const challengeProgressElem = document.getElementById("challenge-progress");
    const calendarElem = document.getElementById("calendar");

    // Get current streak and challenge progress from local storage or initialize
    let currentStreak = parseInt(localStorage.getItem("currentStreak")) || 0;
    let lastActiveDay = localStorage.getItem("lastActiveDay") || new Date().toISOString().split('T')[0];
    let challengeDay = parseInt(localStorage.getItem("challengeDay")) || 0;

    // Update the current streak and challenge progress
    currentStreakElem.textContent = currentStreak;
    nextMilestoneElem.textContent = 1100;  // Example milestone
    challengeDayElem.textContent = challengeDay;
    challengeProgressElem.style.width = `${(challengeDay / 30) * 100}%`;

    // Generate the calendar for the current month
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElem = document.createElement("div");
        dayElem.classList.add("day");
        dayElem.textContent = day;

        const date = new Date(year, month, day);
        const dateString = date.toISOString().split('T')[0];

        if (dateString === lastActiveDay) {
            dayElem.classList.add("active");
        } else if (dateString < lastActiveDay) {
            dayElem.classList.add("missed");
        }

        calendarElem.appendChild(dayElem);
    }

    // Update streaks and challenge progress
    function updateStreaks() {
        currentStreak++;
        lastActiveDay = new Date().toISOString().split('T')[0];
        challengeDay++;
        if (challengeDay > 30) challengeDay = 1;

        localStorage.setItem("currentStreak", currentStreak);
        localStorage.setItem("lastActiveDay", lastActiveDay);
        localStorage.setItem("challengeDay", challengeDay);

        currentStreakElem.textContent = currentStreak;
        challengeDayElem.textContent = challengeDay;
        challengeProgressElem.style.width = `${(challengeDay / 30) * 100}%`;
    }

    // Example: Update streaks when clicking on the calendar
    calendarElem.addEventListener("click", function(event) {
        if (event.target.classList.contains("day")) {
            updateStreaks();
            event.target.classList.add("active");
        }
    });
});
