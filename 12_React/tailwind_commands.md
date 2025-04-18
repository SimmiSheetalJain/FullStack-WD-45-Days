### Commands
```
$ npm install -D tailwindcss@3 postcss autoprefixer
$ npx tailwindcss init -p
```
### The content inside tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

### The content inside index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```