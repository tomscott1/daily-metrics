// imports
import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes/routes'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cors from 'cors'

// init
const app = express()
const dbConnection = process.env.MONGO_DB  // TODO: pull from environment

// connect to mongo
mongoose.Promise = global.Promise
if (process.env.NODE_ENV !== 'test') {  // use seperate testing database for testing
    mongoose.connect(dbConnection)
}

// run app and routes through middleware
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json()) // must be in this order
routes(app)


// handle errors in requests
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message })
})

// exports
module.exports = app
