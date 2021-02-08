import React, {useEffect, useState} from 'react';

function Timer({deadline, delTimer}) {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);


    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    const getTimeRemaining = (deadline) => {
        const t = Date.parse(deadline) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000 * 60 * 60)) % 24),
        days = Math.floor((t/(1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

   useEffect(() => {
    const  timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimeRemaining(deadline);

        setDays(addZero(t.days));
        setHours(addZero(t.hours));
        setMinutes(addZero(t.minutes));
        setSeconds(addZero(t.seconds));

        if (t.total <= 0) {
            setDays(0);
            setHours(0);
            setMinutes(0);
            setSeconds(0);

            clearInterval(timeInterval);
            delTimer(false);
        }
    }

    return () => clearInterval(timeInterval);

   },[deadline]);
 
   if (days === 0 &&
        hours === 0 &&
        minutes === 0 &&
        seconds === 0
    ) {
        return null;
    }


    return (
      <>
        <span>{days}:{hours}:{minutes}:{seconds}</span>
      </>
    )
}

export default Timer;
