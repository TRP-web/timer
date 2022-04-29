import { timerState, timerAction, TimerStatusActionType } from "./timerStatusReducerTypes"

const initialState: timerState = {
    statusTimer: "stop"
}

export const timerStatusReducer = (state = initialState, action: timerAction): timerState => {
    switch (action.type) {
        case TimerStatusActionType.CHENGE_STATUS:
            return {
                statusTimer: action.newStatus
            }
        default: return state
    }
}