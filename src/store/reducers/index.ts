import { combineReducers } from "redux";
import { timerStatusReducer } from "./timerStatusReducer/timerStatusReducer";


export const rootReducer = combineReducers({
    timer: timerStatusReducer,
})

export type RootState = ReturnType<typeof rootReducer>