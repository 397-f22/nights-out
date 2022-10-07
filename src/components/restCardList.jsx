import RestCard from "./restCard";
function RestCardList({data}) {
    console.log(data)
    return(
        <div>   
            {Object.entries(data).map(([id, data]) => 
                <RestCard title={id} numVisited={data.numVisited} datesVisited={data.datesVisited} />        
            )}
        </div>
    )
}

export default RestCardList;