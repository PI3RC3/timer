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
            <span><b>{remainingTime.days}</b></span>
            <span>days</span>
            <span><b>{remainingTime.hours}</b></span>
            <span>hours</span>
            <span><b>{remainingTime.minutes}</b></span>
            <span>minutes</span>
            <span><b>{remainingTime.seconds}</b></span>
            <span>seconds</span>
        </div>
    );
}

export default CountdownTimer;