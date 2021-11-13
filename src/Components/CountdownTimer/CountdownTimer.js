import './CountdownTimer.css'
import { useState, useEffect } from 'react';
import { getRemaininttimeUntilMSTimestam } from './Helpers/CalculateTimeDifference';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({ countdownEnd }) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(
        () => {
            const intervalID = setInterval(() => {
                updateRemainingTime(countdownEnd);
            }, 1000);

            return () => clearInterval(intervalID);

        },
        [countdownEnd]
    )

    function updateRemainingTime(countdown) {
        //console.log("updateRemainingTime called...");
        setRemainingTime(getRemaininttimeUntilMSTimestam(countdown));
    }

    return (
        <div className="countdown-timer">
            <span>{remainingTime.days}</span>
            <span>Days</span>
            <span>{remainingTime.hours}</span>
            <span>Hours</span>
            <span>{remainingTime.minutes}</span>
            <span>Minutes</span>
            <span>{remainingTime.seconds}</span>
            <span>Seconds</span>
        </div>
    );
}

export default CountdownTimer;