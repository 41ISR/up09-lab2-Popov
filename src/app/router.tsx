import { createBrowserRouter } from "react-router-dom";
import LoginScreen from "../pages/Authorization/LoginScreen"
import MainScreen from "../pages/MainScreen/MainScreen";

export const router = createBrowserRouter([
    {
        index: true,
        element: <LoginScreen />,
    },
    {
        path: "chat",
        element: <MainScreen />,
    },
]);