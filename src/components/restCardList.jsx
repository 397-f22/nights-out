import RestCard from "./restCard";
function RestCardList(props){
    const { data } = props;
    let restCardList = Object.entries(data).map(([id, data]) => {
        console.log(id, data);
        <RestCard title={id} numVisited={data.numVisited} datesVisited={data.datesVisited} />        
    })    

    console.log(restCardList)


    return(
        <div>
            {restCardList}
        </div>
    )
}

export default RestCardList;