export function filterByDateRange(data, range){    
    let beforeDay = new Date();
    if(range === "pastOneMonth"){
        beforeDay.setMonth(beforeDay.getMonth() - 1);
    } else if (range === "pastThreeMonth"){
        beforeDay.setMonth(beforeDay.getMonth() - 3);
    } else if (range === "pastSixMonth"){
        beforeDay.setMonth(beforeDay.getMonth() - 6);
    } else {
        beforeDay.setFullYear(2000);
    }

    const filteredArr =  Object.entries(data).filter(function ([key, value]) {
        if (key=='test') { return false;}
        let lastDay = new Date(value.datesVisited[value.datesVisited.length - 1]);
        return lastDay >= beforeDay;                        
    });    

    //console.log(filteredArr);
    
    let filteredObj = {}
    filteredArr.map(x => {
        filteredObj[x[0]] = x[1];
        filteredObj[x[0]]['filteredNum'] = getNumInDateRange(x[1].datesVisited, beforeDay);
    });    

    //console.log(filteredObj);

    return filteredObj;    
}

export function getNumInDateRange(dates, beforeDay){
    //console.log(dates);
    return dates.filter( value => {
        let lastDay = new Date(value);
        return lastDay >= beforeDay;  
    }).length
}

export default filterByDateRange;
