/*
 * @file: index.js
 * @description: It Contain environment variables.
 * @author: Jasdeep Singh
 */

const local = {
    apiUrl: ""
};

const production = {
    apiUrl: ""
};



if (process.env.NODE_ENV === 'production') {
    module.exports = production;
} else {
    module.exports = local;
}
