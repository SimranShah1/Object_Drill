function defaults(obj, defaultProps){
    for(let key in defaultProps){
       if(!key in obj){
         obj.push(key, defaultProps.key);
       }
       else{
        if(!obj[key]){
          obj[key]=defaultProps[key];
        }
       }
    }
    return obj;

}
module.exports = defaults;