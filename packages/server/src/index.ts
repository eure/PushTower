import Express from 'express'
import * as bodyParser from 'body-parser'
import * as log from 'signale'
import * as Core from '@pushservicejs/core'
import * as TokenStore from '@pushservicejs/tokenstore'

const port = 9000

console.log('⚾️', Core, require('@pushservicejs/core'))

const app = Express()

TokenStore.setup()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(TokenStore.lookupToken)


const __p8FilePath = process.env.__P8_FILE_PATH
const __keyID = process.env.__KEY_ID
const __teamID = process.env.__TEAM_ID
const __isProduction = process.env.__IS_PRODUCTION === 'true'

function launch() {
  if (!__p8FilePath) {
    log.error('__P8_FILE_PATH is required')
    process.exit(1)
    return
  }
  if (!__keyID) {
    log.error('__KEY_ID is required')
    process.exit(1)
    return
  }
  if (!__teamID) {
    log.error('__TEAM_ID is required')
    process.exit(1)
    return
  }

  // respond with "hello world" when a GET request is made to the homepage
  app.get('/', function(req, res) {
    res.send('hello world')
  })

  app.put('/device_token', TokenStore.putToken)
  
  app.post('/send', async (req, res) => {
    log.debug(req.body)

    if (!req.header) {
      return
    }

    const payload = req.body
    const deviceToken = req.header('x-target-device-token')
    const topic = req.header('x-topic')

    if (!deviceToken) {
      return
    }
    if (!topic) {
      return
    }

    let descriptor = {
      p8FilePath: __p8FilePath,
      keyID: __keyID,
      teamID: __teamID,
      deviceToken: deviceToken,
      isProduction: __isProduction,
      payload: payload,
      topic: topic,
    }

    const result = await Core.send(descriptor)
    res.send({ result: result })
  })

  app.listen(port, '0.0.0.0', () =>
    console.log(`Example app listening on port ${port}!`),
  )
}

launch()
