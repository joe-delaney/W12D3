export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};

        this.updateMarkers = this.updateMarkers.bind(this);
        this.createMarkerFromBench = this.createMarkerFromBench.bind(this);
    }

    updateMarkers(benches) {
        benches.forEach((bench) => {
            this.createMarkerFromBench(bench);
        })
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
}