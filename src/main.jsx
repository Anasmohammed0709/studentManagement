import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { StudentProvider } from "./context/StudentContext";
import { CourseProvider } from "./context/CourseContext";

import "./Global.css";


ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <BrowserRouter>

      <StudentProvider>

        <CourseProvider>

          <App />

        </CourseProvider>

      </StudentProvider>

    </BrowserRouter>

  </React.StrictMode>

);