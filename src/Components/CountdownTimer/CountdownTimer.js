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
    const [formatType, setFormatType] = useState("extended");

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
        setRemainingTime(getRemaininttimeUntilMSTimestam(countdown));
    }

    function ChangeFormat() {
        if (formatType === "extended") {
            setFormatType("compact");
        }
        else {
            setFormatType("extended");
        }
    }

    if (formatType === "extended") {
        return (
            <div className="countdown-timer"
            onClick={ChangeFormat}>
                <div><span className="numbers">{remainingTime.days}</span>
                    <span>DAYS</span></div>
                <div><span className="numbers">{remainingTime.hours}</span>
                    <span>HOURS</span></div>
                <div><span className="numbers">{remainingTime.minutes}</span>
                    <span>MINUTES</span></div>
                <div><span className="numbers">{remainingTime.seconds}</span>
                    <span>SECONDS</span></div>
            </div>
        );
    }
    else {
        return (
            <div className="countdown-timer"
            onClick={ChangeFormat}>
                <span className="compactFormat">{remainingTime.days}:</span>
                <span className="compactFormat">{remainingTime.hours}:</span>
                <span className="compactFormat">{remainingTime.minutes}:</span>
                <span className="compactFormat">{remainingTime.seconds}</span>
            </div>
        );
    }
}

export default CountdownTimer;