# PushServer

## Development

```
lerna bootstrap
```

## Usage

// TODO:

Before launching server, we need to set env-var.

```
export __P8_FILE_PATH=
export __KEY_ID=
export __TEAM_ID=
export __IS_PRODUCTION=true or false
```

And then, build server application and launch.

```
cd packages/server
yarn run dev
```
Finally, send a request.

```
curl -X POST \
  http://localhost:9000/send \
  -H 'Content-Type: application/json' \
  -H 'X-target-device-token: <#TARGET DEVICE TOKEN#>' \
  -H 'x-topic: <#TARGET APP BUNDLE ID#>' \
  -d '{
  "aps" : {
    "badge" : 0,
    "alert" : "Hello"
  }
}
```
