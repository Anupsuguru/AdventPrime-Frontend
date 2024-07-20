import ArcProgressBar from "../../../components/mobile/ArcProgressBar/ArcProgressBar.jsx";
import {homemock} from "../../../mockup/homemock.jsx";
import logo from"../../../assets/logo.png";
import TicketComponent from "../../../components/mobile/TicketComponent";
import {IconBell} from "@tabler/icons-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export function Home(){
    const customText= [
        { text: "08", size: "32px", color: "#33BBEA", x: 100, y: 94, font:"Sarala" },
        { text: "Attended", size: "14px", color: "#33BBEA", x: 100, y: 122, font:"Sarala" }
    ]

    // TODO: Whoever reads this, Delete this code ASAP
    // const { instance, accounts } = useMsal();
    // console.log(instance
    //     .acquireTokenSilent({
    //         ...loginRequest,
    //         account: accounts[0],
    //     }));

    // Till here


    var settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <div className="overflow-hidden relative overflow-y-scroll dark:bg-black">
                {/*Topbar*/}
                <div className=" relative h-1/4 w-dvw mt-4 flex justify-center items-center">
                    <div className="w-11/12 min-h-max grid grid-cols-12">
                        <div className="logo col-span-2 flex justify-center items-center">
                            {/*<img src=""*/}
                            <img src={logo}/>
                        </div>
                        <div className="col-span-8">

                        </div>
                        <div className="col-span-2 flex justify-center items-center">
                            <IconBell color={"#ffffff"} size={36}/>
                        </div>

                    </div>
                </div>

                {/*Guagecluster*/}
                <div className="h-1/2 w-full relative flex justify-center">
                    <ArcProgressBar progress={0.75} customText={customText}/>
                </div>

                {/*Upcoming details*/}
                <div className="h-2/6 w-full grid grid-cols-6 gap-0">
                    <div className="col-span-2 flex flex-col items-center justify-center">
                        <h1 className="text-4xl dark:text-white ">
                            {homemock.scheduled.length}
                        </h1>

                        <p className="sarala-bold dark:text-white">
                            Scheduled
                        </p>
                    </div>
                    <div className="col-span-2">
                    </div>
                    <div className="col-span-2 flex flex-col items-center justify-center">
                        <h1 className=" text-4xl dark:text-white">
                            {homemock.waitinglist}
                        </h1>
                        <p className=" sarala-bold dark:text-white">
                            Waiting list
                        </p>
                    </div>
                </div>

                {/*/!*Tickets for upcoming workshop*!/*/}
                <div className="ml-2.5 mt-1/20 mb-[2.5%]">
                    <h3 className="text-lg sarala-bold dark:text-white">Upcoming</h3>
                </div>
                <div className="relative h-1/2 w-[99%]">
                    <Slider {...settings}>
                        {homemock.scheduled.map((item) => (
                            <div key={item.id}>
                                <TicketComponent props={item}/>
                            </div>
                        ))}
                    </Slider>

                </div>

                {/*/!*Chosen Preferences*!/*/}
                <div className="ml-2.5 mt-1/20 mb-[2.5%]">
                    <h3 className="text-lg sarala-bold dark:text-white">Preferences</h3>
                </div>
                <div className="relative grid grid-cols-2 grid-rows-2 h-1/2 w-[98%] gap-4">
                    <div className="flex flex-col items-end">
                        <div
                            className="inline-flex items-center px-16 py-3 rounded-full text-xl sarala-bold font-extrabold bg-[#ffd33b] dark:text-black ">
                            <span>AI</span>
                        </div>
                    </div>
                    <div>
                        <div
                            className="inline-flex items-center  px-14 py-3 rounded-full text-xl sarala-bold font-extrabold bg-[#4285f4] dark:text-black ">
                            <span>Cloud</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <div
                            className="inline-flex items-center  px-14 py-3 rounded-full text-xl sarala-bold font-extrabold bg-[#ea8600] dark:text-black ">
                            <span>Data</span>
                        </div>
                    </div>
                    <div>
                        <div
                            className="inline-flex items-center  px-12 py-3 rounded-full text-xl sarala-bold font-extrabold bg-[#34a853] dark:text-black ">
                            <span>Python</span>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

