import { connect } from "react-redux";
import { fetchBenches } from "../../actions/bench_actions";
import { updateBounds } from "../../actions/filter_actions";
import Search from "./search";

const mapStateToProps = state => ({
    benches: Object.values(state.entities.benches)
})

const mapDispatchToProps = dispatch => ({
    fetchBenches: (bounds) => dispatch(fetchBenches(bounds)),
    updateBounds: (bounds) => dispatch(updateBounds(bounds))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);