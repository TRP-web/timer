import React from "react";

interface TimeProp {
    ms: number
}

const Time: React.FC<TimeProp> = ({ ms }) => {

    interface timeReturn {
        mil: string,
        sec: string,
        min: string
    }

    const getNormalizeDate = (ms: number) => {
        let mil: string = Math.floor((ms / 10) % 100) < 10 ? `0${Math.floor((ms / 10) % 100)}` : `${Math.floor((ms / 10) % 100)}`

        let sec: string = Math.floor((ms / 1000) % 60) < 10 ? `0${Math.floor((ms / 1000) % 60)}` : `${Math.floor((ms / 1000) % 60)}`

        let min: string = Math.floor((ms / (1000 * 60)) % 60) < 10 ? `0${Math.floor((ms / (1000 * 60)) % 60)}` : `${Math.floor((ms / (1000 * 60)) % 60)}`

        let result: timeReturn = {
            mil: mil,
            sec: sec,
            min: min
        }

        return result
    }

    return (
        <div className="timer__time-block">
            <span className="timer__min">
                {
                    getNormalizeDate(ms).min
                }
            </span>
            :
            <span className="timer__seconds">
                {
                    getNormalizeDate(ms).sec
                }
            </span>
            <span className="timer__ms">
                {
                    getNormalizeDate(ms).mil
                }
            </span>
        </div>
    )
}

export default Time