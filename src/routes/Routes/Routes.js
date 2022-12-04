import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Classes from "../../pages/Classes/Classes/Classes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Classes />
            }
        ]
    }
]);