const datetimeContainer = document.getElementById('datetime-container');

function displayDateTime() {
    const now = new Date();
    const date = `${now.getDate().toString().padStart(2, '0')}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getFullYear()}`;
    const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

    const options = { weekday: 'long' };
    const dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(now);

    document.getElementById('time').textContent = `Time: ${time}`;
    document.getElementById('date').textContent = `Date: ${date}, ${dayOfWeek}`;

    datetimeContainer.style.top = '10px';
    datetimeContainer.style.left = '10px';
}
setInterval(displayDateTime, 1000);