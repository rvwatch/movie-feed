import { combineReducers } from "redux";
import showReducer from "./showReducer";


const rootReducer = combineReducers({
    shows: showReducer
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;