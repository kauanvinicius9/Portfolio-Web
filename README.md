## Portfolio

This portfolio is **responsive**, adapting to any **screen size** for a better viewing experience. 

---

```powershell
npm install emailjs
```

```ts
emailjs.send(serviceID, templateID, params)
```

```powershell
https://api.emailjs.com/api/v1.0/email/send
```

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

**Extension**: PDF Viewer

Error `npm run dev` case, delete file `package-lock.json`, `node_modules` and cache. Install `node_modules` again.

```powershell
del package-lock.json
```

```powershell
del node_modules
```

```
npm cache clean
```

```powershell
npm install
```

---

```ts
await emailjs.send(
        "service_x12abcde", // Service
        "template_xxx123", // Template
        {
          name: name,
          email: email,
          message: message,
        },
        "abc123defXXX" // Public key
      );
```