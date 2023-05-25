import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Blogs from "../Pages/Blogs";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn";
import Propile from "../Pages/Propile";
import Recipie from "../Pages/Recipie";
import Register from "../Pages/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://bd-chef-pro-server.vercel.app/chef"),
      },
      {
        path: "/propiles",
        element: <Propile />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/recipie/:id",
        element: (
          <PrivateRoute>
            <Recipie />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://bd-chef-pro-server.vercel.app/chef/${params.id}`),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
