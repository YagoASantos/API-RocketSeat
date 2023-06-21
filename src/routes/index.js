const userRoutes = require('./userRoutes');
const adressRoutes = require('./adressRoutes');

module.exports = app => {
    app.use(
        userRoutes,
        adressRoutes
    )
};