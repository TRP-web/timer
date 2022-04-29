import { timerStatus } from "../../../types/types"


export interface timerState {
    statusTimer: timerStatus
}

export interface timerAction {
    type: string
    newStatus: timerStatus
}

export enum TimerStatusActionType {
    CHENGE_STATUS = "CHENGE_STATUS",
}

// я понятия не имею зачем то что с низу 0_о

interface ChengeTimerStatus {
    type: TimerStatusActionType.CHENGE_STATUS
}

export type TimerActionType = TimerStatusActionType.CHENGE_STATUS