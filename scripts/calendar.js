let currentMonth = (new Date()).getMonth();
let currentYear = (new Date()).getFullYear();

function displayCalendar() {
    const now = new Date(currentYear, currentMonth, 1);
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    const daysInMonth = new Date(year, now.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = now.getDay();

    let calendarHTML = `<h2>${month} ${year}</h2><table>`;
    calendarHTML += '<tr>';

    for (let i = 0; i < 7; i++) {
        calendarHTML += `<td>${dayNames[i]}</td>`;
    }
    calendarHTML += '</tr><tr>';

    const correction = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    const fullWeeks = Math.ceil((daysInMonth + correction) / 7);

    let dayOfMonth = 1 - correction;
    for (let week = 0; week < fullWeeks; week++) {
        for (let day = 0; day < 7; day++) {
            if (dayOfMonth <= 0 || dayOfMonth > daysInMonth) {
                calendarHTML += '<td></td>';
            } else {
                if (dayOfMonth === (new Date()).getDate() && currentMonth === (new Date()).getMonth() && currentYear === (new Date()).getFullYear()) {
                    calendarHTML += `<td class="current-day">${dayOfMonth}</td>`;
                } else {
                    calendarHTML += `<td>${dayOfMonth}</td>`;
                }
            }
            dayOfMonth++;
        }
        calendarHTML += '</tr><tr>';
    }

    calendarHTML += '</tr></table>';
    document.getElementById('calendar').innerHTML = calendarHTML;
}

document.getElementById('prev-month-btn').addEventListener('click', function() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    displayCalendar();
});

document.getElementById('next-month-btn').addEventListener('click', function() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    displayCalendar();
});

window.onload = function() {
    displayCalendar();
};