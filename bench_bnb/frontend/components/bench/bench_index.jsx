import { BenchIndexItem } from "./bench_index_item";
import React from "react";

class BenchIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBenches();
    }

    render() {
        return (
            <ul>
                {this.props.benches.map((bench, idx) => (
                    <BenchIndexItem key={`${bench.description}${idx}`} bench={bench} />
                ))}
            </ul>
        )
    }
}

export default BenchIndex;