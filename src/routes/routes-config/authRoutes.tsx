import ChangePassword from "@/pages/auth/ChangePassword";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import VerifyOTP from "@/pages/auth/VerifyOTP";
import { Outlet } from "react-router-dom";


const authRoutes = {
    path: '',
    element: <Outlet />,
    children: [
        {
            path: '/register',
            element: <Register />
        },

        {
            path: '/login',
            element: <Login />
        },

        {
            path: '/verify-otp',
            element: <VerifyOTP />
        },

        {
            path: '/forgot-password',
            element: <ForgotPassword />
        },

        {
            path: '/change-password',
            element: <ChangePassword />
        }
    ]
}

export default authRoutes;