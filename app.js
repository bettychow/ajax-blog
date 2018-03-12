const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.disable('x-powered-by')

if(process.env.NODE_ENV === 'development' ) {
  app.use(morgan('dev'))
}

app.use(bodyParser.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))


const postsRoutes = require('./server/src/routes/posts')
app.use('/posts', postsRoutes)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error : { status, message: 'Someting went wrong'}})
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found'}})
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})

module.exports = app