import * as APIBenchUtil from "../util/bench_api_util";

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

const receiveBenches  = (benches) => ({
    type: RECEIVE_BENCHES,
    benches
})

export const fetchBenches = (bounds) => dispatch => APIBenchUtil.fetchBenches(bounds)
    .then(benches => dispatch(receiveBenches(benches)));