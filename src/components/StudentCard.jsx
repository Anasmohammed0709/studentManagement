import { Link } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";
import "./StudentCard.css";

function StudentCard({ student }) {
  return (
    <div className="student-card">

      <div className="student-card-left">

        <div className="student-avatar">
          {student.name?.charAt(0).toUpperCase()}
        </div>

        <div className="student-card-info">

          <h4>
            {student.name}
          </h4>

          <div className="student-email">
            <Mail size={14} />
            <span>{student.email}</span>
          </div>

        </div>

      </div>

      <div className="student-card-details">

        <span className="student-course">
          {student.course}
        </span>

        <span className="student-year">
          {student.year}
        </span>

      </div>

      <Link
        to={`/students/${student.id}`}
        className="student-view-btn"
      >
        View
        <ArrowRight size={14} />
      </Link>

    </div>
  );
}

export default StudentCard;