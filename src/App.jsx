
import './App.css'
import React from "react";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {mobileRoutes} from "./routes/mobile-routes.jsx";
import Navbar from "./components/mobile/Navbar/Navbar.jsx";





function App() {
    const router = createBrowserRouter(mobileRoutes);
  return (
      <>
          <div className="h-dvh w-dvw relative bg-white dark:bg-black ">
              <div className="h-[90%] w-dvw relative">
                  <Outlet/>
              </div>

              <div className="h-[10%] w-dvw fixed bottom-0">
                  <Navbar/>
              </div>

          </div>
      </>
  )
}

export default App
