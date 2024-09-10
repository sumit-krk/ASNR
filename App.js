import React from "react";
import ReactDOM from "react-dom";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
// const heading=React.createElement("h1",{id:'heding'},"Hello World In React yes");
// root.render(heading)
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
  } from "react-router-dom";
import { Error } from "./src/components/Error";
import { Contact } from "./src/components/Contact";
import { About } from "./src/components/About";

const AppLayout=()=>{
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
    //   {
    //     path:"restaurants/:resId",
    //     element: <RestaurantMenu/>
    //   }
    ],
    errorElement: <Error />
  },
]);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />)