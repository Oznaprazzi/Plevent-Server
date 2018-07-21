var bcrypt = require('bcryptjs');

/**
 * Returns a one-way hash of the given password string
 * 
 * @param {*} password 
 */
exports.encrypt = (password) => {
    var salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
};

/**
 * Compares the user password and the stored password. Returns true
 * if the password matches the hash encryption of the stored password
 * 
 * @param {*} password 
 * @param {*} stored 
 */
exports.authenticate = (password, stored) => {
    return bcrypt.compareSync(password, stored);
}