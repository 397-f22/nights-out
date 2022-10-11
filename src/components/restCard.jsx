import {useState} from 'react';
import Counter from "./counter"
import "./restCard.css";

function RestCard(props) {
    return(
        <div className="restaurant_card">
            <p>{props.title}</p>
            <Counter num_visited={props.numVisited}/>
        </div>
    )
}

export default RestCard;