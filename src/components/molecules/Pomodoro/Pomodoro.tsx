import React, { useState } from "react"

const Pomodoro = () => {
    const [minutes] = useState(25)
    const [seconds] = useState(0)
    const [displayMessage] = useState(false)

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds

    return (
        <div className="pomodoro pt-6">
            <div className="message">
                {displayMessage && <div>Break time! New session starts in:</div>}
            </div>
            <div className="timer text-6xl text-light-blue drop-shadow-xl text-center">
                {timerMinutes}:{timerSeconds}
            </div>
        </div>
    );
};

export default Pomodoro;