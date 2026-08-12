import { createContext, useContext, useState } from "react";

const StudentContext = createContext();

function StudentProvider({ children }) {

  const [students, setStudents] = useState(() => {

    const savedStudents =
      localStorage.getItem("students");

    return savedStudents ? JSON.parse(savedStudents) : [];

  });


  function saveStudents(updatedStudents) {

    setStudents(updatedStudents);

    localStorage.setItem( "students", JSON.stringify(updatedStudents));

  }


  function addStudent(student) {

    const newStudent = { ...student, id: Date.now()};

    saveStudents([ ...students,newStudent]);

  }


  function updateStudent(id, updatedStudent) {

    const updatedStudents = students.map(
      (student) => student.id === Number(id)
          ? { ...student, ...updatedStudent } : student
    );

    saveStudents(updatedStudents);

  }


  function deleteStudent(id) {

    const updatedStudents =students.filter(  (student) =>student.id !== Number(id));

    saveStudents(updatedStudents);

  }


  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
        updateStudent,
        deleteStudent
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}


export function useStudents() {
  return useContext(StudentContext);
}


export { StudentProvider };