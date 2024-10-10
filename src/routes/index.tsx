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
import Batch from "../pages/Dashboard/Batch/Batch";
import BatchDetails from "../pages/Dashboard/Batch/BatchDetails/BatchDetails";
import Teacher from "../pages/Teacher/Teacher";
import TeacherDetails from "../pages/Teacher/TeacherDetails/TeacherDetails";
import About from "../pages/About/About";
import LiveCourses from "../pages/LiveCourses/LiveCourses";
import VideoCourses from "../pages/VideoCourses/VideoCourses";
import Checkout from "../pages/Checkout/Checkout";
import Skills from "../pages/Dashboard/Skills/Skills";
import SuccessPayment from "../pages/Checkout/SuccessPayment";
import SocialLinks from "../pages/Dashboard/SocialLinks/SocialLinks";
import Notifications from "../pages/Dashboard/Notifications/Notifications";
import Faq from "../pages/Faq/Faq";
import MyCourses from "../pages/Dashboard/MyCourses/MyCourses";
import MyCourseDetails from "../pages/Dashboard/MyCourses/MyCourseDetails/MyCourseDetails";
import Terms from "../pages/Terms/Terms";
import Privacy from "../pages/Privacy/Privacy";
import Messenger from "../pages/Messenger/Messenger";
import UserProfile from "../pages/Profile/UserProfile";
import Orders from "../pages/Dashboard/Orders/Orders";
import ClassRoom from "../pages/Dashboard/ClassRoom/ClassRoom";
import Newslatter from "../pages/Dashboard/NewsLatter/Newslatter";
import Management from "../pages/Dashboard/Management/Management";
import Security from "../pages/Dashboard/Security/Security";
import Events from "../pages/Events/Events";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import BatchSchedule from "../pages/Dashboard/Batch/BatchSchedule";
import Exams from "../pages/Dashboard/MyCourses/MyCourseDetails/Exams/Exams";
import Exam from "../layout/Exam";
import ExamCenter from "../pages/ExamCenter/ExamCenter";
import DashboardEvents from "../pages/Dashboard/Events/Events";
import EventDetails from "../pages/Events/EventDetails/EventDetails";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/teachers",
        element: <Teacher />,
      },
      {
        path: "/teacher/:id",
        element: <TeacherDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/course-details",
        element: <CourseDetails />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/p/:id",
        element: <UserProfile />,
      },
      {
        path: "/live-courses",
        element: <LiveCourses />,
      },
      {
        path: "/video-courses",
        element: <VideoCourses />,
      },
      // Events
      {
        path: "/eventdetails/:id",
        element: (
          <ProtectedRoute>
            <EventDetails />
          </ProtectedRoute>
        ),
      },
      // Course Rotues
      {
        path: "/courses/checkout/:id",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "/courses/checkout/success/:id/:tranID",
        element: (
          <ProtectedRoute>
            <SuccessPayment />
          </ProtectedRoute>
        ),
      },
      {
        path: "/messenger",
        element: (
          <ProtectedRoute>
            <Messenger />
          </ProtectedRoute>
        ),
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
        path: "/dashboard/notifications",
        element: <Notifications />,
      },
      {
        path: "/dashboard/newslatter",
        element: <Newslatter />,
      },
      {
        path: "/dashboard/users",
        element: <Users />,
      },
      {
        path: "/dashboard/courses",
        element: <Courses />,
      },
      {
        path: "/dashboard/skills",
        element: <Skills />,
      },
      {
        path: "/dashboard/social-links",
        element: <SocialLinks />,
      },
      {
        path: "/dashboard/my-courses",
        element: <MyCourses />,
      },
      {
        path: "/dashboard/my-courses/:id",
        element: <MyCourseDetails />,
      },
      {
        path: "/dashboard/my-courses/exam/:id",
        element: <Exams />,
      },
      {
        path: "/dashboard/class-room",
        element: <ClassRoom />,
      },
      {
        path: "/dashboard/orders",
        element: <Orders />,
      },
      {
        path: "/dashboard/management",
        element: <Management />,
      },

      {
        path: "/dashboard/security",
        element: <Security />,
      },
      {
        path: "/dashboard/events",
        element: <DashboardEvents />,
      },
      {
        path: "/dashboard/batch/schedule/:id/:title",
        element: <BatchSchedule />,
      },

      {
        path: "/dashboard/batch",
        element: <Batch />,
        children: [
          {
            path: "/dashboard/batch/details",
            element: <BatchDetails />,
          },
        ],
      },
    ],
  },
  // Authentication
  {
    path: "/auth",
    element: <Auth />,
  },
  // Not found route
  {
    path: "*",
    element: <NotFound />,
  },
  // Exam
  {
    path: "/exam",
    element: (
      <ProtectedRoute>
        <Exam />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/exam/details",
        element: <ExamCenter />,
      },
    ],
  },
]);
export default router;
