import RestCard from "./restCard";
function RestCardList(props){
    const { data } = props;
    let restCardList = Object.entries(data).map(([id, data]) => {
        <RestCard title={id} numVisited={data.numVisited} datesVisited={data.datesVisited} />        
    })    
    
    return(
        <div>
            {restCardList}
        </div>
    )
}

export default RestCardList;