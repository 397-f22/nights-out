import React, { useState } from 'react';
export default function Counter(){
    const [count, setCount] = useState(1);

    return(
        <div>
            <p>{count}</p>
            <button onClick={()=> setCount(count + 1)} title="+" className='p-1'/> 
        </div>
    )

}
