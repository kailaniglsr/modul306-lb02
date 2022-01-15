// Validate form input elements
const validateLib = require('./ValidationLib');

/**
 * Validate form data
 * @param data
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */
function validateFormData(data) {
    // Check required fields
    let result = validateLib.checkRequired("username", data.username);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("firstName", data.firstName);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("lastName", data.lastName);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("phonenumber", data.phonenumber);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("password", data.password);
    if (result.isNotValid) { return result; }


    //check length
    result = validateLib.checkLength("username", data.username, 8, 25);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("firstName", data.firstName, 3, 25);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("lastName", data.lastName, 3, 25);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("phonenumber", data.phonenumber, 10, 12);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("password", data.password, 8, 25);
    if (result.isNotValid) { return result; }


    //check email syntax
    result = validateLib.checkUsername("username", data.username);
    if (result.isNotValid) { return result; }

    result = validateLib.checkEmail("email", data.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkPhonenumber("phonenumber", data.phonenumber);
    if (result.isNotValid) { return result; }

    result = validateLib.checkPassword("password", data.password);
    if (result.isNotValid) { return result; }
    //all inputs are valid and isNotValid=false
    return false;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT beackets!
 */
module.exports = {
    validateContact: validateFormData
};
