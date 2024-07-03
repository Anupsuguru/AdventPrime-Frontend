import './TicketComponent.css';
import {ClockIcon, MapPinIcon} from "@heroicons/react/16/solid/index.js";
import {IconBrandGoogleMaps, IconClock, IconMapPinFilled} from "@tabler/icons-react";

export default function TicketComponent() {

    return(
        <>
            <div className="relative h-full w-full m-[2%] bg-gradient-to-b from-indigo-blue-card to-sky-blue-card rounded-xl ">
                <div className="relative pt-1.5 pl-3.5 min-h-fit min-w-fit">
                    <h1 className="text-xl sarala-bold text-white">Introduction to Large Lang...</h1>
                    <h3 className="text-white ">by Noname</h3>
                </div>
                <div className="relative p-[5%] pb-[3%]">
                    <div className="grid grid-cols-12">
                        <div className="col-span-6">
                            <div className="grid grid-rows-2">
                                <div className="flex items-center">
                                    <div className="flex-none mr-[2%]">
                                        <IconMapPinFilled size={32} color={"#ffffff"}/>
                                    </div>
                                    <div className="flex-1 ">
                                        <div className="">
                                            <h2 className="sarala-regular font-medium dark:text-white">300 Oulette</h2>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex-none mr-[2%]">
                                        <IconClock size={32} color={"#ffffff"}/>
                                    </div>
                                    <div className="flex-1 ">
                                        <div className="">
                                            <h2 className="sarala-regular font-medium dark:text-white">14:30 - 15:30 ET</h2>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-span-2">

                        </div>
                        <div className="col-span-4 flex flex-col items-center dark:text-white">
                            <p className="sarala-regular font-medium">Wednesday</p>
                            <h2 className="text-lg sarala-bold">
                                06
                            </h2>
                            <p className="sarala-regular font-medium">
                                July 2024
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/*<div className="relative bg-gradient-to-b from-indigo-blue-card to-sky-blue-card h-1/2 w-[95%] ml-[2%] mr-[2%] rounded-xl">*/}
            {/*    <div className=" m-[2%] ">*/}
            {/*        <h1 className="text-xl sarala-bold text-white">Title of workshop</h1>*/}
            {/*        <h3 className="text-white ">Conducted by</h3>*/}
            {/*    </div>*/}
            {/*    /!*Top part*!/*/}


            {/*    /!*Notch divides the div into two*!/*/}
            {/*    <div className="">*/}
            {/*        <div className="absolute rounded-full w-5 h-5  -mt-3 -left-1 bg-white dark:bg-black" ></div>*/}
            {/*        <div className="absolute rounded-full w-5 h-5  -mt-3 -right-1 bg-white dark:bg-black"></div>*/}
            {/*    </div>*/}
            {/*    /!*Bottom part*!/*/}
            {/*    <div className="grid grid-cols-2 gap-1">*/}
            {/*        <div>*/}
            {/*            /!*Location and Time*!/*/}
            {/*            <div className="flex">*/}
            {/*                /!*TODO: Need to change margin-left 25% to justify, currently justify-center not working*!/*/}
            {/*                <div className="flex-1">*/}
            {/*                    <MapPinIcon className="size-3/5 ml-1/4 text-white"/>*/}
            {/*                </div>*/}
            {/*                <div className="flex-auto">*/}
            {/*                    <p className="text-white">Location</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="flex">*/}
            {/*                /!*TODO: Need to change margin-left 20% to justify, currently justify-center not working*!/*/}
            {/*                <div className="flex-1">*/}
            {/*                    <ClockIcon className="size-1/2 ml-1/5 text-white"/>*/}
            {/*                    /!*<MapPinIcon className="size-3/5 ml-1/4 text-white"/>*!/*/}
            {/*                </div>*/}
            {/*                <div className="flex-auto">*/}
            {/*                    <p className="text-white">Time</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            /!*Date*!/*/}

            {/*        </div>*/}
            {/*    </div>*/}

            {/*</div>*/}

        </>
    )
}