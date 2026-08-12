import { Link, useNavigate, useParams } from "react-router-dom";

import {
  ArrowLeft, Pencil, Trash2, GraduationCap, Mail,
  Phone, User, BookOpen, CalendarDays, MapPin
} from "lucide-react";

import { useStudents } from "../../context/StudentContext";

import "./StudentDetails.css";

function StudentDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    students,
    deleteStudent
  } = useStudents();

  const student = students.find(
    (student) =>
      student.id === Number(id)
  );

  function handleDelete() {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this student?"
      );

    if (confirmDelete) {

      deleteStudent(student.id);

      navigate("/students");

    }
  }

  if (!student) {

    return (

      <div className="student-not-found">

        <div className="not-found-icon">
          <GraduationCap size={42} />
        </div>

        <h2>
          Student Not Found
        </h2>

        <p>
          The student you're looking for
          does not exist.
        </p>

        <Link
          to="/students"
          className="back-btn"
        >
          <ArrowLeft size={16} />
          <span>Back to Students</span>
        </Link>

      </div>

    );
  }

  return (

    <div className="student-details-page">

      <div className="details-header">

        <div>

          <Link
            to="/students"
            className="back-link"
          >
            <ArrowLeft size={16} />
            <span>Back to Students</span>
          </Link>

          <h1>
            Student Details
          </h1>

          <p>
            View complete information
            about this student.
          </p>

        </div>

        <div className="details-actions">

          <Link
            to={`/students/edit/${student.id}`}
            className="details-edit-btn"
          >
            <Pencil size={16} />
            <span>Edit</span>
          </Link>

          <button
            className="details-delete-btn"
            onClick={handleDelete}
          >
            <Trash2 size={16} />
            <span>Delete</span>
          </button>

        </div>

      </div>

      <div className="student-profile-card">

        <div className="profile-top">

          <div className="large-avatar">

            {student.name.charAt(0)}

          </div>

          <div className="profile-name">

            <h2>
              {student.name}
            </h2>

            <p>
              {student.email}
            </p>

            <span className="student-id">

              Student ID: #{student.id}

            </span>

          </div>

        </div>

        <div className="details-divider"></div>

        <h3 className="information-title">
          Personal Information
        </h3>

        <div className="details-grid">

          <div className="detail-item">

            <div className="detail-icon">
              <User size={17} />
            </div>

            <div>

              <span className="detail-label">
                Full Name :
              </span>

              <strong>
                {student.name}
              </strong>

            </div>

          </div>

          <div className="detail-item">

            <div className="detail-icon">
              <Mail size={17} />
            </div>

            <div>

              <span className="detail-label">
                Email Address :
              </span>

              <strong>
                {student.email}
              </strong>

            </div>

          </div>

          <div className="detail-item">

            <div className="detail-icon">
              <Phone size={17} />
            </div>

            <div>

              <span className="detail-label">
                Phone Number :
              </span>

              <strong>
                {student.phone}
              </strong>

            </div>

          </div>

          <div className="detail-item">

            <div className="detail-icon">
              <User size={17} />
            </div>

            <div>

              <span className="detail-label">
                Gender :
              </span>

              <strong>
                {student.gender}
              </strong>

            </div>

          </div>

          <div className="detail-item">

            <div className="detail-icon">
              <BookOpen size={17} />
            </div>

            <div>

              <span className="detail-label">
                Course :
              </span>

              <strong>
                {student.course}
              </strong>

            </div>

          </div>

          <div className="detail-item">

            <div className="detail-icon">
              <CalendarDays size={17} />
            </div>

            <div>

              <span className="detail-label">
                Academic Year :
              </span>

              <strong>
                {student.year}
              </strong>

            </div>

          </div>

          <div className="detail-item address-item">

            <div className="detail-icon">
              <MapPin size={17} />
            </div>

            <div>

              <span className="detail-label">
                Address :
              </span>

              <strong>
                {student.address}
              </strong>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentDetails;