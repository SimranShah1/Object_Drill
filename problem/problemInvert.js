function invert(obj){
    //let result = {};
    for(let key in obj){
        //result[obj[key]] = key;
        let temp = key;
        key = obj[key];
        obj[key]=temp;
        delete obj[temp];

    }
    console.log(obj);
}

module.exports = invert;