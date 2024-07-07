import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./componets/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);
