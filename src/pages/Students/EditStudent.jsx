import { ArrowLeft, UserRoundPen, Save, X } from "lucide-react";

import { Link, useNavigate, useParams } from "react-router-dom";

import { useState } from "react";

import { useStudents } from "../../context/StudentContext";

import "./EditStudent.css";

function EditStudent() {

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    students,
    updateStudent
  } = useStudents();

  const student = students.find(
    (student) =>
      student.id === Number(id)
  );

  if (!student) {

    return (

      <div className="edit-student-page">

        <div className="edit-student-header">

          <Link
            to="/students"
            className="back-link"
          >
            <ArrowLeft size={16} />
            Back to Students
          </Link>

          <h1>
            Student Not Found
          </h1>

          <p>
            The student you are trying to edit
            does not exist.
          </p>

        </div>

      </div>

    );
  }

  return (
    <EditStudentForm
      student={student}
      navigate={navigate}
      updateStudent={updateStudent}
    />
  );
}

function EditStudentForm({ student, navigate, updateStudent }) {

  const [formData, setFormData] = useState({

    name: student.name || "",

    email: student.email || "",

    phone: student.phone || "",

    course: student.course || "",

    year: student.year || "",

    gender: student.gender || "",

    address: student.address || ""

  });

  function handleChange(event) {

    const {
      name,
      value
    } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

  }

  function handleSubmit(event) {

    event.preventDefault();

    updateStudent(
      student.id,
      formData
    );

    navigate(
      `/students/${student.id}`
    );

  }

  function handleCancel() {

    navigate(
      `/students/${student.id}`
    );

  }

  return (

    <div className="edit-student-page">

      <div className="edit-student-header">

        <Link
          to={`/students/${student.id}`}
          className="back-link"
        >

          <ArrowLeft size={16} />

          Back to Student Details

        </Link>

        <h1>
          Edit Student
        </h1>

        <p>
          Update {student.name}'s information.
        </p>

      </div>

      <div className="edit-student-card">

        <div className="edit-student-form-title">

          <div className="edit-student-form-icon">

            <UserRoundPen size={21} />

          </div>

          <div>

            <h2>
              Student Information
            </h2>

            <p>
              Update the student's personal
              and academic details.
            </p>

          </div>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="edit-student-form-grid">

            <div className="edit-student-form-group">

              <label htmlFor="name">
                Full Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                required
              />

            </div>

            <div className="edit-student-form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                required
              />

            </div>

            <div className="edit-student-form-group">

              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
              />

            </div>

            <div className="edit-student-form-group">

              <label htmlFor="course">
                Course
              </label>

              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select Course
                </option>

                <option value="Computer Science">
                  Computer Science
                </option>

                <option value="Information Technology">
                  Information Technology
                </option>

                <option value="Electronics">
                  Electronics
                </option>

                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>

                <option value="Civil Engineering">
                  Civil Engineering
                </option>

              </select>

            </div>

            <div className="edit-student-form-group">

              <label htmlFor="year">
                Academic Year
              </label>

              <select
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select Year
                </option>

                <option value="1st Year">
                  1st Year
                </option>

                <option value="2nd Year">
                  2nd Year
                </option>

                <option value="3rd Year">
                  3rd Year
                </option>

                <option value="4th Year">
                  4th Year
                </option>

              </select>

            </div>

            <div className="edit-student-form-group">

              <label htmlFor="gender">
                Gender
              </label>

              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select Gender
                </option>

                <option value="Male">
                  Male
                </option>

                <option value="Female">
                  Female
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

            </div>

            <div className="edit-student-form-group full-width">

              <label htmlFor="address">
                Address
              </label>

              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter student's address"
              />

            </div>

          </div>

          <div className="edit-student-form-actions">

            <button
              type="button"
              className="cancel-edit-btn"
              onClick={handleCancel}
            >

              <X size={16} />

              Cancel

            </button>

            <button
              type="submit"
              className="update-student-btn"
            >

              <Save size={16} />

              Update Student

            </button>

          </div>

        </form>

      </div>

    </div>

  );
}

export default EditStudent;