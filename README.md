# Rimorin Chat App

![alt text](https://github.com/rimorin/rimorin_chat/blob/media/images/ChatScreen.png)

Features
- Chat Screen
- Sign in / out
- Registration
- Cross platform deployment to IOS & Android

Built using the follow technologies
- React Native .63
- Redux
- React Navigator

Still a work in progress

# Note

1. Npm install
2. Use pod install --no-repo-update
3. Update package.json , "react-native-vector-icons": "^7.0.0" and "react-native-modal-dropdown": "0.6.2", "react-native": "0.63.3",

4. Additional libaries

npm i react-native-dotenv and Add Plugin 'module:react-native-dotenv' to babel.rc for secret env

npm i @react-native-community/google-signin for Google sign-in

npm i react-native-fbsdk for FB sign-in

5. IOS react-native start -> run-ios
6. Android react-native start -> run-android

# Troubleshooting

1. Problem with building the app
Try react-native start --reset-cache

2. Error message on vector-icon
error: React Native CLI uses autolinking for native dependencies, but the following modules are linked manually:
react-native-vector-icons (to unlink run: "react-native unlink react-native-vector-icons")
This is likely happening when upgrading React Native from below 0.60 to 0.60 or above.

3. Error calling google sign in module
To configure google sign in, setup IOS app in firebase, insert URL scheme in Xcode and configure javascript frontend with
ios and web key. https://developers.google.com/identity/sign-in/ios/start-integrating

4. Can't build using FB sdk.
https://medium.com/@mehrankhandev/integrating-fbsdk-facebook-login-in-react-native-7b7600ce74a7
https://stackoverflow.com/questions/62521056/facebook-sdk-error-on-installing-cocoapods-objetive-c



