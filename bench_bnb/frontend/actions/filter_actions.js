import { fetchBenches } from "./bench_actions";

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

const changeBounds = (bounds) => ({
    type: UPDATE_BOUNDS,
    bounds
})

export function updateBounds(bounds) {
    return (dispatch, getState) => {
        dispatch(changeBounds(bounds));
        return fetchBenches(getState().filters)(dispatch);
    };
}