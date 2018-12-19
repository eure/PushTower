
import * as Express from 'express'

import * as Core from '@pushservicejs/core'

const app = Express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.post('/', (req, res) => {
  res.send('Hoge')
})

const port = 8000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
