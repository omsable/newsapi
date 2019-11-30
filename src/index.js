const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { topHeadlinesActionHandler } = require('./actions')
app.use(bodyParser.json())

const { PORT = 8080 } = process.env

app.get('/top-headlines', (req, res) => {
  const { sources } = req.body
  topHeadlinesActionHandler({ sources })
    .then(articles => {
      res.json(articles)
    })
    .catch(er => {
      // @TODO: Log
      res.status(500).json({ error: er })
    })
})

app.get('/health', (req, res) => res.send('OK'))

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
