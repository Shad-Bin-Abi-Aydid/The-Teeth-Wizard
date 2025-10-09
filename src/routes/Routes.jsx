import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../mainlayouts/MainLayouts";
import Home from "../pages/Home";
import About from "../components/About";
import AllTreatments from "../components/AllTreatments";
import MyAppointments from "../components/MyAppointments";
import Profile from "../components/Profile";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch("/service.json"),
            },
            {
                path:'/allTreatments',
                element:<AllTreatments></AllTreatments>
            },
            {
                path:'/myAppointments',
                element:<MyAppointments></MyAppointments>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            }
        ]
    }
])

export default router;