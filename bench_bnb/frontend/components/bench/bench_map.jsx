import React from "react";
import MarkerManager from "../../util/marker_manager";

export default class BenchMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // set the map to show NYC
        const mapOptions = {
            center: { lat: 40.7831, lng: -73.9712 }, // this is Manhattan
            zoom: 13
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        this.markerManager = new MarkerManager(this.map);
        this.markerManager.updateMarkers(this.props.benches);
    }

    componentDidUpdate() {
        this.markerManager.updateMarkers(this.props.benches);
    }

    render() {
        return (
            <div id="map-container" ref={map => this.mapNode = map}></div>
        )
    }
}