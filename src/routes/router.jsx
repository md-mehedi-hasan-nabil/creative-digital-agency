import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Layout from "../layout/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import AddService from "../pages/dashboard/AddService";
import UpdateService from "../pages/dashboard/UpdateService";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Home />
          </>
        ),
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: (
          <>
            <Login />
          </>
        ),
      },
      {
        path: "/register",
        element: (
          <>
            <Register />
          </>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "edit-service",
        element: <UpdateService />,
      },
      {
        path: "add-service",
        element: <AddService />,
      },
    ],
  },
]);
