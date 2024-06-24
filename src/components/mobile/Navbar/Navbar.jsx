import {CogIcon, HomeIcon, MagnifyingGlassIcon, QrCodeIcon} from "@heroicons/react/16/solid/index.js";


export function Navbar(){
    return(
        <>
            <div className="bg-gray-400 dark:bg-gray-900 h-10 min-h-16 max-h-16 w-screen fixed bottom-0">
                <div className="grid grid-cols-4 gap-1 min-h-full min-w-full mt-2 ">
                    <div className=" items-center">
                        <HomeIcon className="size-[70%] text-white"/>
                    </div>
                    <div className="items-center">
                        <QrCodeIcon className="size-[70%]  text-gray-500"/>
                    </div>
                    <div className="items-center">
                        <MagnifyingGlassIcon className="size-[70%] text-gray-500 "/>
                    </div>
                    <div className="items-center">
                        <CogIcon className="size-[70%] text-gray-500 "/>
                    </div>
                </div>
            </div>
        </>
    )
}