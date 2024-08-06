import './TicketComponent.css';
import { IconClock, IconMapPinFilled} from "@tabler/icons-react";
import {TicketDetails} from "../../../models/TicketDetails.jsx";
import "./ticket.css";
import {useState} from "react";


export default function TicketComponent({props}) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 300); // Reset the click state after 300ms
        props.onClick(); // Call the onClick prop to handle the bottom sheet opening
    };

    var titlestr1 = props.workshop_name.toString()
    const truncateTitle = (titlestr) => {
        if (titlestr.length > 30) {
            return titlestr.substring(0, 30) + '...';
        }
        return props.workshop_name;
    };
    var titlestr = truncateTitle(titlestr1)
    // let details = new TicketDetails(props);
    return(
        <>

        <div
            className={`relative h-full w-[95%] m-[2%] bg-gradient-to-b from-indigo-blue-card to-sky-blue-card rounded-xl ticket ${isClicked ? 'animate-click' : ''}`}
            onClick={handleClick}
            >
        <div className="relative pt-1.5 pl-3.5 min-h-fit min-w-fit">
            <h1 className="text-xl sarala-bold text-white">{titlestr}</h1>
            <h3 className="text-white ">by {props.conducted_by}</h3>
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
                                    <h3 className="sarala-regular font-normal dark:text-white">{props.workshop_location}</h3>
                                </div>

                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex-none mr-[2%]">
                                <IconClock size={32} color={"#ffffff"}/>
                            </div>
                            <div className="flex-1 ">
                                <div className="">
                                    <h2 className="sarala-regular font-normal dark:text-white">{props.time}</h2>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-span-2">

                </div>
                <div className="col-span-4 flex flex-col items-center dark:text-white">
                    <p className="sarala-regular font-medium">{props.day}</p>
                    <h2 className="text-xl sarala-bold">
                        {props.datenum}
                    </h2>
                    <p className="sarala-regular text-sm">
                        {props.datemo}
                    </p>
                </div>
            </div>
        </div>
        </div>


</>
)
}