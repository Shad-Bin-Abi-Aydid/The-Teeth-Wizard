import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../mainlayouts/MainLayouts";
import Home from "../pages/Home";
import About from "../components/About";
import AllTreatments from "../components/AllTreatments";
import MyAppointments from "../components/MyAppointments";
import Profile from "../components/Profile";
import Details from "../components/Details";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRouter from "../components/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/allTreatments",
        element: <AllTreatments></AllTreatments>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/myAppointments",
        element: <MyAppointments></MyAppointments>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <Profile></Profile>
          </PrivateRouter>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRouter>
            <Details></Details>
          </PrivateRouter>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/service.json");
          const data = await res.json();
          const singleData = data.find((d) => d.id == params.id);
          return singleData;
        },
      },
      {
        path: "/allTreatments/details/:id",
        element: (
          <PrivateRouter>
            <Details></Details>
          </PrivateRouter>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/service.json");
          const data = await res.json();
          const singleData = data.find((d) => d.id == params.id);
          return singleData;
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
