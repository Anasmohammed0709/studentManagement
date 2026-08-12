import { BookOpen, Users, GraduationCap, Trash2, UserRound, ArrowRight } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import { useStudents } from "../../context/StudentContext";

import "./Courses.css";

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

function Courses() {

  const { students } = useStudents();

  const navigate = useNavigate();

  const [courses, setCourses] = useState(() => {

    const savedCourses =
      localStorage.getItem("courses");

    if (savedCourses) {

      return JSON.parse(savedCourses);

    }

    localStorage.setItem("courses",JSON.stringify(defaultCourses));

    return defaultCourses;

  });

  function handleDeleteCourse(course) {

    const studentCount =getStudentCount(course.name);

    if (studentCount > 0) {

      alert(
        `Cannot delete ${course.name} because ${studentCount} student(s) are enrolled in this course.`
      );

      return;

    }

    const confirmDelete =
      window.confirm(
        `Are you sure you want to delete ${course.name}?`
      );

    if (!confirmDelete) {
      return;
    }

    const updatedCourses =
      courses.filter((item) => item.id !== course.id);

    setCourses(updatedCourses);

    localStorage.setItem("courses",JSON.stringify(updatedCourses));

  }

  function getStudentCount(courseName) {

    return students.filter((student) => student.course === courseName).length;

  }

  return (

    <div className="courses-page">

      <div className="courses-header">

        <div>

          <h1>Courses</h1>

          <p>
            Manage and view all available courses.
          </p>

        </div>

        <Link
          to="/courses/add"
          className="add-course-btn"
        >

          <BookOpen size={17} />

          <span>Add Course</span>

        </Link>

      </div>

      <div className="course-summary">

        <div className="course-summary-card">

          <div className="summary-icon">

            <BookOpen size={22} />

          </div>

          <div>

            <p>Total Courses</p>

            <h2>{courses.length}</h2>

          </div>

        </div>

        <div className="course-summary-card">

          <div className="summary-icon">

            <Users size={22} />

          </div>

          <div>

            <p>Total Students</p>

            <h2>{students.length}</h2>

          </div>

        </div>

      </div>

      <div className="courses-grid">

        {courses.map((course) => {

          const studentCount =getStudentCount(course.name);

          return (

            <div
              className="course-card"
              key={course.id}
            >

              <div className="course-card-top">

                <div className="course-icon">

                  <BookOpen size={24} />

                </div>

                <span className="course-short">

                  {course.shortName}

                </span>

              </div>

              <h2>
                {course.name}
              </h2>

              <p className="course-description">

                {course.description}

              </p>

              <div className="course-card-bottom">

                <div className="enrolled">

                  <div className="enrolled-icon">

                    <UserRound size={16} />

                  </div>

                  <div>

                    <strong>{studentCount}</strong>

                    <small> Students</small>

                  </div>

                </div>

                <div className="course-actions">

                  <Link
                    to={`/students?course=${encodeURIComponent(
                      course.name
                    )}`}
                    className="course-view-btn"
                  >

                    <span> View Students</span>

                    <ArrowRight size={15} />

                  </Link>

                  <button
                    className="course-delete-btn"
                    onClick={() =>
                      handleDeleteCourse(course)
                    }
                    title="Delete Course"
                  >

                    <Trash2 size={16} />

                  </button>

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </div>

  );

}

export default Courses;