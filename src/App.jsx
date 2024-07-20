import React from "react";
import './App.css'
import Navbar from "./components/mobile/Navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";



// const msalInstance = new PublicClientApplication(msalConfig);

function App() {
    // const router = createBrowserRouter([
//
//     {
//         path: "/",
//         element: <App/>,
//         children: mobileRoutes,
//     }
// ]);
//     const router = createBrowserRouter(mobileRoutes);

    return (
        <>

            <div className="h-dvh w-dvw relative bg-white dark:bg-black ">
                <div className="min-h-[90%] max-h-[90%] h-[90%] w-dvw relative overflow-y-auto no-scrollbar">
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


