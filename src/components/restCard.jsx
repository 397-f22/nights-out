import {useState} from 'react';
import Counter from "./counter"
import "./restCard.css";

function RestCard({title, filteredData, setFilteredData}) {
    return(
        <div className="restaurant_card">
            <p>{title}</p>
            <Counter name={title} filteredData={filteredData} setFilteredData={setFilteredData}/>
        </div>
    )
}

export default RestCard;