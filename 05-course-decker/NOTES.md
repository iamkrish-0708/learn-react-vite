# Independent Build — Session 5 Notes: Course Decker

> **Repository:** `learn-react-vite`  
> **Folder:** `05-course-decker/`  
> **Milestone:** Checkpoint 1 Independent Capstone Project  

---

## 1. Project Overview & Architectural Patterns

Built 100% independently by applying the 4 Core React Architecture Patterns:

1. **Container Pattern (`Card.jsx`)**: Uses `children` to wrap individual course details, with dynamic `hot` border styling (`hot ? "#FF6600" : "white"`).
2. **Pill Badge Component (`Badge.jsx`)**: Displays course status tags (`fastfilling`, `newly`, `default`) with calculated background and text colors.
3. **Variant-Driven Button (`Button.jsx`)**: Adapts button appearance (`hot`, `new`, `default`) based on incoming props.
4. **Data Mapping (`App.jsx`)**: Loops through dynamic course items using `.map()` and `key={course.id}` inside a responsive Flexbox container (`.card-container`).

---

## 2. Key Debugging Takeaways (Senior Takeaways)

### A. Style Objects in JSX:
- Inside `style={{ ... }}`, values are raw JavaScript variables or strings.
- **Correct:** `style={{ borderColor: bc }}`
- **Incorrect:** `style={{ borderColor: {bc} }}` *(causes an object-in-object syntax error)*.

### B. JavaScript Variable Scope & Strict Mode:
- In modern ES Modules (Vite), all variables must be declared with `let` or `const` before assignment.
- Failing to declare a variable (e.g. `c = "default"`) throws a fatal `ReferenceError`, which causes React to unmount the entire component tree and show a blank screen.

### C. Attribute Names:
- Inline styling is always written as `style={{ ... }}`.
- Writing `type={{ ... }}` on standard HTML tags like `<span>` has no effect.

---

## 3. Directory Structure (`05-course-decker/`)

```
05-course-decker/src/
├── components/
│   ├── Navbar.jsx          # Header with platform brand and login/signup actions
│   ├── Button.jsx          # Multi-variant button component
│   ├── Badge.jsx           # Status badge pill (fastfilling, newly, default)
│   └── Card.jsx            # Container wrapper with dynamic hot border
├── App.css                 # Dark blue theme, flexbox container, button styles
├── App.jsx                 # Page assembly mapping over courses array
└── main.jsx
```
