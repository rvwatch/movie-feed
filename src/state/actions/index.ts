import { ActionType } from "../action-types";

interface GetShowsAction {
    type: ActionType.ADD_SHOWS
}

interface AddShowsAction {
    type: ActionType.ADD_SHOWS_SUCCESS,
    payload: any
}

interface ShowError {
    type: ActionType.ADD_SHOWS_ERROR
    payload: string
}

export type Action = GetShowsAction | AddShowsAction | ShowError;
