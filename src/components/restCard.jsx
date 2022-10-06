import {useState} from 'react';

function RestCard(props) {
    return(
        <div className="resturant_card">
            <h3>{props.title}</h3>
            <div>
                <p>{props.numVisited}</p>
                {/* <button onClick={()=> addVisit()} title="+"/> */}
            </div>
        </div>
    )
}

export default RestCard;