import React from "react";
import MarkerManager from "../../util/marker_manager";
import { withRouter } from "react-router-dom";

class BenchMap extends React.Component {
    constructor(props) {
        super(props);

        this.getBounds = this.getBounds.bind(this);
        this.handleClick = this.handleClick.bind(this);
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

        this.map.addListener('idle', this.getBounds)
        this.map.addListener('click', this.handleClick)
    }

    componentDidUpdate() {
        this.markerManager.updateMarkers(this.props.benches);
    }

    getBounds() {
        let bounds = this.map.getBounds();
        let northEast = bounds.getNorthEast();
        let southWest = bounds.getSouthWest();
        let updatedBounds = {
            "northEast": {"lat": northEast.lat().toString(), "lng": northEast.lng().toString()}, 
            "southWest": {"lat": southWest.lat().toString(), "lng": southWest.lng().toString()}
        }

        this.props.updateFilter("bounds", updatedBounds);
    }

    handleClick(e) {
        this.props.history.push({
            pathname: "benches/new",
            search: `lat=${e.latLng.lat()}&lng=${e.latLng.lng()}`
        });
    }

    render() {
        return (
            <div id="map-container" ref={map => this.mapNode = map}></div>
        )
    }
}

export default withRouter(BenchMap);