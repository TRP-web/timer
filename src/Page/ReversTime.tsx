import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import Time from "../components/Time/Time";
import { useTypesSelector } from "../hooks/useTypedSelector";
import { timerAction, TimerStatusActionType } from "../store/reducers/timerStatusReducer/timerStatusReducerTypes";

interface isStartDate {
    date: any
    set: boolean
}

interface isInputTime {
    minuts: string
    seconds: string
}

const ReversTimer: React.FC = () => {
    const dispatch: Dispatch<timerAction> = useDispatch()
    const statusTimer = useTypesSelector(state => state.timer.statusTimer)
    const [inputsTime, setInputsTime] = React.useState<isInputTime>({ minuts: '', seconds: '' })
    const [allMsCalc, setAllMsCalc] = React.useState<number>(1)
    const [startDate, setStartDate] = React.useState<isStartDate>({ date: null, set: false })
    const [date, setDate] = React.useState<any>(0)

    const MinutsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue: string = e.target.value.replace(/[^0-9]/g, "")
        setInputsTime({ minuts: newValue, seconds: inputsTime.seconds })
    }

    const secondsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue: string = e.target.value.replace(/[^0-9]/g, "")
        setInputsTime({minuts: inputsTime.minuts, seconds:newValue})
    }

    const calcMs = (minuts: number, seconds: number = 0): number => {
        return minuts * 1000 * 60 + seconds * 1000
    }

    React.useEffect(() => {
        dispatch({ type: TimerStatusActionType.CHENGE_STATUS, newStatus: "stop" })
        setTimeout(() => {
            setDate(calcMs(Number(inputsTime.minuts), Number(inputsTime.seconds)))
        })
        setAllMsCalc(calcMs(Number(inputsTime.minuts), Number(inputsTime.seconds)))
    }, [inputsTime])

    if (statusTimer === "start") {
        if (startDate.set === false) {
            setStartDate({ date: new Date(), set: true })
        }
        if (date <= 0) {
            dispatch({ type: TimerStatusActionType.CHENGE_STATUS, newStatus: "stop" })
            setTimeout(() => {
                setDate(0)
                setInputsTime({ minuts: '', seconds: '' })
            })
        } else if (date > 0) {
            setTimeout(() => {
                let nowDate: any = new Date()
                let newMs = allMsCalc - (nowDate - startDate.date)
                setDate(newMs)
                // setAllMsCalc(newMs)
            })
        }


    } else if (statusTimer === "stop" && startDate.set !== false) {
        setTimeout(() => {
            setAllMsCalc(date)
            setStartDate({ date: startDate.date, set: false })
        })

    }
    return (
        <div>
            <input
                type="text"
                className="time-revers"
                placeholder="minuts for timer"
                value={inputsTime.minuts}
                onChange={(e) => MinutsHandler(e)}
            />

            <input
                type="text"
                className="time-revers"
                value={inputsTime.seconds}
                placeholder="seconds for timer"
                onChange={(e) => secondsHandler(e)}
            />
            {date}
            <Time ms={date} />
        </div>
    )
}

export default ReversTimer