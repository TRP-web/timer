import React, { FC, useEffect, useState } from "react";
import { useTypesSelector } from "../../hooks/useTypedSelector";
import Time from "../Time/Time";

const Timer: FC = ({ }) => {
    const timerStatus = useTypesSelector(state => state.timer.statusTimer)
    const [ms, setMs] = useState<any>(0)
    const [startDate, setStartDate] = useState<any>(new Date())
    const [lastDate, setLastDate] = useState<number>(0)

    if (timerStatus === "start") {
        setTimeout(() => {
            if (ms === 0) {
                setStartDate(new Date())
            }

            let thisDate: any = new Date()
            setMs(thisDate - startDate + lastDate)

        }, 1)
    }
    if (timerStatus === "stop" && ms !== 0) {
        setTimeout(() => {
            setStartDate(new Date)
        })
    }
    useEffect(() => {
        if (timerStatus === "sub") {
            setTimeout(() => {
                setLastDate(0)
                setStartDate(0)
                setMs(0)
            })

        } else if (timerStatus === "stop") {
            setLastDate(ms)
        }

    }, [timerStatus])



    return (
        <section className="timer">
            <div className="timer__inner">
                <Time ms={ms}/>
            </div>
        </section>
    )
}

export default Timer