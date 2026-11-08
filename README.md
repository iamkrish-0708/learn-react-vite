# Learn React with Vite

A structured, hands-on repository documenting the progression from core React fundamentals to production-grade applications using Vite and modern JavaScript.

---

## 📁 Repository Structure

```
learn-react-vite/
├── BASIC/
│   ├── WEBPAGE WRITING USING JS/   # Vanilla JS DOM manipulation comparison
│   ├── REACT_NOTES.md              # Core notes on DOM vs Virtual DOM & Architecture
│   └── ROUGH_NOTES.TXT             # Initial conceptual notes
│
├── 01-basics/
│   ├── src/
│   │   ├── App.jsx                 # Component architecture & Props implementation
│   │   └── main.jsx                # React root entry point
│   ├── CHECKPOINT_1_NOTES.md       # Comprehensive revision notes for Foundations
│   └── package.json                # Project dependencies and scripts
│
├── 02-basics/
│   ├── src/
│   │   ├── components/
│   │   │   ├── JobCard.jsx         # Card component with conditional badge
│   │   │   └── JobRender.jsx       # Dynamic list rendering (.map) & key prop
│   │   ├── App.jsx                 # Clean root component
│   │   └── main.jsx
│   ├── NOTES.md                    # Revision notes for Lists, Keys & Modular imports
│   └── package.json
│
├── 03-basics/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Card.jsx            # Reusable container component (props.children)
│   │   │   └── Badge.jsx           # Dynamic status pill badge
│   │   ├── App.css                 # Flexbox layout and hover styles
│   │   ├── App.jsx                 # Multi-card composition with responsive grid
│   │   └── main.jsx
│   ├── NOTES.md                    # Revision notes for children prop, zones, & layout
│   └── package.json
│
├── 04-capstone-ui/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx          # Top navigation bar with branding & CTA
│   │   │   ├── Button.jsx          # Variant-driven button (primary, outline, danger)
│   │   │   ├── Badge.jsx           # Status badge pill (success, warning, danger)
│   │   │   └── Card.jsx            # Container wrapper with highlight prop
│   │   ├── App.css                 # Dark theme, grid layout, and hover micro-interactions
│   │   ├── App.jsx                 # Assembled SaaS feature showcase with .map()
│   │   └── main.jsx
│   ├── NOTES.md                    # Revision notes for the 4 design patterns
│   └── package.json
│
├── 05-course-decker/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx          # Navigation header with actions
│   │   │   ├── Button.jsx          # Dynamic variant button (hot, new, default)
│   │   │   ├── Badge.jsx           # Status pill badge (fastfilling, newly, default)
│   │   │   └── Card.jsx            # Container component with dynamic hot border
│   │   ├── App.css                 # Dark blue theme & responsive flexbox container
│   │   ├── App.jsx                 # Dynamic course catalog with .map() loop
│   │   └── main.jsx
│   ├── NOTES.md                    # Key takeaways on variable scope and style objects
│   └── package.json
│
├── 06-profile-card/
│   ├── public/                     # Static profile image assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── Button.jsx          # Custom styled profile action button
│   │   │   └── Card.jsx            # Container wrapper component
│   │   ├── App.css                 # Dark card styling & circular image masking
│   │   ├── App.jsx                 # Dynamic leadership directory with .map()
│   │   └── main.jsx
│   ├── NOTES.md                    # Notes on static assets & container composition
│   └── package.json
│
└── README.md                       # Repository overview and roadmap
```

---

## 🗺️ Learning Roadmap & Checkpoints

| Checkpoint | Focus Area | Status |
| :--- | :--- | :---: |
| **01. Foundations & UI** | Vite, JSX, Components, Props, Conditional Rendering, Lists, Containers | 🟢 Completed |
| **02. State & Reactivity** | `useState`, Event Handling, State Immutability, Forms | 🟡 Next Up |
| **03. APIs & Lifecycle** | `useEffect`, Asynchronous Fetching, Loading/Error States | ⚪ Upcoming |
| **04. Routing & SPAs** | React Router DOM v6+, Dynamic Parameters, Layouts | ⚪ Upcoming |
| **05. Global State & Hooks** | Context API, Custom Hooks, Clean Production Architecture | ⚪ Upcoming |

---

## 🚀 Getting Started Locally

To run any milestone project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/iamkrish-0708/learn-react-vite.git
   cd learn-react-vite
   ```

2. **Navigate to the module folder:**
   ```bash
   cd 01-basics
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```

5. Open your browser at `http://localhost:5173/`.
