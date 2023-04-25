const createTimer = () => {
    const deadline = new Date(Date.now() + 10000000);

    const getRemaininngTime = (endTime) => {
        const remainingTime = Date.parse(endTime) - Date.parse(new Date);
        const days = Math.floor(remainingTime / 86400000);
        const hours = Math.floor((remainingTime / 3600000) % 24);
        const minutes = Math.floor((remainingTime / 60000) % 60);
        const seconds = Math.floor((remainingTime / 1000) % 60);

        return {
            remainingTime,
            days,
            hours,
            minutes,
            seconds
        };
    };

    const checkForZero = (num) => {
        return num >= 0 && num < 10 ? `0${num}` : num;
    }

    const setTimer = (endTime) => {
        const daysElement = document.querySelector('#days');
        const hoursElement = document.querySelector('#hours');
        const minutesElement = document.querySelector('#minutes');
        const secondsElement = document.querySelector('#seconds');



        const initializeTimer = () => {
            const time = getRemaininngTime(endTime);
            daysElement.innerHTML = checkForZero(time.days);
            hoursElement.innerHTML = checkForZero(time.hours);
            minutesElement.innerHTML = checkForZero(time.minutes);
            secondsElement.innerHTML = checkForZero(time.seconds);
        };

        initializeTimer();
        setInterval(initializeTimer, 1000);

    };

    setTimer(deadline);
};

export default createTimer;