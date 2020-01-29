# NewFeaturesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Note

Pease enable this to be able to acces SpeechRecognition APIs.

Make sure you're using either Canary (which you can use at the same time as other Chrome channels) or the Dev channel. Although the experimental APIs might work in other versions, we need your feedback on the latest incarnation of the APIs, which you can find in Canary and on the Dev channel.

Specify the "experimental" permission in your manifest, like this:

    `"permissions": [
    "experimental",
    ...
    ]`

Enable the experimental API in your browser. You can do this in either of two ways:

Go to chrome://flags, find "Experimental Extension APIs", click its "Enable" link, and restart Chrome. From now on, unless you return to that page and disable experimental APIs, you'll be able to run extensions and apps that use experimental APIs.

Specify the --enable-experimental-extension-apis flag each time you launch the browser. On Windows, you can do this by modifying the properties of the shortcut that you use to launch Google Chrome. For example:

    chrome://flags/#enable-experimental-web-platform-features
