import { UPDATE_BOUNDS } from "../actions/filter_actions";

const initial_state = {
    bounds: {}
}

const filterReducer = (state = initial_state, action) => {
    Object.freeze(state);

    switch(action.type) {
        case UPDATE_BOUNDS:
            return {bounds: action.bounds};
        default:
            return state;
    }
}

export default filterReducer;