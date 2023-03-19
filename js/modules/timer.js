function timer(timerSelector ,deadlineTime, endtimeSelector) {
    //timer

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);

        if (t <= 0) {
            return {
                'total': 0,
                'days': 0,
                'hours': 0,
                'minutes': 0,
                'seconds': 0
            }
        } else {
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }
    };


    function setZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num
        }
    }

    const months = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
    ]


    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            endtimeText = document.querySelector(endtimeSelector),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = setZero(t.days);
            hours.innerHTML = setZero(t.hours);
            minutes.innerHTML = setZero(t.minutes);
            seconds.innerHTML = setZero(t.seconds);
            endtimeText.innerHTML = `
                Акция закончи${t.total == 0 ? 'лась' : 'тся' } <span> ${new Date(endtime).getDate()} ${months[new Date(endtime).getMonth()]} в 00:00
            </span>
            `
            

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }

    getTimeRemaining(deadlineTime);
    setClock(timerSelector, deadlineTime)
}

export default timer

