import { Home } from "../pages/mobile/Home/Home.jsx";
import { Book } from "../pages/mobile/Book/Book.jsx";
import { Workshoplist } from "../pages/mobile/Workshoplist/Workshoplist.jsx";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { redirect } from "react-router-dom";
import React from "react";
import QrScreen from "../pages/mobile/QrScreen/QrScreen.jsx";
import Settings from "../pages/mobile/Settings/Settings.jsx";
import AboutUs from "../pages/mobile/AboutUs/AboutUs.jsx";
import TermsAndConditions from "../pages/mobile/TermsandCondition/TermsandCondition.jsx";

export const mobileRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/book/:id",
    element: <Book />,
  },
  {
    path: "/workshoplist",
    element: <Workshoplist />,
  },
  {
    path: "/qrscreen",
    element: <QrScreen />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/termsandcond",
    element: <TermsAndConditions />,
  },
];
