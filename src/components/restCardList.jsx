import { useState } from 'react';
import RestCard from "./restCard";
import AddPlace from "./addPlace";
import FilterForm from './FilterForm';

function RestCardList({data}) {
    const [range, setRange] = useState("All");
    const [open, setOpen] = useState(false);
	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

    return(
        <div>
            <button type="button" id="addButton" className="btn btn-outline-danger" onClick={openModal}>
                Filter
            </button>
            <AddPlace open={open} close={closeModal}>
				<FilterForm range={range} setRange={setRange} />
			</AddPlace>
            {Object.entries(data).map(([id, data]) => 
                <RestCard title={id} numVisited={data.numVisited} datesVisited={data.datesVisited} />        
            )}
        </div>
    )
}

export default RestCardList;