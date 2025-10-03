import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../mainlayouts/MainLayouts";
import Home from "../pages/Home";
import About from "../components/About";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            }
        ]
    }
])

export default router;