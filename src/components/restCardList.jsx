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
    //console.log(filteredData)
    //const [filteredData, setFiltered] = useState(data);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const updateFilter = (e) => {
        setRange(e.target.value);
        //console.log(range);
        setFiltered(filterByDateRange(data, e.target.value));
    };

    if (filteredData) {
        let sortedData = Object.entries(filteredData);
        sortedData.sort(customSort);
        //console.log(sortedData);
        return (
            <div>
                <div id="filterWrapper">
                    <button type="button" id="filterButton" className="btn btn-outline-danger" onClick={openModal}>
                        Filter
                    </button>
                </div>
                <AddPlace open={open} close={closeModal}>
                    <FilterForm updateFilter={updateFilter} />
                </AddPlace>

                {
                    sortedData.map(([id, data], index) => {
                        //let filteredVisits = getNumInDateRange(data.datesVisited, range);
                        return <RestCard title={id} filteredData={filteredData} setFilteredData={setFiltered} first={index == 0} />
                    }
                    )}
            </div>
        )
    }
}

function customSort(a, b) {
    if (a[1].filteredNum < b[1].filteredNum) {
        return -1
    }
    return 1
}

export default RestCardList;