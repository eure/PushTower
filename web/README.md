# PushTower web

## Development

* Core(Library)
    * Server(Application)
    * Desktop(Application)

```
lerna bootstrap
```

## Usage

### Basic

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
}'
```

In addition to `export __IS_PRODUCTION=true` you can set production mode by the following HTTP header

```
  -H 'x-is-production: 1' \
```

### Using device_token key-value store and lookup

#### Storing device token

```
curl -X PUT \
  http://localhost:9000/device_token \
  -H 'Content-Type: application/json' \
  -H 'x-topic: <#TARGET APP BUNDLE ID#>' \
  -d '{
  "key" : "John Appleseed's iPhone",
  "device_token" : <#TARGET DEVICE TOKEN#>
}'
```

This can be sent from an iOS app, if you install the [iOS library](../ios)


#### Sending push notification

```
curl -X POST \
  http://localhost:9000/send \
  -H 'Content-Type: application/json' \
  -H 'X-target-device-token-lookup-key: John Appleseed's iPhone' \
  -H 'x-topic: <#TARGET APP BUNDLE ID#>' \
  -d '{
  "aps" : {
    "badge" : 0,
    "alert" : "Hello"
  }
}'
```
