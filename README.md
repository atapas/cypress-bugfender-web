# Cypress Bugfender with JavaScrip application

This a project to showcase the integration of Cypress with a JavaScript app to perform End-to-End testing. We also use Bugfender to send the logs and track them.

# How To Run
- Clone the project and chenge to the project directory.
- Install dependencies using, `npm install`
- Open a command prompt and run the app using `npx serve`.
- Open another command prompt and run the end-to-end test using `npm run e2e`.

# Bugfender account
Go over to [Bugfender website](https://bugfender.com/) and register yourself to get the API Key. The same API key you need to use in this file,

```js
Bugfender.init({
    appKey: `'<API_KEY>'`,
});
```