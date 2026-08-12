import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

import Dashboard from "./pages/Dashboard/Dashboard";
import Students from "./pages/Students/Students";
import AddStudent from "./pages/Students/AddStudent";
import EditStudent from "./pages/Students/EditStudent";
import StudentDetails from "./pages/Students/StudentDetails";
import Courses from "./pages/Courses/Courses";
import About from "./pages/About/About";
import NotFound from "./pages/Other/NotFound";
import AddCourse from "./pages/Courses/AddCourse";


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