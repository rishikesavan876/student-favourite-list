import { Link, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { StudentContext } from "./context/StudentContext.jsx";
import StudentList from "./pages/StudentList.jsx";
import FavouriteStudents from "./pages/FavouriteStudents.jsx";

export default function App() {
  const { favourites } = useContext(StudentContext);

  return (
    <div className="app-shell">
      <header className="topbar">
        <Link className="brand" to="/">🎓 StudentHub</Link>
        <nav aria-label="Main navigation">
          <Link to="/">Student List</Link>
          <Link to="/favourites">
            Favourite Students <span className="count">{favourites.length}</span>
          </Link>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/favourites" element={<FavouriteStudents />} />
          <Route path="*" element={
            <section className="empty-state">
              <h2>Page not found</h2>
              <Link className="button primary" to="/">Back to Student List</Link>
            </section>
          } />
        </Routes>
      </main>

      <footer>Favourite Student List · React Router + useContext</footer>
    </div>
  );
}