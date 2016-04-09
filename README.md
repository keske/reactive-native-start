# Reactive Native Start
> React Native + Redux + Immutable + Babel boilerplate.

#### Features

- [Babel](https://babeljs.io)/ES2015
- [Redux](https://github.com/reactjs/redux) with Async actions via [redux-thunk](https://github.com/gaearon/redux-thunk) and console logging via [redux-logger](https://github.com/fcomb/redux-logger)
- [Immutable](https://facebook.github.io/immutable-js/)
- Android support
- [ESLint](http://eslint.org) configured by [AirBnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [Flowtype](http://flowtype.org) annotations preconfigured
- [Superagent](https://github.com/visionmedia/superagent) API example (see [reducer](https://github.com/keske/reactive-native-start/blob/development/src/reducers/modules/repo.js) and [api](https://github.com/keske/reactive-native-start/blob/development/src/utils/api/repo.js))

#### Before start

Read [getting started](https://facebook.github.io/react-native/docs/getting-started.html)

#### IOS

`react-native run-ios`

#### Android

`react-native run-android`

`adb devices` show connected devices

`adb reverse tcp:8081 tcp:8081` to fix error `Unable to download JS bundle`

#### Debugging

Open in browser `http://localhost:8081/debugger-ui`

#### TODO
1. [ ] Configure Flow

⚛ 🚀
