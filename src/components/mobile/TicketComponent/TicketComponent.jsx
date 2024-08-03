import './TicketComponent.css';
import { IconClock, IconMapPinFilled} from "@tabler/icons-react";
import {TicketDetails} from "../../../models/TicketDetails.jsx";
import "./ticket.css";


export default function TicketComponent({props}) {
    let details = new TicketDetails(props);
    return(
        <>
            <div className="relative h-full w-[95%] m-[2%] bg-gradient-to-b from-indigo-blue-card to-sky-blue-card rounded-xl ticket">
                <div className="relative pt-1.5 pl-3.5 min-h-fit min-w-fit">
                    <h1 className="text-xl sarala-bold text-white">{details.title}</h1>
                    <h3 className="text-white ">by {details.conductor}</h3>
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
                                            <h3 className="sarala-regular font-normal dark:text-white">{details.address}</h3>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex-none mr-[2%]">
                                        <IconClock size={32} color={"#ffffff"}/>
                                    </div>
                                    <div className="flex-1 ">
                                        <div className="">
                                            <h2 className="sarala-regular font-normal dark:text-white">{details.time}</h2>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-span-2">

                        </div>
                        <div className="col-span-4 flex flex-col items-center dark:text-white">
                            <p className="sarala-regular font-medium">{details.day}</p>
                            <h2 className="text-lg sarala-bold">
                                {details.datenum}
                            </h2>
                            <p className="sarala-regular font-medium">
                                {details.datemo}
                            </p>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}