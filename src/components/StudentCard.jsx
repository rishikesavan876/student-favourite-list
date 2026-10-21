export default function StudentCard({
  student,
  isFavourite,
  onAdd,
  onRemove,
  showRemove = false,
}) {
  return (
    <article className="student-card">
      <div className="avatar" aria-hidden="true">
        {student.name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase()}
      </div>
      <div className="student-info">
        <h3>{student.name}</h3>
        <p><strong>Roll No:</strong> {student.rollNumber}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p className="student-id">ID: {student.id}</p>
      </div>
      {showRemove ? (
        <button className="button danger" onClick={() => onRemove(student.id)}>
          Remove
        </button>
      ) : (
        <button
          className={`button ${isFavourite ? "secondary" : "primary"}`}
          onClick={() => onAdd(student)}
          disabled={isFavourite}
        >
          {isFavourite ? "✓ Added to Favourite" : "♡ Add to Favourite"}
        </button>
      )}
    </article>
  );
}