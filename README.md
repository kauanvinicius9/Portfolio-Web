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

This **without revealing** any `passwords`.

- **service__id**: xxxxxxxx;
- **template__id**: 00000000;
- **public key**: 123ABC456abc.

```powershell
http://localhost:3000
```
