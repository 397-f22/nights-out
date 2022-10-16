import "./counter.css";
import React, { useState } from 'react';

export default function Counter({ num_visited }){
    const [count, setCount] = useState(num_visited);

    return(
        <div className="counter">
            <button className="countUp btn" onClick={()=> setCount(count + 1)} title="+"> 
              ▲
            </button>
            <p>{count}</p>
        </div>
    )

}
