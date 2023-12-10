import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Auth from "../pages/Auth/Auth";
import NotFound from "../pages/NotFound/NotFound";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Home from "../pages/Home/Home";
import Dashboard from "../layout/Dashboard";
import DahboardHome from "../pages/Dashboard/Home/Home";
import Profile from "../pages/Dashboard/Profile/Profile";
import Users from "../pages/Dashboard/Users/Users";
import Courses from "../pages/Dashboard/Courses/Courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        {" "}
        <Dashboard></Dashboard>{" "}
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DahboardHome />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/users",
        element: <Users />,
      },
      {
        path: "/dashboard/courses",
        element: <Courses />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  // Not found route
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
