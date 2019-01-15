
const User = require('./Model/User')
const express = require('express')
const mongoose = require('mongoose')
const GraphQL = require('express-graphql');
const schema = require('./schema.js')

var app = express()
app.use(express.json())

// Server Port
var port = process.env.PORT | 5000;

//Connecting to Mongoose to MongoDB
mongoose
    .connect('mongodb://localhost:27017/test')
    .then(() => console.log("Connected to Test Database..."))
    .catch(err => console.log(`Error : ${err} `))


//Connecting to GraphQL Schmea
app.use('/graphql' , GraphQL({
    schema: schema,
    graphiql : true
}))

app.listen( port , ()=> console.log(`Server Listening on ${port}...`))