
import {Home} from "../pages/mobile/Home/Home.jsx";
import {Book} from "../pages/mobile/Book/Book.jsx";
import {Workshoplist} from "../pages/mobile/Workshoplist/Workshoplist.jsx";
import Profile from "../pages/mobile/Profile/Profile.jsx";


export const mobileRoutes = [
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/book/:id",
        element: <Book/>
    },
    {
        path: "/workshoplist",
        element: <Workshoplist/>
    },
    {
        path:"/profile",
        element: <Profile/>
    }
];