import { createBrowserRouter } from "react-router-dom";
import Appoinment from "../../components/pages/Appoinment/Appoinment";
import Home from "../../components/pages/Home/Home";
import Login from "../../components/pages/RegistrationForm/Login/Login";
import Signup from "../../components/pages/RegistrationForm/Signup/Signup";
import Main from "../../Layout/Main/Main";

export const router=createBrowserRouter([
    {path:'/',element:<Main/>,children:[
        {path:'/',element:<Home/>},
        {path:'/appoinment',element:<Appoinment/>},
        {path:'/signup',element:<Signup/>},
        {path:'/login',element:<Login/>},
        {}
    ]}
])