import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ArrowLeft, BookOpen, Save, X } from "lucide-react";

import "./AddCourse.css";


function AddCourse() {

  const navigate = useNavigate();

  const [courseName, setCourseName] = useState("");

  const [shortName, setShortName] = useState("");

  const [description, setDescription] = useState("");

  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const name = courseName.trim();
    const short = shortName.trim();
    const desc = description.trim();

    if (!name) {
      setError("Please enter the course name.");
      return;
    }

    if (!short) {
      setError("Please enter the short name.");
      return;
    }

    if (!desc) {
      setError("Please enter the course description.");
      return;
    }

    const savedCourses =
      localStorage.getItem("courses");

    const courses = savedCourses
      ? JSON.parse(savedCourses)
      : [];

    const courseExists = courses.some(
      (course) =>
        course.name.toLowerCase() ===
        name.toLowerCase()
    );

    if (courseExists) {

      setError(
        "This course already exists."
      );

      return;
    }

    const newCourse = {
      id: Date.now(), name: name,
      shortName: short.toUpperCase(), description: desc
    };

    const updatedCourses = [
      ...courses,
      newCourse
    ];

    localStorage.setItem(
      "courses",
      JSON.stringify(updatedCourses)
    );

    navigate("/courses");

  }


  return (

    <div className="add-course-page">

      <Link
        to="/courses"
        className="back-link"
      >

        <ArrowLeft size={15} />

        <span>
          Back to Courses
        </span>

      </Link>

      <div className="add-course-header">

        <h1>
          Add Course
        </h1>

        <p>
          Add a new course to your student
          management system.
        </p>

      </div>

      <div className="add-course-card">

        <div className="add-course-title">

          <div className="add-course-icon">

            <BookOpen size={22} />

          </div>

          <div>

            <h2>
              Course Information
            </h2>

            <p>
              Enter the details of the new course.
            </p>

          </div>

        </div>

        <form
          className="add-course-form"
          onSubmit={handleSubmit}
        >

          {error && (

            <div
              style={{
                padding: "10px 13px",
                borderRadius: "8px",
                background: "#fef2f2",
                border: "1px solid #fecaca",
                color: "#dc2626",
                fontSize: "13px"
              }}
            >
              {error}
            </div>

          )}

          <div className="add-course-form-group">

            <label htmlFor="courseName">
              Course Name
            </label>

            <input
              id="courseName"
              type="text"
              placeholder="e.g. Computer Science"
              value={courseName}
              onChange={(event) =>
                setCourseName(event.target.value)
              }
            />

          </div>

          <div className="add-course-form-group">

            <label htmlFor="shortName">
              Short Name
            </label>

            <input
              id="shortName"
              type="text"
              placeholder="e.g. CSE"
              value={shortName}
              onChange={(event) =>
                setShortName(event.target.value)
              }
            />

          </div>

          <div className="add-course-form-group">

            <label htmlFor="description">
              Description
            </label>

            <textarea
              id="description"
              placeholder="Enter course description..."
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
            />

          </div>

          <div className="add-course-actions">

            <Link
              to="/courses"
              className="cancel-course-btn"
            >

              <X size={16} />

              <span>
                Cancel
              </span>

            </Link>

            <button
              type="submit"
              className="save-course-btn"
            >

              <Save size={16} />

              <span>
                Save Course
              </span>

            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default AddCourse;