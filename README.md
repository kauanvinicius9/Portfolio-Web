<h6>🚧 Building...</h6>

# 💻 My Official Portfolio

###

- Formal Documentation: [https://drive.google.com](https://drive.google.com/file/d/1zPk6DzvLledCTULYSvPQkBMbtvROHSsv/view?usp=drive_link)

###

`ROUTER` → `SCHEMA` → `CRUD` → `MODEL` → `DATABASE`

###
```
app/
 ├── core/
 ├── models/
 ├── schemas/
 ├── crud/
 ├── routers/
 └── main.py
```

###

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

| Method | Endpoint | Description |
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

Or

###
```powershell
npm i
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

###

**<h2>Swagger UI</h2>**

###

<img width="700" height="700" alt="image" src="https://github.com/user-attachments/assets/a8754b5f-0dfa-4770-945b-24129a12ed27" />

---

| CATEGORY | TECHNOLOGIES |
|--------|--------------|
| **Front-End** | `HTML5` `REACT` `TYPESCRIPT` `BOOTSTRAP` `AXIOS` `NODE.JS` |
| **Back-End** | `FASTAPI` `PYTHON` `REST` `JSON` `HTTPS` |
| **Database** | `MYSQL` `SQLITE`|
| **ORM / Data Access** | `SQLALCHEMY` |
| **UI / UX** | `FIGMA` |
| **Version Control** | `GIT` |
| **Repository & Documentation** | `GITHUB` `MARKDOWN` `GOOGLE DOCS` |
| **CI / CD** | `GITHUB` `INSOMNIA` |
| **DevOps / Deployment** | `DOCKER` `MICROSOFT AZURE` `RENDER` |
| **API Testing** | `INSOMNIA` |
| **Development Environment** | `VISUAL STUDIO CODE` |
| **Scripting & Automation** | `POWERSHELL` |
| **Project Organization** | `GITHUB` `DOCKER` |
| **Operation System** | `WINDOWS 11` |

###

**<h2>How to Install and Use Bootstrap?</h2>**

###

`Bootstrap` is a **front-end** language for styling web pages. It's **essential** for assisting **back-end** programmers, allowing them to use a maximum of **one line** of code.

###

## 🎨 UI/UX with Figma

###
```t
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Web site created using create-react-app"/>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" alt="Bootstrap"> <!-- HERE -->
    <link rel="icon" type="image/png" href="/">
    <title>Your Title</title>
  </head>
  
  <body>
    <div id="root"></div>
    <script  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>> <!-- HERE -->
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

---

<h6>Developing...</h6>

Acess to my prototipe with Figma on the image below:

###

<a href="https://www.figma.com/design/xkSJMolrZycia4O8Or12tI/Portif%C3%B3lio-Pessoal?node-id=0-1&p=f&t=IwZ7xHPH5qCz6oq0-0">
  <img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/7049be9a-f86e-4923-b6c1-955ed807d80b" title="Access the Prototype Here"/>
</a>


<div align="right">
  <h6>© 2026 — Kauan Vinícius</h6>
</div>
