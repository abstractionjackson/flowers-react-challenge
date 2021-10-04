import express from 'express'
import cors from 'cors'

import routes from './routes/index.js'

const app = express()
app.use(cors())
app.use(express.static('./react-client/build'))

const PORT = 5000

app.use('/post', routes.post)

app.listen(PORT,()=>console.log(`Listening on ${PORT}!`))