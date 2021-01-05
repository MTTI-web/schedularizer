if (process.env.NODE_ENV === 'production') {
    module.exports = require('./devKeys');
} else if (process.env.NODE_ENV === 'development') {
    module.exports = require('./prodKeys');
}
