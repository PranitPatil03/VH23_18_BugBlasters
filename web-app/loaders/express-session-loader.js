
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const config = require("./config");
const mongoose = require("../database/mongoose");

const mongoStore = connectMongo(expressSession);

let expessSessionConfig = {
    name: 'session_id', 
    secret: config.expressSessionSecret,
    resave: false,
    httpOnly: false,
    saveUninitialized: false,
    cookie : {
        maxAge:  86400000
    },
    store: new mongoStore({
        mongooseConnection: mongoose.connection,
        collection: "session"
    })
};

let sessionMiddleware = expressSession(expessSessionConfig);


module.exports =  sessionMiddleware;