import React, { useState } from 'react';
export default function Counter({ num_visited }){
    const [count, setCount] = useState(num_visited);

    return(
        <div>
            <p>{count}</p>
            <button onClick={()=> setCount(count + 1)} title="+" className='p-1'/> 
        </div>
    )

}
