import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {mobileRoutes} from "./routes/mobile-routes.jsx";
import Navbar from "./components/mobile/Navbar/Navbar.jsx";
// import NavBar from "./components/NavBar/NavBar.jsx";

// const router = createBrowserRouter(mobileRoutes);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: mobileRoutes,
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

        <React.StrictMode>
            <RouterProvider router={router}>
                <App />
            </RouterProvider>



            {/*<DevSupport ComponentPreviews={ComponentPreviews}*/}
            {/*            useInitialHook={useInitial}*/}
            {/*>*/}
            {/*  */}
            {/*</DevSupport>*/}

        </React.StrictMode>,

)
