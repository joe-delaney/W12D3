import { fetchBenches } from "./bench_actions";

export const UPDATE_FILTER = "UPDATE_FILTER";

const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter, 
    value
})

export function updateFilter(filter, value) {
    return (dispatch, getState) => {
        dispatch(changeFilter(filter, value));
        return fetchBenches(getState().filters)(dispatch);
    };
}