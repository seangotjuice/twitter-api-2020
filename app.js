const express = require('express')
const helpers = require('./_helpers')
const bodyParser = require('body-parser')
const session = require('express-session')

const app = express()

if (process.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const port = 3000

// bodyparser設定
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// use helpers.getUser(req) to replace req.user
function authenticated (req, res, next) {
  // passport.authenticate('jwt', { ses...
}

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app
