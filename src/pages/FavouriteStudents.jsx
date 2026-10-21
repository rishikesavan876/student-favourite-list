import { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../context/StudentContext.jsx";
import StudentCard from "../components/StudentCard.jsx";

export default function FavouriteStudents() {
  const { favourites, removeFavourite } = useContext(StudentContext);

  return (
    <>
      <section className="page-heading">
        <p className="eyebrow">YOUR COLLECTION</p>
        <h1>Favourite Students</h1>
        <p>Students you add from the Student List appear here.</p>
      </section>

      {favourites.length === 0 ? (
        <section className="empty-state">
          <div className="empty-icon" aria-hidden="true">♡</div>
          <h2>No favourite students added yet</h2>
          <p>Visit the student list and add a student to get started.</p>
          <Link className="button primary" to="/">Go to Student List</Link>
        </section>
      ) : (
        <>
          <p className="results-count">{favourites.length} favourite student{favourites.length === 1 ? "" : "s"}</p>
          <section className="student-grid" aria-label="Favourite students">
            {favourites.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                showRemove
                onRemove={removeFavourite}
              />
            ))}
          </section>
        </>
      )}
    </>
  );
}