import './TicketComponent.css';
import {ClockIcon, MapPinIcon} from "@heroicons/react/16/solid/index.js";

export default function TicketComponent() {

    return(
        <>
            <div className="bg-gradient-to-b from-indigo-blue-card to-sky-blue-card min-h-1/4 min-w-11/12 ml-[2%] mr-[2%] rounded-lg">
                {/*Top part*/}
                <h1 className="text-2xl font-bold text-white mt-[1%] ml-[2%]">Title of workshop</h1>
                <h3 className="text-white font-medium mt-[1%] ml-[2%]">Conducted by</h3>
                {/*Notch divides the div into two*/}
                <div className="">
                    <div className="absolute rounded-full w-5 h-5  -mt-3 -left-1 bg-white dark:bg-black" ></div>
                    <div className="absolute rounded-full w-5 h-5  -mt-3 -right-1 bg-white dark:bg-black"></div>
                </div>
                {/*Bottom part*/}
                <div className="grid grid-cols-2 gap-1">
                    <div>
                        {/*Location and Time*/}
                        <div className="flex">
                            {/*TODO: Need to change margin-left 25% to justify, currently justify-center not working*/}
                            <div className="flex-1">
                                <MapPinIcon className="size-3/5 ml-1/4 text-white"/>
                            </div>
                            <div className="flex-auto">
                                <p className="text-white">Location</p>
                            </div>
                        </div>
                        <div className="flex">
                            {/*TODO: Need to change margin-left 20% to justify, currently justify-center not working*/}
                            <div className="flex-1">
                                <ClockIcon className="size-1/2 ml-1/5 text-white"/>
                                {/*<MapPinIcon className="size-3/5 ml-1/4 text-white"/>*/}
                            </div>
                            <div className="flex-auto">
                                <p className="text-white">Time</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/*Date*/}

                    </div>
                </div>

            </div>

        </>
    )
}