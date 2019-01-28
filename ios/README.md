# PushTowerClient

## Installation	

 PushTowerClient is available through [CocoaPods](https://cocoapods.org). To install	
it, add the following lines to your Podfile:	

 ```ruby
$pushtower_client_configurations = ['debugger-staging', 'debugger-production']
 
# for installing
pod 'PushTowerClient',
        :podspec => 'https://raw.githubusercontent.com/muukii/PushTower/ios/PushTowerClient.podspec',
        configuration: $pushtower_client_configurations # <= exapmle of installing only for debug builds

# for providing PushTower's URL
post_install do |installer|
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      if $pushtower_client_configurations.include? config.name
        config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] ||= [
          '$(inherited)',
          'PUSHTOWER_PUT_TOKEN_URL=10.100.11.161:9000/device_token' # PushTower's URL. Do not include http:// or https://
          ] # add PUSHTOWER_PUT_TOKEN_URL_IS_HTTPS=1 to access with https
      end
    end
  end
end

```

## Usage

No need to modify code in your project. device token will be sent to this URL and will be stored in a key-value store using iOS device's name as the key.

## Author

kenjitayama, kenji.tayama@gmail.com

## License

PushTowerClient is available under the MIT license. See the LICENSE file for more info.
