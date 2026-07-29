# Portfolio

###

This portfolio is **responsive**, adapting to any **screen size** for a better viewing experience. 

###

**<h2>Google Search Console</h2>**

###

This project is **prepared** for indexing on Google using **Google Search Console**.

###

- **GSC WebSite**: [https://search.google.com](https://search.google.com/search-console/about)

###

Domain verification is done via `HTML` meta tags, inserted into the `index.html` file:

###
```t
<meta name="google-site-verification" content="YOUR_CODE_HERE" />
```

###

**<h2>Features</h2>**

###

- Sending messages via `contact form`;
- **Validation** of required fields;
- Integration with `external service` for actual `email` sending;
- **Visual** feedback during message delivery.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---

- EmailJS: [https://www.emailjs.com](https://www.emailjs.com/);

The **official EmailJS website** is automatically integrated into the `React` code through the `EmailJS` installation provided by `React` via the command:

Simply log in to the website and enter the **commands** used in the code into your devices.

###
```powershell
npm install emailjs
```

###
```ts
emailjs.send(serviceID, templateID, params)
```

###
```powershell
https://api.emailjs.com/api/v1.0/email/send
```

✅ This **without revealing** any `passwords`.

- Your **service**;
- Your **template**;
- The **form** data.

###
```powershell
http://localhost:3000
```
