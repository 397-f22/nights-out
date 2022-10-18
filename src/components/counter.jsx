import "./counter.css";
import React, { useState } from 'react';
import { useDbUpdate } from '../utilities/firebase'


export default function Counter({ name, num_visited, dates_visited }){
    const [count, setCount] = useState(num_visited);
    const [update, result] = useDbUpdate(`/${name}`);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    
    const submit = (evt) => {
        evt.preventDefault();
        update({numVisited: count + 1, datesVisited: [...dates_visited, today]});
        setCount(count + 1);
    };

    return(
        <div className="counter">
            <button className="countUp btn" onClick={submit} title="+"> 
              ▲
            </button>
            <p>{count}</p>
        </div>
    )

}
