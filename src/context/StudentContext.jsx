import { createContext, useState } from "react";

export const StudentContext = createContext(null);

export function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  function addFavourite(student) {
    setFavourites((current) => {
      // Avoid duplicate students by checking their unique ID.
      if (current.some((item) => item.id === student.id)) {
        return current;
      }
      return [...current, student];
    });
  }

  function removeFavourite(studentId) {
    setFavourites((current) => current.filter((student) => student.id !== studentId));
  }

  function isFavourite(studentId) {
    return favourites.some((student) => student.id === studentId);
  }

  return (
    <StudentContext.Provider
      value={{ favourites, addFavourite, removeFavourite, isFavourite }}
    >
      {children}
    </StudentContext.Provider>
  );
}