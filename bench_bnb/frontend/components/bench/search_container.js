import { connect } from "react-redux";
import { fetchBenches } from "../../actions/bench_actions";
import { updateFilter } from "../../actions/filter_actions";
import Search from "./search";

const mapStateToProps = state => ({
    benches: Object.values(state.entities.benches),
    minSeating: state.filters.minSeating,
    maxSeating: state.filters.maxSeating
})

const mapDispatchToProps = dispatch => ({
    fetchBenches: (bounds) => dispatch(fetchBenches(bounds)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);