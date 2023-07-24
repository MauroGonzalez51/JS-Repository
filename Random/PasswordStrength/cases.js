/**
 *
 * @param { String } string
 * @returns Boolean
 *
 * All of these methods will return true if the case is fullfilled,
 * otherwise false
 */

const containsUppercase = (string) => {
    const regex = new RegExp(/[A-Z]/);
    return regex.test(string);
};

const containsLowercase = (string) => {
    const regex = new RegExp(/[a-z]/);
    return regex.test(string);
};

const verifyLength = (string, minLength) => {
    return string.length >= minLength;
};

const containsSymbols = (string) => {
    const regex = new RegExp(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/);
    return regex.test(string);
};

const containsNumbers = (string) => {
    const regex = new RegExp(/\d/);
    return regex.test(string);
};

export {
    containsUppercase,
    containsLowercase,
    verifyLength,
    containsSymbols,
    containsNumbers,
};
