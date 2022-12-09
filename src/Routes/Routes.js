import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Cast from "../Pages/Cast/Cast";
import CastDetails from "../Pages/CastDetails/CastDetails";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/cast',
                element: <Cast></Cast>
            },
            {
                path: '/cast-details/:id',
                element: <CastDetails></CastDetails>,
                loader: () =>fetch(``)
            }
        ]
    }
])

export default router;