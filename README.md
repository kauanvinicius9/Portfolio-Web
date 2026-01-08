# 💻 My Official Portfolio

###

- The portfolio is running in the `Render`: [https://render.com](https://render.com/);
- Official URL: [https://portfolio-im1j.onrender.com](https://portfolio-im1j.onrender.com/).

---


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

###

**<h2>Non-functional requirements</h2>**

###

- Spam **protection**;
- Protection against **malicious payloads**;
- **Clean** code;
- `Stack` used in **real** production.

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

**<h2>Front-End</h2>**

###

For the **Front-End** to function correctly, the following dependencies need to be installed:

###

**100%** developed autocontrast system.

###

- EmailJS: [https://www.emailjs.com](https://www.emailjs.com/);

###

The **official EmailJS website** is automatically integrated into the `React` code through the `EmailJS` installation provided by `React` via the command:

###

Simply log in to the website and enter the **commands** used in the code into your devices.

###
```powershell
npm install emailjs
```

###

When you install it, you gain **access** to:

###
```ts
emailjs.send(serviceID, templateID, params)
```

###

He does:

###
```powershell
https://api.emailjs.com/api/v1.0/email/send
```

###

With:

###

✅ This **without revealing** any `passwords`.

###

- Your **service**;
- Your **template**;
- The **form** data.

###

- An `HTTP` request to:

###
```powershell
npm install 
```

###
```powershell
npm install express-rate-limit
```

###
```powershell
npm install react-router-dom
```

###
```powershell
npm install zod
```

###

`Bootstrap` is a **front-end** language for styling web pages. It's **essential** for assisting **back-end** programmers, allowing them to use a maximum of **one line** of code. But it's **limited** with some **actions** and **styles**.

###
```powershell
npm install bootstrap
```

###

`main.tsx`

###
```typescript
import 'bootstrap/dist/css/bootstrap.min.css';
```

If using `JS` components (`modal`, `dropdown`):

###
```typescript
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
```

###
```t
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
```

###

- Bootstrap WebSite: [https://getbootstrap.com/](https://getbootstrap.com/ "Click Here").

###

**OBS.:** Installation `REACT` with `TYPESCRIPT`

---

**<h2>Skills</h2>**

###

| CATEGORY | TECHNOLOGIES |
|--------|--------------|
| **Front-End** | `HTML5` `REACT` `TYPESCRIPT` `BOOTSTRAP` `NODEJS` `EMAILJS` `CSS` `ZOD` |
| **Version Control** | `GIT` |
| **Repository & Documentation** | `GITHUB` `MARKDOWN` |
| **CI / CD** | `GITHUB` `INSOMNIA` |
| **DevOps / Deployment** | `DOCKER` `RENDER` `NGINX` `GOOGLE SEARCH CONSOLE` |
| **API Testing** | `INSOMNIA` |
| **Development Environment** | `VISUAL STUDIO CODE` |
| **Scripting & Automation** | `POWERSHELL` |
| **Project Organization** | `GITHUB` `DOCKER` `NGINX` |
| **Operation System** | `WINDOWS 11` |
| **Browser** | `GOOGLE CHROME` `GOOGLE EDGE`  |

---

**<h2>Docker</h2>**

###

This portfolio uses `Docker` for environment **standardization** and **handling** during production deployment.

###

The application is divided into **two** containers:

###

- **Front-End**: `React` (`Vite`) compiled and served with `Nginx`;
- **Back-End**: `API` developed in `FastAPI` running with `Uvicorn`.

###

With `Docker`, the entire project can be run **without** the need to manually install dependencies like `Node.js` or Python, ensuring that the application functions the same way in **any environment**.

---

With `Docker` installed, simply run the command below in the project root:

###
```powershell
docker compose up --build
```

###
```powershell
docker build -t frontend .
```

###
```powershell
docker run -d -p 5173:80 frontend
```

###
```powershell
Front-End: http://localhost:3000
```

###

- Docker WebSite: [https://www.docker.com](https://www.docker.com/products/docker-desktop/)
