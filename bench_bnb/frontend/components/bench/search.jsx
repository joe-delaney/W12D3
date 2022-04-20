import React from "react";
import BenchMap from "./bench_map";
import BenchIndex from "./bench_index"
import FilterForm from "./filter_form";

const Search = ({benches, minSeating, maxSeating, fetchBenches, updateFilter}) => (
        <div>
            <BenchMap benches={benches} updateFilter={updateFilter}/>
            <BenchIndex benches={benches} fetchBenches={fetchBenches} />
        <FilterForm maxSeating={maxSeating} minSeating={minSeating} updateFilter={updateFilter} />
        </div>
)

export default Search;