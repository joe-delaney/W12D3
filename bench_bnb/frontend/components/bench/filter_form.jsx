import React from "react";

export default class FilterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minSeating: this.props.minSeating,
            maxSeating: this.props.maxSeating
        }
    }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
            this.props.updateFilter(type, e.target.value)
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateFilter("minSeating", this.state.min);
        this.props.updateFilter("maxSeating", this.state.max);
    }

    render() {
        return <form >
            <label> Minimum Seating:
            <input type="number" min="1" max="99" value={this.state.minSeating} onChange={this.handleInput("minSeating")}/>
                </label>
            <label> Maximum Seating:
                <input type="number" min="1" max="99" value={this.state.maxSeating} onChange={this.handleInput("maxSeating")} />
            </label>
        </form>
    }
}