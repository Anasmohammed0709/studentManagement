import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import StudentDetails from "./pages/StudentDetails";
import Courses from "./pages/Courses";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import AddCourse from "./pages/AddCourse";


function App() {
  return (
    <div className="app">

      <Navbar />

      <div className="app-body">

        <Sidebar />

        <main className="main-content">

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/students"
              element={<Students />}
            />

            <Route
              path="/students/add"
              element={<AddStudent />}
            />

            <Route
              path="/students/:id"
              element={<StudentDetails />}
            />

            <Route
              path="/students/edit/:id"
              element={<EditStudent />}
            />

            <Route
              path="/courses"
              element={<Courses />}
            />

            <Route
              path="/courses/add"
              element={<AddCourse />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>

        </main>

      </div>

    </div>
  );
}

export default App;