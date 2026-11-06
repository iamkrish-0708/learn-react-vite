# React Foundations — Session 4 Notes: SaaS Capstone UI

> **Repository:** `learn-react-vite`  
> **Folder:** `04-capstone-ui/`  
> **Milestone:** Checkpoint 1 Capstone Component Library & Showcase  

---

## 1. The 4 Core React Architecture Patterns

This capstone unites all foundational React concepts into four production design patterns:

### Pattern 1: The Variant Pattern (`Button.jsx`)
Instead of creating separate components (`PrimaryButton`, `OutlineButton`, `DangerButton`), create a single flexible button that maps a `variant` prop to a CSS class:

```jsx
function Button({ children, variant = "primary" }) {
    let buttonClass = "dark-effect";

    if (variant === "primary") {
        buttonClass = "dark-effect";
    } else if (variant === "outline") {
        buttonClass = "transparent-effect";
    } else if (variant === "danger") {
        buttonClass = "red-accent";
    }

    return <button className={buttonClass}>{children}</button>;
}
```

### Pattern 2: The Color Token Pattern (`Badge.jsx`)
Use Zone 1 (above `return`) to calculate semantic colors for status indicators:
```jsx
function Badge({ children, type = "neutral" }) {
    let bg = "#E5E7EB";
    let txt = "#374151";

    if (type === "success") {
        bg = "#DCFCE7";
        txt = "#166534";
    } else if (type === "warning") {
        bg = "#FEF3C7";
        txt = "#92400E";
    }

    return (
        <span style={{ backgroundColor: bg, color: txt, padding: "4px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: "600" }}>
            {children}
        </span>
    );
}
```

### Pattern 3: Container + Modifier Pattern (`Card.jsx`)
Combine `children` with an optional modifier prop (e.g., `highlight={true}`) to dynamically emphasize special cards:
```jsx
function Card({ children, highlight = false }) {
    const highlightStyle = highlight ? {
        borderColor: "#3b82f6",
        boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
    } : {};

    return (
        <div className="card" style={highlightStyle}>
            {children}
        </div>
    );
}
```

### Pattern 4: Component Composition (`App.jsx`)
In the main page, assemble components like Lego blocks inside the dynamic `.map()` loop:
```jsx
{features.map((feature) => (
    <Card key={feature.id} highlight={feature.isPopular}>
        <div className="card-header">
            <Badge type={feature.badgeType}>{feature.badgeText}</Badge>
            {feature.isPopular && <span>⭐ Popular</span>}
        </div>
        <h3 className="card-title">{feature.title}</h3>
        <p className="card-desc">{feature.description}</p>
        <div className="card-footer">
            <Button variant={feature.isPopular ? "primary" : "outline"}>
                Explore Feature
            </Button>
        </div>
    </Card>
))}
```

---

## 2. CSS in React: What Actually Matters

### Must-Know CSS (The 20% that matters for 80% of jobs):
1. **The Box Model:** `padding`, `margin`, `border`, `border-radius`.
2. **Flexbox Layout:** `display: flex`, `gap`, `justify-content: space-between`, `align-items: center`, `flex-wrap`.
3. **Responsive Grid:** `display: grid`, `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`.
4. **Pseudo-classes:** `:hover` micro-interactions.

### Ignore / Let AI & Figma Generate:
- Exact hex colors (`#111827`, `#dcfce7`).
- Complex box-shadow numbers (`box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25)`).
- Webkit text clipping tricks (`-webkit-background-clip: text`).
- Cubic bezier transition curves.

---

## 3. Directory Structure (`04-capstone-ui/`)

```
04-capstone-ui/src/
├── components/
│   ├── Navbar.jsx          # Header with logo, live badge, and action buttons
│   ├── Button.jsx          # Reusable button with variants (primary, outline, danger)
│   ├── Badge.jsx           # Status badge pill (success, warning, danger, neutral)
│   └── Card.jsx            # Container component with highlight border prop
├── App.css                 # Dark theme, responsive grid, card hover animations
├── App.jsx                 # Page assembly with feature data array & .map()
└── main.jsx
```
