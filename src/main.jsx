import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import {mobileRoutes} from "./routes/mobile-routes.jsx";
import {PublicClientApplication} from '@azure/msal-browser';
import {
    AuthenticatedTemplate,
    MsalProvider,
    UnauthenticatedTemplate
} from '@azure/msal-react';
import {msalConfig} from "./auth/authConfig.jsx";
// Bootstrap components
import {Signin} from "./pages/mobile/Signin/Signin.jsx";
// import {Signin} from "./pages/mobile/Signin/Signin.jsx";


const msalInstance = new PublicClientApplication(msalConfig);
const router = createBrowserRouter([

    {
        path: "/",
        element: <App/>,
        children: mobileRoutes,

        // errorElement: <Error/>
    }
]);

// const router = createBrowserRouter(router);

ReactDOM.createRoot(document.getElementById('root')).render(

    <MsalProvider instance={msalInstance}>
        <AuthenticatedTemplate>
            <RouterProvider router={router}>
                <App/>
            </RouterProvider>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
            <Signin/>
        </UnauthenticatedTemplate>

    </MsalProvider>
)
