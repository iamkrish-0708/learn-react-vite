# React Foundations — Session 2 Notes

> **Repository:** `learn-react-vite`  
> **Folder:** `02-basics/`  
> **Topics Covered:** Dynamic List Rendering (`.map`), The `key` Prop, Modular Architecture (`import` / `export`), and Relative Paths  

---

## 1. Dynamic List Rendering with `.map()`

In real applications, data is received as an **Array of Objects** from a database. Instead of manually writing 50 component tags, we transform data into UI using JavaScript's `.map()` method.

### Syntax Pattern:
```jsx
const jobs = [
  { id: 1, title: "Chef", company: "Taj Hotel", stipend: 30000, isRemote: false },
  { id: 2, title: "Frontend Developer", company: "TCS", stipend: 25000, isRemote: true },
];

function JobRender() {
  return (
    <div>
      {jobs.map((job) => (
        <JobCard 
          key={job.id}
          title={job.title}
          company={job.company}
          stipend={job.stipend}
          isRemote={job.isRemote}
        />
      ))}
    </div>
  );
}
```

---

## 2. The `key` Prop (Why is it Mandatory?)

Whenever you render a list using `.map()`, React requires a unique `key` prop on the outermost element.

```jsx
<JobCard key={job.id} ... />
```

### Why React Needs `key`:
- **Virtual DOM Tracking:** When items are added, deleted, or reordered, React uses the unique `key` to identify *which exact item changed*.
- **Performance:** React only updates that specific changed DOM node instead of re-rendering the entire list from scratch.
- **Rule of Thumb:** Always use a unique identifier from your data (e.g. `id`, `uuid`). Avoid using the array `index` (`key={index}`) if items can be sorted, filtered, or deleted.

---

## 3. Modular Component Architecture ("One Component = One File")

To avoid monolithic 1,000-line files and dead commented-out code, real projects isolate components into dedicated files inside `src/components/`.

### The Flow:
1. **Define & Export the Child Component (`src/components/JobCard.jsx`):**
   ```jsx
   function JobCard({ title, company, ... }) {
     return <div>...</div>;
   }

   export default JobCard; // Makes it available to import
   ```

2. **Import into Parent Component (`src/components/JobRender.jsx`):**
   ```jsx
   import JobCard from "./JobCard"; // Same directory: use ./
   ```

3. **Render in Root (`src/App.jsx`):**
   ```jsx
   import JobRender from "./components/JobRender"; // Subdirectory: use ./components/

   function App() {
     return (
       <div>
         <JobRender />
       </div>
     );
   }

   export default App;
   ```

---

## 4. Understanding Relative Paths in Imports

- `./` means: **Look in the current folder**.
  - If `JobRender.jsx` and `JobCard.jsx` are both in `src/components/`, use:
    ```javascript
    import JobCard from "./JobCard";
    ```
- `./components/` means: **Look inside a subfolder named `components`**.
  - In `src/App.jsx`, to reach `src/components/JobRender.jsx`, use:
    ```javascript
    import JobRender from "./components/JobRender";
    ```

---

## 5. Current File Structure & Working Code

```
02-basics/src/
├── components/
│   ├── JobCard.jsx     # Renders a single job card with conditional remote badge
│   └── JobRender.jsx    # Holds jobs data array and maps over it
├── App.jsx             # Clean 11-line root component rendering <JobRender />
└── main.jsx            # Mounts App to div#root
```
