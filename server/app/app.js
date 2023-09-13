const express = require("express")
const compression = require('compression')
const bodyParser = require("body-parser");
const morgan = require('morgan')
const cors = require('cors')

const app = express()

// apply middlewares
// decrease the size of the response body and hence increase the speed of a web app
app.use(compression())

// Enable All CORS Requests
// const options = {
//     origin: process.env.ORIGIN_URL,
//     credentials: true,
//     methods: ['GET', 'HEAD', 'POST', 'PATCH', 'DELETE']
// }
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(morgan('tiny'))

module.exports = app