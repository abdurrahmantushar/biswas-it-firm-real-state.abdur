import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../components/pages/Home";
import { AdminLogin } from "../components/pages/AdminLogin";
import { AdminDashboard } from "../components/admin/AdminDashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/admin-login",
        element: <AdminLogin />,
    },
    {
        path : '/admin-dashboard',
        element : <AdminDashboard/>
    }
]);