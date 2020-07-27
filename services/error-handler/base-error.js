const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const winston = require('winston');

const logger = winston.createLogger({
    transports: [new winston.transports.Console(), new winston.transports.File({ filename: 'combined.log' })]
});

const app = express();
app.use(cors());

app.use(bodyParser.json({ limit: '5mb' }));

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
});

app.post('/api/error', function (req, res) {
    logError(req, res);
});

/**
 * A custom APIError
 * @param {String} message a message to store in error
 * @constructor
 */
function logError(req, res) {
    const message = req.body.message;
    const httpCode = req.body.httpCode;
    // log error to files
    logger.info(`${message} and code: ${httpCode}`);
    res.json(`Error logged:\n ${message} and code: ${httpCode}`);
}
