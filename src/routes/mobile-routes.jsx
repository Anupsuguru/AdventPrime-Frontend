import { Home } from "../pages/mobile/Home/Home.jsx";
import { Book } from "../pages/mobile/Book/Book.jsx";
import { Workshoplist } from "../pages/mobile/Workshoplist/Workshoplist.jsx";
import { Signin } from "../pages/mobile/Signin/Signin.jsx";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { redirect } from "react-router-dom";
import React from "react";
import { InteractionType } from "@azure/msal-browser";
import QrScreen from "../pages/mobile/QrScreen/QrScreen.jsx";
import Settings from "../pages/mobile/Settings/Settings.jsx";
import AboutUs from "../pages/mobile/AboutUs/AboutUs.jsx";
import TermsAndConditions from "../pages/mobile/TermsandCondition/TermsandCondition.jsx";

function Authcheck() {
  // const { instance, inProgress } = useMsal();
  //     // const isAuthenticated = useIsAuthenticated();
  //     // console.log("Check is auth");
  //     // console.log(isAuthenticated);
  //     // if (!isAuthenticated) {
  //     //     console.log(isAuthenticated);
  //     //     console.log("entering loader function")
  //     //     return redirect('/signin');
  //     // }
  //     // else {
  //     //     console.log(isAuthenticated);
  //     //     s=true;
  //     //     // return redirect("/");
  //     //     return null;
  //     // }

  const { accounts } = useMsal();
  console.log(accounts);
  const isAuthenticated = useIsAuthenticated();

  console.log(isAuthenticated);
  if (isAuthenticated) {
    return null;
  } else {
    return redirect("/signin");
  }
}

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
  // {
  //     path: "/signin",
  //     element: <Signin/>,
  //     errorElement: <div> This error</div>
  // },
];
