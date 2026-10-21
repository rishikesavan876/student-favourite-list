# Favourite Student List (React Router + useContext)

## Requirements
- Node.js installed
- npm installed

## Run locally
1. Extract the ZIP file.
2. Open the extracted `favourite-student-list` folder in VS Code.
3. Open Terminal in VS Code.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Features
- Student List and Favourite Students pages using React Router.
- `<Link>` navigation without a full page reload.
- Global favourite list using `createContext`, `useContext`, and `useState`.
- Student data rendered with `.map()`.
- Duplicate favourites are prevented using unique student IDs.
- Remove a student from favourites.
- Empty-state message: “No favourite students added yet”.
- Responsive CSS layout.

## Project structure
```text
favourite-student-list/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── components/
    │   └── StudentCard.jsx
    ├── context/
    │   └── StudentContext.jsx
    ├── data/
    │   └── students.js
    └── pages/
        ├── StudentList.jsx
        └── FavouriteStudents.jsx
```

Note: favourites are held in React state and reset when the page is refreshed. This meets the requested useContext functionality; persistence can be added later with localStorage.
