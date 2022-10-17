import { useState } from 'react';
import RestCard from "./restCard";
import AddPlace from "./addPlace";
import FilterForm from './FilterForm';
import filterByDateRange from '../utilities/helper';

function RestCardList({data}) {
    const [range, setRange] = useState("All");
    const [open, setOpen] = useState(false);
	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

    if(data){    
        let filteredData = filterByDateRange(data, range)            
        return(
            <div>
                <button type="button" id="filterButton" className="btn btn-outline-danger" onClick={openModal}>
                    Filter
                </button>
                <AddPlace open={open} close={closeModal}>
                    <FilterForm range={range} setRange={setRange} />
                </AddPlace>
                {Object.entries(filteredData).map(([id, data]) => 
                    <RestCard title={id} numVisited={data.numVisited} datesVisited={data.datesVisited} />        
                )}
            </div>
        )
    }
}

export default RestCardList;