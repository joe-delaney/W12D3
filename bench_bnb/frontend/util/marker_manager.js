export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};

        this.updateMarkers = this.updateMarkers.bind(this);
        this.createMarkerFromBench = this.createMarkerFromBench.bind(this);
    }

    updateMarkers(benches) {
        const benchesObject = {}
        benches.forEach((bench) => {
            this.createMarkerFromBench(bench);
            benchesObject[bench.id] = bench;
        })

        for(let benchId in this.markers) {
            if(!benchesObject[benchId]) {
                this.removeMarker(this.markers[benchId], benchId);
            }
        }
    }

    createMarkerFromBench(bench) {
        //If there is no marker for this bench, add it to map and markers
        if(!this.markers[bench.id]) {
            let marker = new google.maps.Marker({
                position: {lat: bench.lat, lng: bench.lng},
                map: this.map,
                title: bench.description,
            });
            this.markers[bench.id] = marker;
        }   
    }

    removeMarker(marker, benchId) {
        marker.setMap(null);
        delete this.markers[benchId];
    }
}