import { useContext } from "react";
import { StudentContext } from "../context/StudentContext.jsx";
import students from "../data/students.js";
import StudentCard from "../components/StudentCard.jsx";

export default function StudentList() {
  const { addFavourite, isFavourite } = useContext(StudentContext);

  return (
    <>
      <section className="page-heading">
        <p className="eyebrow">STUDENT DIRECTORY</p>
        <h1>Student List</h1>
        <p>Browse students and add the ones you like to your favourites.</p>
      </section>

      <section className="student-grid" aria-label="Students">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            isFavourite={isFavourite(student.id)}
            onAdd={addFavourite}
          />
        ))}
      </section>
    </>
  );
}