import {useState} from 'react';
import Counter from "./counter"
import "./restCard.css";

function RestCard({title, filteredData, setFilteredData, first}) {
    return(
        <div className="restaurant_card" id={first? "recommendation": ''}>
            <div className='titleInfo'>
                <p id='Title'>{title}</p>
                {first? <p id='rec'>. . . tonight?</p> : null}
            </div>
            <Counter name={title} filteredData={filteredData} setFilteredData={setFilteredData}/>
        </div>
    )
}

export default RestCard;