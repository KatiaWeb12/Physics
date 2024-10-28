import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoutePage from "../pages/route page/RoutePage";

const router = createBrowserRouter([
   {
     path: "/",
     element: <RoutePage/>,
   },
 ]);

export default function RootRouter(){
    return(
         <RouterProvider router={router} />
    )
}