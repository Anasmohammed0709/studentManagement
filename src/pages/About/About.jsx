import {
  GraduationCap, Users, BookOpen, LayoutDashboard,
  UserPlus, UserRound, ShieldCheck
} from "lucide-react";

import "./About.css";


function About() {

  return (

    <div className="about-page">

      <div className="about-header">

        <h1>
          About
        </h1>

        <p>
          Learn more about StudentHub.
        </p>

      </div>

      <div className="about-hero">

        <div className="about-logo">

          <GraduationCap size={40} />

        </div>

        <div className="about-hero-content">

          <h2>
            StudentHub
          </h2>

          <p>
            StudentHub is a simple student management
            system designed to help administrators manage
            students and courses in one convenient place.
          </p>

        </div>

      </div>

      <div className="about-grid">

        <div className="about-card">

          <div className="about-card-icon">

            <Users size={21} />

          </div>

          <h3>
            Student Management
          </h3>

          <p>
            Easily add, view, edit and delete student
            information from a single management system.
          </p>

        </div>

        <div className="about-card">

          <div className="about-card-icon">

            <BookOpen size={21} />

          </div>

          <h3>
            Course Management
          </h3>

          <p>
            Manage available courses and view the
            students enrolled in each course.
          </p>

        </div>

      </div>

      <div className="about-features">

        <h3>
          What You Can Do
        </h3>

        <div className="about-feature-list">

          <div className="about-feature">

            <LayoutDashboard size={18} />

            <span>
              View the dashboard
            </span>

          </div>

          <div className="about-feature">

            <UserPlus size={18} />

            <span>
              Add and manage students
            </span>

          </div>

          <div className="about-feature">

            <BookOpen size={18} />

            <span>
              Add and manage courses
            </span>

          </div>

          <div className="about-feature">

            <UserRound size={18} />

            <span>
              View student details
            </span>

          </div>

          <div className="about-feature">

            <ShieldCheck size={18} />

            <span>
              Keep student information organized
            </span>

          </div>

        </div>

      </div>

      <div className="about-footer">

        <p>
          StudentHub — Student Management System
        </p>

      </div>

    </div>

  );

}

export default About;