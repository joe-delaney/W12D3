import { BenchIndexItem } from "./bench_index_item";
import React from "react";

class BenchIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBenches({ "northEast": { "lat": "37.80971", "lng": "-122.39208" },"southWest": { "lat": "37.74187", "lng": "-122.47791" }
         });
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