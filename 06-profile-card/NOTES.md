# Independent Project — Session 6 Notes: Profile Card Directory

> **Repository:** `learn-react-vite`  
> **Folder:** `06-profile-card/`  
> **Focus:** Static Asset Handling (`public/`), Container Composition, and Clean UI Card Design  

---

## 1. Project Overview & Architecture

Built completely independently, this project showcases a **Tech Leadership Profile Directory** (featuring Sam Altman, Elon Musk, Mark Zuckerberg, and Sundar Pichai) using clean component separation and static public assets:

1. **Static Assets in Vite (`public/`)**:
   - Files placed in the root `public/` directory (e.g. `public/image1.png`) are served directly at the root URL path (`/image1.png`).
   - The data array references them directly via `profileImg: "/image1.png"` without complex imports.

2. **Container Composition (`Card.jsx`)**:
   - Reusable `<Card>` container component leveraging `children` to cleanly frame avatars, names, titles, metadata, and action buttons.

3. **Dedicated Action Component (`Button.jsx`)**:
   - Isolates the button element with custom hover transitions and `children` support.

4. **Dynamic Data Flow (`App.jsx`)**:
   - Transforms the `profiles` array using `.map()` with `key={profile.id}` inside a responsive flex container (`.profiles`).

---

## 2. Key UI & CSS Highlights

- **Circular Avatars**: Using `border-radius: 50%` combined with `object-fit: cover` ensures all profile photos maintain uniform 100x100px aspect ratios regardless of source image dimensions.
- **Modern Dark Palette**: Styled with `#111827` page background, `#1f2937` card backgrounds, and `#60a5fa` primary button accents.
- **Center-Aligned Flexbox Grid**: `.profiles` uses `display: flex; flex-wrap: wrap; justify-content: center; gap: 24px;` for responsive wrapping on any screen size.

---

## 3. Directory Structure (`06-profile-card/`)

```
06-profile-card/
├── public/
│   ├── image1.png                  # Sam Altman avatar
│   ├── image2.png                  # Elon Musk avatar
│   ├── image3.png                  # Mark Zuckerberg avatar
│   └── image4.png                  # Sundar Pichai avatar
├── src/
│   ├── components/
│   │   ├── Button.jsx              # Reusable button component
│   │   └── Card.jsx                # Reusable container component
│   ├── App.css                     # Responsive layout, avatar styling & hover states
│   ├── App.jsx                     # Data array & dynamic profile mapping
│   └── main.jsx
├── NOTES.md                        # Summary of concepts & asset handling
└── package.json
```
