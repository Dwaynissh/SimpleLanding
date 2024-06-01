import {createBrowserRouter } from "react-router-dom"
import Layout from "../Components/LayoutHolder/Layout"
import Registration from "../Pages/Registration"
import Homescreen from "../Pages/Homescreen"

export const Mainrouter =  createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Homescreen />
                }
            ]
        },
        {
            path: "/register",
            element: <Registration/>
        }
    ]       
)