import {useState} from 'react';
import "./restCard.css";

function RestCard(props) {
    return(
        <div className="restaurant_card">
            <p>{props.title}</p>
            <div>
                <p>{props.numVisited}</p>
                {/* <button onClick={()=> addVisit()} title="+"/> */}
            </div>
        </div>
    )
}

export default RestCard;