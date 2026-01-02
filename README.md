# 💻 My Official Portfolio

###

- EmailJS: [https://www.emailjs.com](https://www.emailjs.com/);
- Official URL: [https://www.kauanvinicius.com.br](https://www.kauanvinicius.com.br).

###

The **official EmailJS website** is automatically integrated into the `React` code through the `EmailJS` installation provided by `React` via the command:

###
```powershell
npm install @emailjs/browser
```

###

Simply log in to the website and enter the **commands** used in the code into your devices.

###

When you install it, you gain access to:

###
```ts
emailjs.send(serviceID, templateID, params)
```

###

He does:

###

- An `HTTP` request to:

###
```powershell
https://api.emailjs.com/api/v1.0/email/send
```

###

With:

###

- Your **service**;
- Your **template**;
- The **form** data.

###

✅ This **without revealing** any `passwords`.

---

`ROUTER` → `SCHEMA` → `CRUD` → `MODEL` → `DATABASE`

###

This portfolio is **responsive**, adapting to any **screen size** for a better viewing experience. 

###

**<h2>Features</h2>**

###

- Sending messages via `contact form`;
- **Validation** of required fields;
- Integration with `external service` for actual `email` sending;
- **Visual** feedback during message delivery;
- Communication with `back-end` `API` for contact registration.

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

All `endpoints` were tested and returned all the **necessary information**. Each message received will be **automatically** stored in the `database`.

###

**100%** developed autocontrast system.

---

**<h2>Data-Base</h2>**

###

- **Type:** Relational;
- **Data-Base:** SQLite;
- **ORM:** SQLAlchemy.

###

**<h2>Virtual Env</h2>**

###
```powershell
python -m venv env
```

###
```powershell
env\Scripts\activate
```

###

**<h2>Install FastAPI</h2>**

###
```powershell
pip install fastapi uvicorn sqlalchemy psycopg2-binary
```

<h6>Run the Back-End</h6>

###
```powershell
uvicorn app.main:app --reload
```

###

<h6>Population DB</h6>

###
```powershell
python app/seed.py
```

###
```powershell
python -m app.seed
```

###

<h6>Output</h6>

###
```python
Uvicorn running on http://127.0.0.1:8000
```

###

**URL BASE:** `http://127.0.0.1:8000`

###

**URL DOCUMENTATION SWAGGER UI:** `http://127.0.0.1:8000/docs`

###

| METHOD | ENDPOINT | DESCRIPTION |
|--------|----------|-------------|
| `GET`  | `/` | API Status |
| `GET`  | `projects` | Projects List |
| `POST`  | `projects` | Create a New Project |
| `POST`  | `contacts` | Send a Contact Message |

---

<h6>Run the Front-End</h6>

###
```powershell
npm install —save-dev @types/react @types/react-dom
```

###
```powershell
npm install 
```

###
```powershell
npm i
```

###
```powershell
npm create vite@latest . -- --template vanilla-ts
```

###
```json
{
  "name": "port",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "bootstrap": "^5.3.8"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "vite": "^5.0.0"
  }
}
```

###
```powershell
npm install axios
```

###
```powershell
npm install react-router-dom
```

###

**OBS.:** Installation `REACT` with `TYPESCRIPT`

---

**<h2>SQL Completed</h2>**

###

- Models Created;
- Automatic Tables;
- CRUD Working;
- Session Closing Correctly;
- Documented `API`.

---

| CATEGORY | TECHNOLOGIES |
|--------|--------------|
| **Front-End** | `HTML5` `REACT` `TYPESCRIPT` `BOOTSTRAP` `AXIOS` `NODE.JS` `EMAILJS` `CSS` |
| **Back-End** | `FASTAPI` `PYTHON` `REST` `JSON` `HTTP` `EMAILJS` |
| **Database** | `MYSQL` `SQLITE`|
| **ORM / Data Access** | `SQLALCHEMY` |
| **UI / UX** | `FIGMA` |
| **Version Control** | `GIT` |
| **Repository & Documentation** | `GITHUB` `MARKDOWN` `GOOGLE DOCS` |
| **CI / CD** | `GITHUB` `INSOMNIA` |
| **DevOps / Deployment** | `DOCKER` `MICROSOFT AZURE` `RENDER` `NGINX` |
| **API Testing** | `INSOMNIA` |
| **Development Environment** | `VISUAL STUDIO CODE` |
| **Scripting & Automation** | `POWERSHELL` |
| **Project Organization** | `GITHUB` `DOCKER` `NGINX` |
| **Operation System** | `WINDOWS 11` |
| **Browser** | `GOOGLE CHROME` `GOOGLE EDGE`  |

###

**<h2>How to Install and Use Bootstrap?</h2>**

###

`Bootstrap` is a **front-end** language for styling web pages. It's **essential** for assisting **back-end** programmers, allowing them to use a maximum of **one line** of code. But it's **limited** with some **actions** and **styles**.

###

```t
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Web site created using create-react-app"/>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"> <!-- HERE -->
    <link rel="icon" type="image/png" href="/">
    <title>Your Title</title>
  </head>
  
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script> <!-- HERE -->
  </body>
</html>

<!-- Front-End Base -->
```

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

- Bootstrap WebSite: [https://getbootstrap.com/](https://getbootstrap.com/ "Click Here").
  
---

# Docker

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

<h6>Output</h6>

###
```powershell
Front-End: http://localhost:3000
```

###
```powershell
Back-End (Swagger): http://localhost:8000/docs
```

###

- Docker WebSite: [https://www.docker.com](https://www.docker.com/products/docker-desktop/)

---

## 🎨 UI/UX with Figma

###

<a href="https://www.figma.com/design/xkSJMolrZycia4O8Or12tI/Portif%C3%B3lio?node-id=1-11&p=f&t=NOi58zYfOh7oZfdz-0">
  <img src="https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white&style=for-the-badge" height="80" alt="figma logo" totle="Figma"/>
</a>

###

<div align="right">
  <h6>© 2026 — Kauan Vinícius</h6>
</div>
