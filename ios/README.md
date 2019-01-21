# PushTowerClient

## Installation	

 PushTowerClient is available through [CocoaPods](https://cocoapods.org). To install	
it, add the following line to your Podfile:	

 ```ruby	
pod 'PushTowerClient',
        :podspec => 'https://raw.githubusercontent.com/muukii/PushTower/ios/PushTowerClient.podspec',
        configuration: ['debugger-staging', 'debugger-production'] # <= exapmle of installing only for debug builds
```

## Usage

In your Xcode project's scheme settings, set environment variable `PUSHTOWER_PUT_TOKEN_URL`.

Value should be `http://pushTowerServerHost:port/device_token`.

No need to modify code in your project. device token will be sent to this URL and will be stored in a key-value store using iOS device's name as the key.

This function is enabled only if the `DEBUG` flag is set.

## Author

kenjitayama, kenji.tayama@gmail.com

## License

PushTowerClient is available under the MIT license. See the LICENSE file for more info.
