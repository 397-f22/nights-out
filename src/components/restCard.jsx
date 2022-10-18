import {useState} from 'react';
import Counter from "./counter"
import "./restCard.css";

function RestCard(props) {
    return(
        <div className="restaurant_card">
            <p>{props.title}</p>
            <Counter name={props.title} num_visited={props.numVisited} dates_visited={props.datesVisited}/>
        </div>
    )
}

export default RestCard;