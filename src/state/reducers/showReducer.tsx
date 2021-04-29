import { ActionType } from "../action-types";
import { Action } from "../actions";

interface ShowState {
    loading: boolean,
    error: string | null,
    data: {
        results: string[]
    }
}

const initialState = {
    loading: false,
    error: null,
    data: {
        results: ['']
    }
}

const showReducer = (state: ShowState = initialState, action: Action): ShowState => {
    switch (action.type) {
        case ActionType.ADD_SHOWS:
            return { loading: true, error: null, data: { results: [] } };
        case ActionType.ADD_SHOWS_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionType.ADD_SHOWS_ERROR:
            return { loading: false, error: action.payload, data: { results: [] } }
        default:
            return state;
    }
}

export default showReducer;