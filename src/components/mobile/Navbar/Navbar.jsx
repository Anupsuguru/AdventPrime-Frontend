import {CogIcon, HomeIcon, HomeModernIcon, MagnifyingGlassIcon, QrCodeIcon} from "@heroicons/react/16/solid/index.js";
import {NavLink} from "react-router-dom";
import {IconHome, IconHomeFilled, IconUser, IconUserFilled} from "@tabler/icons-react";

export default function Navbar(){
    return(
        <>
            <div className="min-w-full min-h-full relative flex flex-row items-center justify-center bg-gray-400 dark:bg-gray-900 ">
                <nav className="grid grid-cols-4 gap-1 min-h-full min-w-full mt-2 ">
                    <NavLink to="/" className="flex flex-col items-center justify-center">
                        {({isActive}) => isActive ? <IconHomeFilled size={48} color={"#ffffff"}/> : <IconHome stroke={2} size={48} color={"#ffffff"} /> }
                        {/*<HomeIcon className="size-[75%] text-white"/>*/}
                    </NavLink>
                    <NavLink to="/book/1" className="flex flex-col items-center justify-center">
                        <QrCodeIcon className="size-[75%]  text-gray-500"/>
                    </NavLink>
                    <NavLink to="/workshoplist" className="flex flex-col items-center justify-center">
                        <MagnifyingGlassIcon className="size-[75%] text-gray-500 "/>
                    </NavLink>
                    <NavLink to="/profile" className="flex flex-col items-center justify-center">
                        {({isActive}) => isActive ? <IconUserFilled size={48} color={"#ffffff"}/> : <IconUser stroke={2} size={48} color={"#ffffff"} /> }
                        {/*<CogIcon className="size-[75%] text-gray-500 "/>*/}
                    </NavLink>
                </nav>
            </div>
        </>
    )
}