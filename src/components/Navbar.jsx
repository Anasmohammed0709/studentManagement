import {GraduationCap,UserCircle} from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">

        <GraduationCap size={25} />

        <span className="logo-1">
          Student<span className="logo-2">Hub</span>
        </span>

      </div>

      <div className="navbar-right">

        <div className="profile">

          <div className="profile-avatar">
            <UserCircle size={30} />
          </div>

          <div className="profile-info">

            <h4>
              Admin
            </h4>

            <span>
              Administrator
            </span>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;