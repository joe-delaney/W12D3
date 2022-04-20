import { UPDATE_BOUNDS } from "../actions/filter_actions";

const initial_state = {
    bounds: {}
}

const filterReducer = (state = initial_state, action) => {
    Object.freeze(state);

    switch(action.type) {
        case UPDATE_BOUNDS:
            let nextState = Object.assign({}, state);
            nextState.bounds = action.bounds
            return nextState;
        default:
            return state;
    }
}

export default filterReducer;