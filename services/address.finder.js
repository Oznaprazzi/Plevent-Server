var urlencode = require('urlencode');
var axios = require('axios').default;

const api = 'https://api.addressfinder.io/api/nz/address'; // api address

const key = 'KEGTV7M4RLPAYHN8UCDX'; // api key
const secret = '3UMNKE6H7FDT89AG4JVY'; // api secret key
const format = 'json'; // output format
const strict = 2; // result closeness to the query parameter

/**
 * Returns all addresses which could match the given query.
 * 
 * @param {*} query partial string  being searched
 */
exports.autocomplete = async (query) => {
    var encodedQuery = urlencode(query);
    const url = `${api}?key=${key}&secret=${secret}&q=${encodedQuery}&format=${format}&strict=${strict}`;
    var results = await axios.get(url).catch(err => console.log(err));
    return results;
}

/**
 * Returns a json containing the metadata of the given pxid. This metadata contains information
 * such as the latitude and longitude coordinates of the given pxid.
 * 
 * @param {*} pxid unique address id obtained from the Address Autocomplete or Bounding Box APIs 
 */
exports.metadata = (pxid) => {

}