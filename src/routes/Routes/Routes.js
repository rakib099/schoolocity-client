import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../../pages/About/About/About";
import Blog from "../../pages/Blog/Blog";
import Checkout from "../../pages/Checkout/Checkout/Checkout";
import ClassDetails from "../../pages/ClassDetails/ClassDetails";
import Classes from "../../pages/Classes/Classes/Classes";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import FAQ from "../../pages/FAQ/FAQ/FAQ";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Classes />,
                loader: () => {
                    return fetch('https://schoolocity-server-side.vercel.app/classes');
                }
            },
            {
                path: "/classes",
                element: <Classes />,
                loader: () => {
                    return fetch('https://schoolocity-server-side.vercel.app/classes');
                }
            },
            {
                path: "/classes/:id",
                element: <ClassDetails />,
                loader: ({ params }) => {
                    return fetch(`https://schoolocity-server-side.vercel.app/classes/${params.id}`);
                }
            },
            {
                path: "/class-:id/checkout",
                element: <PrivateRoute> <Checkout /> </PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`https://schoolocity-server-side.vercel.app/classes/${params.id}`);
                }
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
                path: "/about",
                element: <About />
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