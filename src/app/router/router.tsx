import { createBrowserRouter } from "react-router-dom";
import LoginScreen from "../../pages/Authorization/LoginScreen"
import Auth from "../../components/Auth/Auth";
import { URLs } from "./URL";
import MainScreen from "../../pages/MainScreen/MainScreen";

export const router = createBrowserRouter([
    {
        path: URLs.CHAT,
        element: <Auth />,
        children: [{
            path: URLs.CHAT,
            element: <MainScreen />
        }]
    },
    {
        path: URLs.LOGIN,
        element: <LoginScreen />,
    },
]);