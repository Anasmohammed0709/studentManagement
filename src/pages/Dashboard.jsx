import { Users, BookOpen, UserPlus, ArrowRight, GraduationCap } from "lucide-react";

import { Link } from "react-router-dom";

import { useStudents } from "../context/StudentContext";

import "./Dashboard.css";

function Dashboard() {

  const { students } = useStudents();

  const totalStudents = students.length;

  const totalCourses = new Set(
    students.map(
      (student) => student.course
    )
  ).size;

  const recentStudents = [...students]
    .reverse()
    .slice(0, 5);

  return (

    <div className="dashboard-page">

      <div className="dashboard-header">

        <div>

          <h1>
            Dashboard
          </h1>

          <p>
            Welcome back! Here's what's happening
            with your students.
          </p>

        </div>

        <div className="dashboard-actions">

          <Link
            to="/students/add"
            className="add-student-btn"
          >

            <UserPlus size={17} />

            <span>
              Add Student
            </span>

          </Link>

          <Link
            to="/courses/add"
            className="add-course-btn"
          >

            <BookOpen size={17} />

            <span>
              Add Course
            </span>

          </Link>

        </div>

      </div>

      <div className="dashboard-stats">

        <div className="dashboard-stat-card">

          <div className="stat-icon">

            <Users size={22} />

          </div>

          <div>

            <span>
              Total Students
            </span>

            <strong>
              {totalStudents}
            </strong>

          </div>

        </div>

        <div className="dashboard-stat-card">

          <div className="stat-icon course-stat-icon">

            <BookOpen size={22} />

          </div>

          <div>

            <span>
              Total Courses
            </span>

            <strong>
              {totalCourses}
            </strong>

          </div>

        </div>

      </div>

      <div className="dashboard-panel">

        <div className="panel-header">

          <div>

            <h2>
              Recent Students
            </h2>

            <p>
              Recently added students
            </p>

          </div>

          <Link
            to="/students"
            className="view-all-link"
          >

            <span>
              View All
            </span>

            <ArrowRight size={15} />

          </Link>

        </div>

        <div className="recent-students-list">

          {recentStudents.length === 0 ? (

            <div className="empty-state">

              <GraduationCap size={35} />

              <p>
                No students added yet.
              </p>

              <Link
                to="/students/add"
                className="empty-add-btn"
              >
                Add Student
              </Link>

            </div>

          ) : (

            recentStudents.map(
              (student) => (

                <div
                  className="recent-student-item"
                  key={student.id}
                >

                  <div className="recent-student-avatar">

                    {student.name
                      .charAt(0)
                      .toUpperCase()}

                  </div>

                  <div className="recent-student-info">

                    <h3>
                      {student.name}
                    </h3>

                    <p>
                      {student.email}
                    </p>

                  </div>

                  <div className="recent-student-course">

                    <span>
                      {student.course}
                    </span>

                  </div>

                  <Link
                    to={`/students/${student.id}`}
                    className="recent-student-view"
                  >

                    <ArrowRight size={16} />

                  </Link>

                </div>

              )

            )

          )}

        </div>

      </div>

    </div>

  );

}

export default Dashboard;