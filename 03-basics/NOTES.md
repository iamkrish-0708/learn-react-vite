# React Foundations — Session 3 Notes

> **Repository:** `learn-react-vite`  
> **Folder:** `03-basics/`  
> **Topics Covered:** The `children` Prop, Container Components, The Two Zones of a Component, and Flexbox Layout with CSS Classes  

---

## 1. Attributes vs The Special `children` Prop

| Feature | Normal Props (Attributes) | The `children` Prop |
| :--- | :--- | :--- |
| **Where it sits** | Inside the opening tag: `<Button color="blue" />` | **Between** opening and closing tags: `<Card><h2>Title</h2></Card>` |
| **What it holds** | Specific primitive values (strings, numbers, booleans, objects) | Entire nested markup, text, or other child components |
| **Best used for** | Configuring a specific component's data (title, color, id) | Creating **flexible visual containers** (Cards, Modals, Layouts) |

---

## 2. Creating a Reusable Container Component (`Card.jsx`)

Instead of creating separate card components for every piece of content, build a single visual wrapper that accepts `children`:

```jsx
function Card({ children }) {
  return (
    <div className="CardTemplate">
      {/* Whatever is nested between <Card> and </Card> renders here */}
      {children}
    </div>
  );
}

export default Card;
```

### Consuming the Container (`App.jsx`):
```jsx
<Card>
  <h3>Course Title</h3>
  <Badge type="success">Enrollment Open</Badge>
  <p>Learn full-stack web development...</p>
  <button className="btn">Enroll</button>
</Card>
```

---

## 3. The Two Zones of a React Component

Every functional component has two distinct execution zones:

```jsx
function Badge({ type, children }) {

  // 🟢 ZONE 1: Above the `return` (Standard JavaScript Land)
  // You CAN use: if/else, switch, let, const, calculations, helper functions.
  let bgColor = "#e2e8f0";
  let textColor = "#1e293b";

  if (type === "success") {
    bgColor = "#dcfce7";
    textColor = "#15803d";
  } else if (type === "danger") {
    bgColor = "#fee2e2";
    textColor = "#b91c1c";
  }

  // -----------------------------------------------------------------

  // 🔴 ZONE 2: Inside the `return (...)` (JSX Land)
  // You CANNOT use statements like if/else or for loops here.
  // You CAN only use expressions inside {}: ternary (? :), variables, or (&&).
  return (
    <span style={{ backgroundColor: bgColor, color: textColor, padding: "4px 10px", borderRadius: "12px" }}>
      {children}
    </span>
  );
}
```

---

## 4. Component Layout & Styling (CSS Classes vs Inline Styles)

### Why Inline Styles Fall Short in Production:
1. No pseudo-classes (e.g. `:hover`, `:active`, `:focus`).
2. No CSS Media Queries for mobile responsiveness.
3. Clutters JSX markup with large style objects.

### The Modern CSS Class Approach:
Import the stylesheet directly into your component:
```jsx
import "./App.css";
```

### Responsive Flexbox Grid (`App.css`):
```css
.Card-container {
  display: flex;
  flex-wrap: wrap;       /* Drops cards to the next line on narrow screens */
  gap: 20px;             /* Clean space between cards */
  padding: 25px;
}

.CardTemplate {
  border: 2px solid black;
  width: 325px;
  border-radius: 10px;
  padding: 15px;
}

.btn {
  background-color: green;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s ease;
}

.btn:hover {
  background-color: darkgreen;
}
```

---

## 5. Current File Structure (`03-basics/`)

```
03-basics/src/
├── components/
│   ├── Card.jsx        # Reusable container component using props.children
│   └── Badge.jsx       # Dynamic pill badge component using type prop + children
├── App.css             # Flexbox container and button hover styling
├── App.jsx             # Renders 4 diverse cards inside a responsive flex container
└── main.jsx
```
