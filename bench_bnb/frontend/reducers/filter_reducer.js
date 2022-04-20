import { UPDATE_BOUNDS, UPDATE_FILTER } from "../actions/filter_actions";

const initial_state = {
    bounds: {},
    minSeating: 1,
    maxSeating: 10
}

const filterReducer = (state = initial_state, action) => {
    Object.freeze(state);

    switch(action.type) {
        case UPDATE_BOUNDS:
            return {bounds: action.bounds};
        case UPDATE_FILTER:
            let nextState = Object.assign({}, state);
            nextState[[action.filter]] = action.value;
            return nextState;
        default:
            return state;
    }
}

export default filterReducer;