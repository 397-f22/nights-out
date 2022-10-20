import "./counter.css";
import React, { useState } from 'react';
import { useDbUpdate } from '../utilities/firebase'


export default function Counter({ name, filteredData, setFilteredData}){
    const [update, result] = useDbUpdate(`/${name}`);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    
    const submit = (evt) => {
        evt.preventDefault();
        //console.log({numVisited: filteredData[name].numVisited + 1, datesVisited: [...filteredData[name].datesVisited, today]});
        update({numVisited: filteredData[name].numVisited + 1, datesVisited: [...filteredData[name].datesVisited, today]});
        setFilteredData({
            ...filteredData,
            [name]: {
                ...filteredData[name],
                filteredNum: filteredData[name].filteredNum + 1,
                numVisited: filteredData[name].numVisited + 1
            }
        })
    };

    return(
        <div className="counter">
            <button className="countUp btn" onClick={submit} title="+"> 
              ▲
            </button>
            <p>{filteredData[name].filteredNum}</p>
        </div>
    )

}
