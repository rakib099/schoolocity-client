import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Classes from "../../pages/Classes/Classes/Classes";
import FAQ from "../../pages/FAQ/FAQ/FAQ";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Classes />
            },
            {
                path: "/classes",
                element: <Classes />
            },
            {
                path: "/faq",
                element: <FAQ />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
]);