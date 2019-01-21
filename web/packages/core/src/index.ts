import * as apn from 'apn'

console.log('Load core')

export type Descriptor = {
  deviceToken: string
  payload: string
  p8FilePath: string
  keyID: string
  teamID: string
  topic: string
  isProduction: boolean
}

export function hoge() {}

export async function send(descriptor: Descriptor) {
  const options = {
    token: {
      key: descriptor.p8FilePath,
      keyId: descriptor.keyID,
      teamId: descriptor.teamID,
    },
    // proxy: {
    //   host: "192.168.10.92",
    //   port: 8080
    // }
    production: descriptor.isProduction,
  }

  console.log('Send', descriptor.deviceToken, 'options', options)

  const apnProvider = new apn.Provider(options)

  const notification = new apn.Notification()

  notification.rawPayload = descriptor.payload
  notification.topic = descriptor.topic

  return await apnProvider.send(notification, descriptor.deviceToken)
}
