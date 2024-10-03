import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home";
import SuccessStoy from "../page/SuccessStoy";
import Contact from "../page/Contact";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/reviews",
        element: <SuccessStoy />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);