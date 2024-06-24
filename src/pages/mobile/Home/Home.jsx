import ArcProgressBar from "../../../components/mobile/ArcProgressBar/ArcProgressBar.jsx";
import {homemock} from "../../../mockup/homemock.jsx";
import TicketComponent from "../../../components/mobile/TicketComponent";
// import PillComponent from "../../../components/mobile/PillComponent/PillComponent.jsx";
import PillComponent from "../../../components/mobile/PillComponent";
import RelevantItemCard from "../../../components/mobile/RelevantItemCard/RelevantItemCard.jsx";


export function Home(){


    return (
        <>
            <div className="min-h-max min-w-full">
                {/* Topbar*/}
                <div className="min-h-20 max-h-30 min-w-full">

                    <p className="text-black dark:text-white">topbar</p>
                </div>

                {/* Guagecluster*/}
                <div className="flex justify-center">
                    <ArcProgressBar progress={0.25}/>
                </div>

                {/*Upcoming details*/}
                <div className="grid grid-cols-6 gap-0 min-h-20 max-h-30 min-w-full">
                    <div className="col-span-2 flex flex-col items-center justify-center">
                        <h1 className="text-black text-4xl w-min dark:text-white ">
                            {homemock.scheduled.length}
                        </h1>

                        <p className="text-black w-min dark:text-white">
                            Scheduled
                        </p>
                    </div>
                    <div className="col-span-2">
                    </div>
                    <div className="col-span-2 flex flex-col items-center justify-center">
                        <h1 className="text-black text-4xl dark:text-white">
                            {homemock.waitinglist}
                        </h1>
                        <p className="text-black dark:text-white">
                            Waiting list
                        </p>
                    </div>
                </div>

                {/*Tickets for upcoming workshop*/}
                <div className="ml-2.5 mt-1/20 mb-[2.5%]">
                    <h3 className="text-lg text-white">Upcoming</h3>
                </div>
                <div>
                    {/*<TicketComponent/>*/}
                </div>

                {/*Chosen Preferences*/}
                <div className="ml-2.5 mt-1/20 mb-[2.5%]">
                    <h3 className="text-lg text-white">Preferences</h3>
                </div>
                <div className="min-h-1/4">
                    <div className="grid grid-cols-2 gap-1 m-1 ">
                        <div className="place-self-auto">
                            <PillComponent content={{name: 'AI', color: "#FFD33B"}}/>
                        </div>
                        <div className="place-self-auto">
                            <PillComponent content={{name: 'Data', color: "#EA8600"}}/>
                        </div>
                        <div className="place-self-auto">
                            <PillComponent content={{name: 'Cloud', color: "#34A853"}}/>
                        </div>
                        <div className="place-self-auto">
                            <PillComponent content={{name: 'AI', color: "#4285f4"}}/>
                        </div>
                    </div>

                </div>
                <div className="ml-2.5 mt-1/20 mb-[2.5%]">
                    <h3 className="text-lg text-white">You might be interested in...</h3>
                </div>
                <div className="min-h-32">
                    <RelevantItemCard content={{name:"Introduction to spark", by:"Ali" ,date:"Aug 12"}}/>
                    <RelevantItemCard content={{name:"Introduction to spark", by:"Ali" ,date:"Aug 12"}}/>
                    <RelevantItemCard content={{name:"Introduction to spark", by:"Ali" ,date:"Aug 12"}}/>
                    <RelevantItemCard content={{name:"Introduction to spark", by:"Ali" ,date:"Aug 12"}}/>
                </div>

            </div>

        </>
    )
}

