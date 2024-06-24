import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {mobileRoutes} from "./routes/mobile-routes.jsx";
import {Navbar} from "./components/mobile/Navbar/Navbar.jsx";

const router  = createBrowserRouter(mobileRoutes);

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className="bg-white dark:bg-black h-screen w-screen">
        <React.StrictMode>
            {/*<App />*/}

            <RouterProvider router={router}/>
            <Navbar/>

        </React.StrictMode>,
    </div>

)
