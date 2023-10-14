function map(obj, cb){
    cb(obj);
    // for(var key in obj){
        
    // }
}

function cb(obj){
    for(var key in obj){
        console.log(key+" simran "+obj[key]);
    }
    
}

module.exports = {map, cb};