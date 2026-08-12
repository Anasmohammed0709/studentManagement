import { createContext, useContext, useState } from "react";


const CourseContext = createContext();


const defaultCourses = [
  {
    id: 1,
    name: "Computer Science",
    shortName: "CSE",
    description:
      "Software development, programming and computer technology."
  },
  {
    id: 2,
    name: "Information Technology",
    shortName: "IT",
    description:
      "Information systems, networking and modern technologies."
  },
  {
    id: 3,
    name: "Electronics",
    shortName: "ECE",
    description:
      "Electronics, communication systems and embedded technology."
  },
  {
    id: 4,
    name: "Mechanical Engineering",
    shortName: "ME",
    description:
      "Machines, manufacturing and mechanical systems."
  },
  {
    id: 5,
    name: "Civil Engineering",
    shortName: "CE",
    description:
      "Construction, infrastructure and structural engineering."
  }
];


function CourseProvider({ children }) {

  const [courses, setCourses] = useState(() => {

    const savedCourses =
      localStorage.getItem("courses");

    return savedCourses
      ? JSON.parse(savedCourses)
      : defaultCourses;

  });


  function saveCourses(updatedCourses) {

    setCourses(updatedCourses);

    localStorage.setItem(
      "courses",
      JSON.stringify(updatedCourses)
    );

  }


  function addCourse(course) {

    const newCourse = {

      ...course,

      id: Date.now()

    };


    saveCourses([
      ...courses,
      newCourse
    ]);

  }


  function updateCourse(id, updatedCourse) {

    const updatedCourses =
      courses.map((course) =>

        course.id === Number(id)

          ? {
            ...course,
            ...updatedCourse
          }

          : course

      );


    saveCourses(updatedCourses);

  }


  function deleteCourse(id) {

    const updatedCourses =
      courses.filter(
        (course) =>
          course.id !== Number(id)
      );


    saveCourses(updatedCourses);

  }


  return (

    <CourseContext.Provider
      value={{
        courses,
        addCourse,
        updateCourse,
        deleteCourse
      }}
    >

      {children}

    </CourseContext.Provider>

  );

}


export function useCourses() {

  return useContext(
    CourseContext
  );

}


export { CourseProvider };