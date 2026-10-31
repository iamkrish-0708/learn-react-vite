# React Foundations — Checkpoint 1 Notes

> **Repository:** `learn-react-vite`  
> **Topic:** React Foundations, JSX, Components, Props & Conditional Rendering  
> **Level:** Ground Zero to Industry Standard  

---

## 1. Why React? (Imperative vs Declarative)

| Feature | Vanilla JavaScript (Imperative) | React (Declarative) |
| :--- | :--- | :--- |
| **Philosophy** | Tells the browser **HOW** to do it step-by-step. | Tells React **WHAT** the UI should look like based on data. |
| **DOM Updates** | `document.createElement()`, `appendChild()`, `.innerHTML` directly on the Real DOM. | Updates state in memory; React's **Virtual DOM** surgically updates only the changed element. |
| **Maintainability** | Becomes messy ("DOM spaghetti") as applications grow. | Broken into self-contained, reusable **Components**. |

---

## 2. Why Vite over Create React App (CRA)?

- **Create React App (Older standard):** Bundled all files together into memory before starting. Slower startup and file updates as the project grew.
- **Vite (Modern industry standard):** Leverages native browser ES Modules.
  - Starts the development server in milliseconds (`~400ms`).
  - Uses **Hot Module Replacement (HMR)**: only updates the exact file that changed without reloading the whole browser tab.

---

## 3. Anatomy of a Vite React Project

```
01-basics/
├── index.html          # The ONLY HTML file; contains <div id="root"></div>
├── package.json        # Lists dependencies (react, react-dom) and scripts ("dev": "vite")
├── vite.config.js      # Vite configuration
└── src/
    ├── main.jsx        # The bridge: grabs <div id="root"> and renders <App />
    ├── App.jsx         # The root component
    ├── App.css         # Component styling
    └── index.css       # Global styling
```

### The Rendering Pipeline:
1. `index.html` loads `<script type="module" src="/src/main.jsx"></script>`
2. `main.jsx` runs:
   ```javascript
   createRoot(document.getElementById('root')).render(<App />);
   ```
3. `App.jsx` returns JSX markup, which React injects directly inside `<div id="root"></div>`.

---

## 4. What is a Component?

A component is simply a **JavaScript function that returns UI markup (JSX)**.

### The 2 Golden Rules of Components:
1. **Must start with a CAPITAL letter:** `ProfileCard`, `Navbar`, `Button` (not `profileCard` or `navbar`).
2. **Must return markup:** Returns JSX elements.

```jsx
function ProfileCard() {
  return <h2>Elon Musk</h2>;
}
```

---

## 5. What is JSX (JavaScript XML)?

JSX allows writing HTML-like tags directly inside JavaScript files without strings or DOM methods.

Behind the scenes, Vite converts:
```jsx
<h1>Hello World!</h1>
```
Into standard JavaScript:
```javascript
React.createElement('h1', null, 'Hello World!')
```

### The 3 Strict Rules of JSX:
1. **Every tag must close:** 
   - Non-empty: `<h1>Text</h1>`
   - Empty/Void: `<img src="..." />`, `<input type="text" />`, `<br />`
2. **`class` becomes `className`:** 
   - `class` is reserved in JavaScript.
   - `<div className="card"></div>`
3. **Only ONE single root element:**
   - A function can only return one value.
   - Wrap multiple sibling tags in a single parent `<div>` or an empty **React Fragment** `<> ... </>`.

---

## 6. The JavaScript Escape Hatch `{}`

Inside JSX, curly braces `{}` allow you to run real JavaScript expressions:
```jsx
const user = "Krish";
const year = 2026;

return (
  <div>
    <h1>Hello, {user}!</h1>
    <p>Internship target year: {year + 1}</p>
  </div>
);
```

---

## 7. Props (Properties) & Destructuring

Props are **arguments passed into a component**, just like arguments to a JavaScript function.

### Passing Props (Parent):
```jsx
<ProfileCard 
  name="Elon Musk" 
  role="AI Engineer" 
  isAvailable={true} 
/>
```
*Strings can use quotes (`role="AI Engineer"`), while booleans, numbers, objects, and variables require `{}` (`isAvailable={true}`).*

### Receiving Props with Destructuring (Child):
Instead of writing `props.name`, extract properties directly in the function arguments:
```jsx
function ProfileCard({ name, role, isAvailable }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}
```

---

## 8. Conditional Rendering

Because JSX return statements cannot contain raw `if / else` blocks, conditional logic uses JavaScript expressions inside `{}`:

### 1. Ternary Operator (`condition ? ifTrue : ifFalse`)
Use when switching between two UI alternatives:
```jsx
{isAvailable ? <span>🟢 Available</span> : <span>🔴 Busy</span>}
```

### 2. Logical AND (`condition && ifTrue`)
Use when rendering an element **only if** a condition is true (otherwise rendering nothing):
```jsx
{isAvailable && <button>Connect</button>}
```

---

## 9. Current Project Implementation (`App.jsx`)

```jsx
function App() {
  return (
    <div>
      <h1>Developer Directory</h1>
      <ProfileCard 
        name="Elon Musk" 
        role="AI Engineer" 
        college="VJTI" 
        isAvailable={true}
        skills="Artificial Intelligence"
      />
      <ProfileCard 
        name="Sam Altman" 
        role="Full Stack Engineer" 
        college="IIT Bombay" 
        isAvailable={false}
        skills="React, Node, Express, MongoDB"
      />
    </div>
  );
}

function ProfileCard({ name, role, college, isAvailable, skills }) {
  return (
    <div style={{ border: '2px solid black', padding: '16px', borderRadius: '8px', margin: '10px 0' }}>
      <h2>{name}</h2>
      <p>Target: {role}</p>
      <p>Institution: {college}</p>
      <p>Skills: {skills}</p>
      {isAvailable ? <span>Status : 🟢 Available</span> : <span>Status : 🔴 Busy</span>}
      <br />
      {isAvailable && <button style={{ marginTop: '5px' }}>Connect</button>}
    </div>
  );
}

export default App;
```
