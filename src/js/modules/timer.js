const createTimer = () => {
    const deadline = new Date('2023-12-31T23:59:59');

    const daysElement = document.querySelector('#days');
    const hoursElement = document.querySelector('#hours');
    const minutesElement = document.querySelector('#minutes');
    const secondsElement = document.querySelector('#seconds');

    const setTimer = () => {
        const remainingTime = new Date(deadline - Date.now());
        const daysLeft = Math.floor(remainingTime / 86400000);
        const [hoursLeft, minutesLeft, secondsLeft] = remainingTime.toLocaleTimeString('ru-Ru', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }).split(':');

        daysElement.innerHTML = daysLeft;
        hoursElement.innerHTML = hoursLeft;
        minutesElement.innerHTML = minutesLeft;
        secondsElement.innerHTML = secondsLeft;
    };
    setTimer(deadline);

    setInterval(setTimer, 1000);

};

export default createTimer;