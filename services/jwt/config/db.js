const mongoose = require('mongoose');

// Replace this with your MONGOURI.
const MONGOURI = 'mongodb://kiriti:12qwaszx@ds149855.mlab.com:49855/node-jwt';

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to DB !!');
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;
