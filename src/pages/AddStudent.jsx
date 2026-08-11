import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ArrowLeft, UserPlus, Save, X } from "lucide-react";

import { useStudents } from "../context/StudentContext";

import "./AddStudent.css";

function AddStudent() {

  const navigate = useNavigate();

  const { addStudent } = useStudents();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [gender, setGender] = useState("");

  const [course, setCourse] = useState("");

  const [year, setYear] = useState("");

  const [address, setAddress] = useState("");

  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const studentName = name.trim();
    const studentEmail = email.trim();
    const studentPhone = phone.trim();
    const studentAddress = address.trim();

    if (!studentName) {
      setError("Please enter the student's name.");
      return;
    }

    if (!studentEmail) {
      setError("Please enter the email address.");
      return;
    }

    if (!studentPhone) {
      setError("Please enter the phone number.");
      return;
    }

    if (!gender) {
      setError("Please select a gender.");
      return;
    }

    if (!course) {
      setError("Please select a course.");
      return;
    }

    if (!year) {
      setError("Please select an academic year.");
      return;
    }

    if (!studentAddress) {
      setError("Please enter the address.");
      return;
    }

    addStudent({
      name: studentName, email: studentEmail, phone: studentPhone,
      gender: gender, course: course, year: year, address: studentAddress
    });

    navigate("/students");

  }


  return (

    <div className="add-student-page">

      <Link
        to="/students"
        className="back-link"
      >

        <ArrowLeft size={15} />

        <span>
          Back to Students
        </span>

      </Link>

      <div className="add-student-header">

        <h1>
          Add Student
        </h1>

        <p>
          Add a new student to your student
          management system.
        </p>

      </div>

      <div className="add-student-card">

        <div className="add-student-title">

          <div className="add-student-icon">

            <UserPlus size={22} />

          </div>

          <div>

            <h2>
              Student Information
            </h2>

            <p>
              Enter the details of the new student.
            </p>

          </div>

        </div>

        <form
          className="add-student-form"
          onSubmit={handleSubmit}
        >

          {error && (

            <div className="add-student-error">

              {error}

            </div>

          )}

          <div className="add-student-form-grid">

            <div className="add-student-form-group">

              <label htmlFor="name">
                Full Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="e.g. Anas Mohammed"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
              />

            </div>

            <div className="add-student-form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="e.g. anas@gmail.com"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
              />

            </div>

            <div className="add-student-form-group">

              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                placeholder="e.g. 9876543210"
                value={phone}
                onChange={(event) =>
                  setPhone(event.target.value)
                }
              />

            </div>

            <div className="add-student-form-group">

              <label>
                Gender
              </label>

              <div className="gender-options">

                <label className="gender-option">

                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={(event) =>
                      setGender(event.target.value)
                    }
                  />

                  <span>
                    Male
                  </span>

                </label>

                <label className="gender-option">

                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={(event) =>
                      setGender(event.target.value)
                    }
                  />

                  <span>
                    Female
                  </span>

                </label>

              </div>

            </div>

            <div className="add-student-form-group">

              <label htmlFor="course">
                Course
              </label>

              <select
                id="course"
                value={course}
                onChange={(event) =>
                  setCourse(event.target.value)
                }
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

            <div className="add-student-form-group">

              <label htmlFor="year">
                Academic Year
              </label>

              <select
                id="year"
                value={year}
                onChange={(event) =>
                  setYear(event.target.value)
                }
              >

                <option value="">
                  Select Academic Year
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

            <div className="add-student-form-group full-width">

              <label htmlFor="address">
                Address
              </label>

              <textarea
                id="address"
                placeholder="Enter student's address..."
                value={address}
                onChange={(event) =>
                  setAddress(event.target.value)
                }
              />

            </div>

          </div>

          <div className="add-student-actions">

            <Link
              to="/students"
              className="cancel-student-btn"
            >

              <X size={16} />

              <span>
                Cancel
              </span>

            </Link>

            <button
              type="submit"
              className="save-student-btn"
            >

              <Save size={16} />

              <span>
                Save Student
              </span>

            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default AddStudent;