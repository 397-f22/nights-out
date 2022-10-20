import { useState } from 'react';
import RestCard from "./restCard";
import AddPlace from "./addPlace";
import FilterForm from './FilterForm';
import { filterByDateRange, getNumInDateRange } from '../utilities/helper';
import { set } from 'firebase/database';

function RestCardList({ data }) {
    const [range, setRange] = useState("All");
    const [open, setOpen] = useState(false);
    const [filteredData, setFiltered] = useState(filterByDateRange(data, range));
    //const [filteredData, setFiltered] = useState(data);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const updateFilter = (e) => {
        setRange(e.target.value);
        console.log(range);
        setFiltered(filterByDateRange(data, e.target.value));
    };


    //console.log(data);
    //console.log(filteredData);

    if (filteredData) {
        return (
            <div>
                <button type="button" id="filterButton" className="btn btn-outline-danger" onClick={openModal}>
                    Filter
                </button>
                <AddPlace open={open} close={closeModal}>
                    <FilterForm updateFilter={updateFilter} />
                </AddPlace>
                {Object.entries(filteredData).map(([id, data]) => {
                    //let filteredVisits = getNumInDateRange(data.datesVisited, range);
                    return <RestCard title={id} filteredData={filteredData} setFilteredData={setFiltered}/>
                }
                )}
            </div>
        )
    }
}

export default RestCardList;