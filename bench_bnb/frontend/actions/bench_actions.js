import * as APIBenchUtil from "../util/bench_api_util";

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";

const receiveBenches  = (benches) => ({
    type: RECEIVE_BENCHES,
    benches
})

const receiveBench = (bench) => ({
    type: RECEIVE_BENCH,
    bench
})


export const fetchBenches = (bounds) => dispatch => APIBenchUtil.fetchBenches(bounds)
    .then(benches => dispatch(receiveBenches(benches)));

export const createBench = (bench) => dispatch => APIBenchUtil.createBench(bench)
    .then(bench => dispatch(receiveBench(bench)));