import React from "react";

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
    }

    render() {
        return (
            <div id="map-container" ref={map => this.mapNode = map}></div>
        )
    }
}