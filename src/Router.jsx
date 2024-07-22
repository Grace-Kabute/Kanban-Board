import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts";
import Home from "./Routes/Home";
import Projects from "./Routes/Projects";
import Members from "./Routes/Members";
import Settings from "./Routes/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/members",
        element: <Members />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
