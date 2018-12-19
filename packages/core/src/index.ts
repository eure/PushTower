import * as apn from "apn";

export async function send(
  deviceToken: string,
  payload: string,
  p8FilePath: string,
  keyID: string,
  teamID: string,
  topic: string,
  isProduction: boolean
) {
  const options = {
    token: {
      key: p8FilePath,
      keyId: keyID,
      teamId: teamID
    },
    // proxy: {
    //   host: "192.168.10.92",
    //   port: 8080
    // }
    production: isProduction
  };

  console.log("Send", deviceToken, "options", options);

  const apnProvider = new apn.Provider(options);

  const notification = new apn.Notification();

  notification.rawPayload = payload;
  notification.topic = topic;

  await apnProvider.send(notification, deviceToken);
}
