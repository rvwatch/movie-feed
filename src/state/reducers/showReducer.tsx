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
    console.log('====================================');
    console.log('in the reducer', action);
    console.log('====================================');
    switch (action.type) {
        case ActionType.ADD_SHOWS:
            console.log('====================================');
            console.log('adding shows');
            console.log('====================================');
            return { loading: true, error: null, data: { results: [] } };
        case ActionType.ADD_SHOWS_SUCCESS:
            console.log('====================================');
            console.log('success', action.payload.results);
            console.log('====================================');
            console.log('====================================');
            console.log('state', state);
            console.log('====================================');
            return { loading: false, error: null, data: action.payload.results };
        case ActionType.ADD_SHOWS_ERROR:
            return { loading: false, error: action.payload, data: { results: [] } }
        default:
            return state;
    }
}

export default showReducer;