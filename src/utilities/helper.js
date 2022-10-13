function filterByDateRange(data, range){    
    let beforeDay = new Date();
    if(range === "pastOneMonth"){
        beforeDay.setMonth(beforeDay.getMonth() - 1);
    } else if (range === "pastThreeMonth"){
        beforeDay.setMonth(beforeDay.getMonth() - 3);
    } else if (range === "pastSixMonth"){
        beforeDay.setMonth(beforeDay.getMonth() - 6);
    } else {
        return data;
    }

    const filteredArr =  Object.entries(data).filter(function ([key, value]) {
        let lastDay = new Date(value.datesVisited[value.datesVisited.length - 1]);
        return lastDay >= beforeDay;                        
    });    
    
    let filteredObj = {}
    filteredArr.map(x => filteredObj[x[0]] = x[1]);    

    return filteredObj;    
}

export default filterByDateRange
