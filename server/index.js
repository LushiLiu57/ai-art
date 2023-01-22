import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'

import connectDB from './mongodb/connect.js'
import postRoute from './route/postRoute.js'
import serverRoute from './route/serverRoute.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({limit:'50mb'}))
app.use('/api/v1/post', postRoute)
app.use('/api/v1/server', serverRoute)

app.get('/', async (req,res) => {
    res.send('Hello World')
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(3200, () => console.log('Server running on port 3200'))
    }
    catch (err) {
        console.log(err)
    }
}

startServer()