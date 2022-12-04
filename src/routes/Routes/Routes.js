import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import ClassDetails from "../../pages/ClassDetails/ClassDetails";
import Classes from "../../pages/Classes/Classes/Classes";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import FAQ from "../../pages/FAQ/FAQ/FAQ";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";

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
                    return fetch('http://localhost:5000/classes');
                }
            },
            {
                path: "/classes",
                element: <Classes />,
                loader: () => {
                    return fetch('http://localhost:5000/classes');
                }
            },
            {
                path: "/classes/:id",
                element: <ClassDetails />,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/classes/${params.id}`);
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