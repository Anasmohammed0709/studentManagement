import {LayoutDashboard,Users,BookOpen,Info} from "lucide-react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-menu">

        <h4 className="menu-title">
          MAIN MENU
        </h4>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "sidebar-link active"
              : "sidebar-link"
          }
        >
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/students"
          className={({ isActive }) =>
            isActive
              ? "sidebar-link active"
              : "sidebar-link"
          }
        >
          <Users size={18} />
          <span>Students</span>
        </NavLink>

        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive
              ? "sidebar-link active"
              : "sidebar-link"
          }
        >
          <BookOpen size={18} />
          <span>Courses</span>
        </NavLink>

        <h4 className="menu-title">
          OTHER
        </h4>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "sidebar-link active"
              : "sidebar-link"
          }
        >
          <Info size={18} />
          <span>About</span>
        </NavLink>

      </div>

      <div className="sidebar-bottom">

        <p>StudentHub</p>

        <span>
          Management System
        </span>

      </div>

    </aside>
  );
}

export default Sidebar;