function pair(obj){
    let arr=[];
    for(let key in obj){
        arr.push([key, obj[key]]);
    }
    return arr;
}

module.exports = pair;