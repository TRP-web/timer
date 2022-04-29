import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dispatch } from "redux";
import { timerAction, TimerStatusActionType } from "../../store/reducers/timerStatusReducer/timerStatusReducerTypes";
import { timerStatus } from "../../types/types";

interface HeaderProp {
}

const Header: FC<HeaderProp> = ({ }) => {
    const dispatch: Dispatch<timerAction> = useDispatch()


    const setTimerStatusF = (status: timerStatus): void => {
        dispatch({ type: TimerStatusActionType.CHENGE_STATUS, newStatus: status })
    }
    return (
        <header className="header">
            <nav className="header__menu">
                <ul className="header__list">
                    <li className="header__elem">
                        <NavLink to={"/"}>
                            Main Timer
                        </NavLink>
                    </li>
                    <li className="header__elem">
                        <NavLink to={"/revers-timer"}>
                            Revers Timer
                        </NavLink>
                    </li>
                </ul>

            </nav>
            <div className="container">

                <div className="header__inner">
                    <button
                        className="start"
                        value={"start"} onClick={() => setTimerStatusF("start")}>
                        <img src={window.location.origin + "/img/start.svg"} alt="" />
                    </button>
                    <button
                        className="stop" onClick={() => setTimerStatusF("stop")} value={"stop"}>
                        <img src={window.location.origin + "/img/stop.svg"} alt="" />

                    </button>
                    <button
                        className="sub" onClick={() => setTimerStatusF("sub")} value={"sub"}>
                        <img src={window.location.origin + "/img/sub.svg"} alt="" />

                    </button>
                </div>
            </div>

        </header>
    )
}

export default Header