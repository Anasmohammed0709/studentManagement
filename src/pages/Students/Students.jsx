import { Search, Plus, Eye, Pencil, Trash2, ArrowUp, ArrowDown, Users } from "lucide-react";

import { Link, useSearchParams } from "react-router-dom";

import { useState } from "react";

import { useStudents } from "../../context/StudentContext";

import "./Students.css";


function Students() {

  const {
    students,
    deleteStudent
  } = useStudents();

  const [searchParams] = useSearchParams();

  const courseFilter =
    searchParams.get("course");

  const [search, setSearch] = useState("");

  const [sortField, setSortField] = useState("name");

  const [sortDirection, setSortDirection] =
    useState("asc");

  function handleDelete(id) {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this student?"
      );

    if (confirmDelete) {

      deleteStudent(id);

    }

  }

  function handleSort(field) {

    if (sortField === field) {

      setSortDirection(
        sortDirection === "asc"
          ? "desc"
          : "asc"
      );

    } else {

      setSortField(field);

      setSortDirection("asc");

    }

  }

  let filteredStudents = students.filter(
    (student) => {

      const searchText =
        search.toLowerCase();

      const matchesSearch =
        student.name
          ?.toLowerCase()
          .includes(searchText) ||

        student.email
          ?.toLowerCase()
          .includes(searchText) ||

        student.course
          ?.toLowerCase()
          .includes(searchText) ||

        student.phone
          ?.toLowerCase()
          .includes(searchText);

      const matchesCourse =
        courseFilter
          ? student.course === courseFilter
          : true;

      return (
        matchesSearch &&
        matchesCourse
      );

    }
  );

  filteredStudents.sort(
    (a, b) => {

      const valueA =
        String(a[sortField] || "")
          .toLowerCase();

      const valueB =
        String(b[sortField] || "")
          .toLowerCase();

      if (valueA < valueB) {

        return sortDirection === "asc"
          ? -1
          : 1;

      }

      if (valueA > valueB) {

        return sortDirection === "asc"
          ? 1
          : -1;

      }

      return 0;

    }
  );

  function getInitial(name) {

    if (!name) {
      return "?";
    }

    return name.charAt(0).toUpperCase();

  }

  return (

    <div className="students-page">

      <div className="students-header">

        <div>

          <h1>
            Students
          </h1>

          <p>
            Manage all registered students.
          </p>

        </div>


        <Link
          to="/students/add"
          className="add-student-btn"
        >

          <Plus size={17} />

          <span>
            Add Student
          </span>

        </Link>

      </div>

      <div className="students-toolbar">

        <div className="student-search">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search by name, email or course..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

        </div>

        <div className="students-sort">

          <span>
            Sort:
          </span>

          <select
            value={sortField}
            onChange={(event) =>
              handleSort(event.target.value)
            }
          >

            <option value="name">
              Name
            </option>

            <option value="course">
              Course
            </option>

            <option value="year">
              Year
            </option>

            <option value="gender">
              Gender
            </option>

          </select>

          <button
            className="sort-direction-btn"
            onClick={() =>
              handleSort(sortField)
            }
            title="Change sort order"
          >

            {sortDirection === "asc" ? (
              <ArrowUp size={15} />
            ) : (
              <ArrowDown size={15} />
            )}

          </button>

        </div>

        <div className="student-count">

          {filteredStudents.length}{" "}
          {filteredStudents.length === 1
            ? "Student"
            : "Students"}

        </div>

      </div>

      <div className="students-table-container">


        {filteredStudents.length === 0 ? (

          <div className="students-empty-state">

            <Users size={40} />

            <h3>
              No students found
            </h3>

            <p>
              Try changing your search or
              add a new student.
            </p>

          </div>

        ) : (

          <table className="students-table">

            <thead>

              <tr>

                <th
                  onClick={() =>
                    handleSort("name")
                  }
                  className="sortable-header"
                >

                  Student

                  {sortField === "name" && (
                    sortDirection === "asc"
                      ? <ArrowUp size={13} />
                      : <ArrowDown size={13} />
                  )}

                </th>

                <th>
                  Phone
                </th>

                <th>
                  Course
                </th>

                <th>
                  Year
                </th>

                <th>
                  Gender
                </th>

                <th>
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredStudents.map(
                (student) => (

                  <tr key={student.id}>

                    <td>

                      <div className="student-info">

                        <div className="student-avatar">

                          {getInitial(
                            student.name
                          )}

                        </div>

                        <div>

                          <strong>
                            {student.name}
                          </strong>

                          <span>
                            {student.email}
                          </span>

                        </div>

                      </div>

                    </td>

                    <td>
                      {student.phone}
                    </td>

                    <td>
                      {student.course}
                    </td>

                    <td>
                      {student.year}
                    </td>

                    <td>
                      {student.gender}
                    </td>

                    <td>

                      <div className="student-actions">

                        <Link
                          to={`/students/${student.id}`}
                          className="table-action view-action"
                          title="View Student"
                        >

                          <Eye size={17} />

                        </Link>

                        <Link
                          to={`/students/edit/${student.id}`}
                          className="table-action edit-action"
                          title="Edit Student"
                        >

                          <Pencil size={17} />

                        </Link>

                        <button
                          className="table-action delete-action"
                          onClick={() =>
                            handleDelete(student.id)
                          }
                          title="Delete Student"
                        >

                          <Trash2 size={17} />

                        </button>

                      </div>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        )}

      </div>

    </div>

  );

}

export default Students;