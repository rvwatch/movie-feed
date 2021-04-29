import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const getShows = (url: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_SHOWS
        })

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.results.length) {
                dispatch({
                    type: ActionType.ADD_SHOWS_SUCCESS,
                    payload: data
                })
            }
        } catch (err) {
            dispatch({
                type: ActionType.ADD_SHOWS_ERROR,
                payload: err.message
            })
        }
    }
}