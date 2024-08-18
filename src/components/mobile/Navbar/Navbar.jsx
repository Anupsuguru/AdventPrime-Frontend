import { NavLink } from "react-router-dom";
import {
  IconHome,
  IconQrcode,
  IconSearch,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";

export default function Navbar() {
  return (
    <>
      <div className="min-w-full min-h-full relative flex flex-row items-center justify-center bg-gray-400 dark:bg-[#282828] ">
        <nav className="grid grid-cols-4 gap-1 min-h-full min-w-full ">
          <NavLink to="/" className="flex flex-col items-center justify-center">
            {({ isActive }) =>
              isActive ? (
                <IconHome stroke={2} size={40} color={"#ffffff"} />
              ) : (
                <IconHome stroke={1} size={40} color={"#ffffff"} />
              )
            }
            {/*<HomeIcon className="size-[75%] text-white"/>*/}
          </NavLink>
          <NavLink
            to="/qrscreen"
            className="flex flex-col items-center justify-center"
          >
            {({ isActive }) =>
              isActive ? (
                <IconQrcode stroke={2} size={40} color={"#ffffff"} />
              ) : (
                <IconQrcode stroke={1} size={40} color={"#ffffff"} />
              )
            }
            {/*<QrCodeIcon className="size-[75%]  text-gray-500"/>*/}
          </NavLink>
          <NavLink
            to="/workshoplist"
            className="flex flex-col items-center justify-center"
          >
            {({ isActive }) =>
              isActive ? (
                <IconSearch stroke={2} size={40} color={"#ffffff"} />
              ) : (
                <IconSearch stroke={1} size={40} color={"#ffffff"} />
              )
            }
            {/*<MagnifyingGlassIcon className="size-[75%] text-gray-500 "/>*/}
          </NavLink>
          <NavLink
            to="/settings"
            className="flex flex-col items-center justify-center"
          >
            {({ isActive }) =>
              isActive ? (
                <IconSettings stroke={2} size={40} color={"#ffffff"} />
              ) : (
                <IconSettings stroke={1} size={40} color={"#ffffff"} />
              )
            }
            {/*<CogIcon className="size-[75%] text-gray-500 "/>*/}
          </NavLink>
        </nav>
      </div>
    </>
  );
}
