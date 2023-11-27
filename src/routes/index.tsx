import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Auth from "../pages/Auth/Auth";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <div className="h-[2000px] bg-secondaryHover">
            <div className=" h-[500px] bg-primaryHover"></div>
            <div className="bg-secondaryHover h-[500px]"></div>
            <div className="bg-primaryHover h-[500px]"></div>
          </div>
        ),
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
