import { SearchX, ArrowLeft } from "lucide-react";

import { Link } from "react-router-dom";

import "./NotFound.css";

function NotFound() {

  return (

    <div className="not-found-page">

      <div className="not-found-content">

        <div className="not-found-number">
          404
        </div>

        <SearchX
          size={45}
          className="not-found-icon"
        />

        <h1>
          Page Not Found
        </h1>

        <p>
          Sorry, the page you're looking for
          doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="not-found-home-btn"
        >

          <ArrowLeft size={16} />

          Back to Dashboard

        </Link>

      </div>

    </div>
  );
}

export default NotFound;