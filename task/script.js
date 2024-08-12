let countdownInterval;

function toggleBanner() {
    const banner = document.getElementById('banner');
    const toggle = document.getElementById('toggle-banner').checked;

    if (toggle) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
        clearInterval(countdownInterval);
    }
}

function updateBanner() {
    const description = document.getElementById('banner-description-input').value;
    const link = document.getElementById('banner-link-input').value;
    const timer = parseInt(document.getElementById('banner-timer-input').value, 10);

    document.getElementById('banner-description').innerText = description;
    document.getElementById('banner-link').setAttribute('href', link);

    startCountdown(timer);
}

function startCountdown(seconds) {
    const countdownElement = document.getElementById('countdown');
    let timeLeft = seconds;

    clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
        countdownElement.innerText = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('banner').style.display = 'none';
        }

        timeLeft -= 1;
    }, 1000);
}

