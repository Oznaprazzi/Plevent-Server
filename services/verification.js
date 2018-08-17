/**
 * Checks all keys inside the data and returns false if one of the fields is missing.
 * 
 * @param {*} data 
 */
exports.verify = (data) => {
    for(let param of Object.keys(data)){
        if(!data[param]){
            return false;
        }
    }
    return true;
}