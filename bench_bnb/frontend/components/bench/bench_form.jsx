import React from "react";

export default class BenchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            seating: 0,
            lat: this.props.lat,
            lng: this.props.lng
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return e => this.setState({
            [type]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            description: '',
            seating: 0,
            lat: '',
            lng: ''
        })
        this.props.createBench(this.state);
        this.props.history.push("/");
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Description
                    <input type="text" value={this.state.description} onChange={this.handleInput('description')} />
                </label>
                <label> Number of Seats
                    <input type="number" value={this.state.seating} onChange={this.handleInput('seating')} />
                </label>
                <label> Latitude
                    <input type="text" value={this.state.lat} onChange={this.handleInput('lat')} />
                </label>
                <label> Longitude
                    <input type="text" value={this.state.lng} onChange={this.handleInput('lng')} />
                </label>
                <input type="submit" />
            </form>
        )
    }
}