# **_VivifyIdeas Expo boilerplate_**

Expo SDK version: **32.0.0**

## **Built in functions**

- Sign in
- Sign up
- Facebook sign in
- Google sign in
- Forgot & reset password
- Internationalization
- Global Error Modal ( Something went wrong )
- Edit profile
- Change password

## **TBD**

- Sockets
- Chat
- Push and inapp notifications

## **Code structure and technologies**

For our forms we use [Formik](https://github.com/jaredpalmer/formik), and for validation we use [Yup](https://github.com/jquense/yup).

In components folder there are some examples of our forms, they all use custom text inputs which are located in `FormFields.js`, and in validation folder you will find some `Yup` validation examples.

    ├── components
    ├──── auth
    ├──── shared
    ├─────── FormFields.js
    └── validation

For state management we use [React Redux](https://github.com/reduxjs/react-redux) with [Redux Saga](https://github.com/redux-saga/redux-saga) and [Reselect](https://github.com/reduxjs/reselect).

    ├── store
    ├──── actions
    ├──── index.js
    ├──── reducers
    ├──── selectors
    └──── sagas

For localization we have `$t` wrapper around [I18n](https://github.com/AlexanderZaytsev/react-native-i18n) library.

To use it all you need to do is:

```
import $t from 'i18n';

$t('common.ok');
```

## **Going to production**

Before you can publish the application there are a few things that you need to do in `app.json` file.

### **_iOS_**

You will need to set your `bundleIdentifier`, usually it looks something like this `com.yoursite.applicationame`. Next is `buildNumber` it usualy starts from `1`, but each time you republish your application you need to increase this number. After that you have `infoPlist` which can contain messages which will be displayed when application asks you for some permissions, more about it can be found on this [link](https://developer.apple.com/documentation/bundleresources/information_property_list).
And last but not least, `associatedDomains`, they are used for universal linking, so that application knows which links to intercept and to open in the application, e.g. reset password link, You can read more about it [here](https://developer.apple.com/documentation/uikit/core_app/allowing_apps_and_websites_to_link_to_your_content/enabling_universal_links).

### **_Android_**

As for **_android_**, you have `package` which is same as `bundleIdentifier` on **_iOS_**. Next to that there are `permissions`, you will need to specifiy all permissions that your application needs, for example `Camera` or `Location`, you can find all the examples for it [here](https://docs.expo.io/versions/latest/sdk/permissions/#android-permissions-equivalents-inside-appjson). Lastly you need to setup your `intentFilters` which have the same function as `associatedDomains` for **_iOS_**. Heres an example how they should look:

```
    "intentFilters": [
     {
       "action": "VIEW",
       "data": {
         "scheme": "https",
         "host": "*.myapp.io"
       },
       "category": [
         "BROWSABLE",
         "DEFAULT"
       ]
     }
   ]
```

More about `app.json` configuration can be found [here](https://docs.expo.io/versions/latest/workflow/configuration/).
