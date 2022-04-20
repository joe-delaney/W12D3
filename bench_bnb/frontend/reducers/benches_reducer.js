import { RECEIVE_BENCHES, RECEIVE_BENCH, SHOW_BENCH } from "../actions/bench_actions";

const benchesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch (action.type) {
        case RECEIVE_BENCHES:
            return action.benches;
        case RECEIVE_BENCH:
            nextState = Object.assign({}, state);
            nextState[action.bench.id] = action.bench;
            return nextState;
        default:
            return state;
    }
};

export default benchesReducer;