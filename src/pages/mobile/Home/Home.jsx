import ArcProgressBar from "../../../components/mobile/ArcProgressBar/ArcProgressBar.jsx";
import {homemock} from "../../../mockup/homemock.jsx";
import logo from"../../../assets/logo.png";
import TicketComponent from "../../../components/mobile/TicketComponent";
import {IconBell} from "@tabler/icons-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ListCard from "../../../components/mobile/ListCard/index.jsx";
import {loginRequest} from "../../../auth/authConfig.jsx";
import {useMsal} from "@azure/msal-react";
import axios from "axios";
import {useEffect, useRef, useState} from "react";
import {BasicInfo} from "../../../models/BasicInfo.jsx";
import {Button} from "@mui/material";


export function Home(){
    const [customText, setCustomText] = useState(
        [
            { text: "00", size: "32px", color: "#33BBEA", x: 100, y: 94, font:"Sarala" },
            { text: "Attended", size: "14px", color: "#33BBEA", x: 100, y: 122, font:"Sarala" }
        ]
    );
    // const customText= [
    //     { text: "08", size: "32px", color: "#33BBEA", x: 100, y: 94, font:"Sarala" },
    //     { text: "Attended", size: "14px", color: "#33BBEA", x: 100, y: 122, font:"Sarala" }
    // ]
    const cardDetails = [
        { color: '#FF7F50', title: 'Introduction to Spark', conductor: 'Ali', date: 'Aug 12' },
        { color: '#32CD32', title: 'Advanced Data Clustering...', conductor: 'Ali', date: 'Aug 20' },
        { color: '#1E90FF', title: 'Beginners guide to Azure', conductor: 'Ali', date: 'Aug 20' },
    ];

    // TODO: Whoever reads this, Delete this code ASAP

    // const token = instance.

    const { instance, accounts } = useMsal();
    const initialData = {
        content: {
            no_of_workshop_attended: 0,
            no_of_workshop_waitlisted: 0,
            no_of_workshop_scheduled: 0,
            preferences: []
        }
    };
    const [basicinfo, setBasicinfo] = useState(new BasicInfo(initialData));
    // let accessToken = useRef("");
    const [accessToken, setAccessToken] = useState("");
    useEffect(() => {
        const getAccessToken = async () => {
            try {
                const response = await instance.acquireTokenSilent({
                    ...loginRequest,
                    account: accounts[0],
                });
                setAccessToken(response.accessToken);
                console.log(response.accessToken)
                // accessToken = await response.accessToken
            } catch (error) {
                console.error(error);
            }
        };

        getAccessToken();
    }, [instance, accounts]);

    // const tokenstring = await gettoken()
    // axios.defaults.headers.common['Authentication'] = 'Bearer '+accessToken;
    axios.defaults.headers.common['Authorization'] = 'Bearer '+accessToken;
    // console.log(accessToken);
    // console.log(instance
    //     .acquireTokenSilent({
    //         ...loginRequest,
    //         account: accounts[0],
    //     }));

    useEffect(() => {
        if (accessToken) {
            axios.get("http://localhost:8000/", {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }).then(
                (response) => {
                    if (response.status === 200) {
                        setBasicinfo(new BasicInfo(response.data));
                    }
                }
            ).catch(error => {
                console.error(error);
            });
        }
    }, [accessToken]);
    // console.log(basicinfo)
    const [attendedpercent, setAttendedpercent] = useState(0);
    // var gridCols = useRef(0);
    const [gridCols, setgridCols]=useState(0);
    const [gridRows,setgridRows]=useState(0);
    // var gridRows= useRef(0);
    useEffect(() => {
        setAttendedpercent(basicinfo.no_of_workshop_attended * 0.1);
        // console.log(basicinfo.no_of_workshop_attended);
        setCustomText([
            { text: "0"+basicinfo.no_of_workshop_attended.toString(), size: "32px", color: "#33BBEA", x: 100, y: 94, font:"Sarala" },
            { text: "Attended", size: "14px", color: "#33BBEA", x: 100, y: 122, font:"Sarala" }
        ])

        setgridCols(basicinfo.preferences.length > 2 ? 2 : basicinfo.preferences.length);
        // console.log(basicinfo.preferences.length > 2 ? 2 : basicinfo.preferences.length)
        setgridRows(Math.ceil(basicinfo.preferences.length / 2));
        // console.log(Math.ceil(basicinfo.preferences.length / 2))
    }, [basicinfo.no_of_workshop_attended]);
    // setAttendedpercent(basicinfo.no_of_workshop_attended*0.1);

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
                    <ArcProgressBar progress={attendedpercent} customText={customText}/>
                </div>

                {/*Upcoming details*/}
                <div className="h-2/6 w-full grid grid-cols-6 gap-0">
                    <div className="col-span-2 flex flex-col items-center justify-center">
                        <h1 className="text-4xl dark:text-white ">
                            {/*{homemock.scheduled.length}*/}
                            {basicinfo.no_of_workshop_scheduled}
                        </h1>

                        <p className="sarala-bold dark:text-white">
                            Scheduled
                        </p>
                    </div>
                    <div className="col-span-2">
                    </div>
                    <div className="col-span-2 flex flex-col items-center justify-center">
                        <h1 className=" text-4xl dark:text-white">
                            {/*{homemock.waitinglist}*/}
                            {basicinfo.no_of_workshop_waitlisted}
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
                {/*<div className="relative grid grid-cols-2 grid-rows-2 h-1/2 w-[98%] gap-4">*/}
                {/*    <div className="flex flex-col items-end">*/}
                {/*        <Button*/}
                {/*            variant="contained"*/}
                {/*            sx={{*/}
                {/*                borderRadius: '20px', // Adjust the value to make it more or less rounded*/}
                {/*                padding: '10px 20px', // Adjust padding as needed*/}
                {/*                backgroundColor: '#ffd33b', // Customize the background color*/}
                {/*                color: '#000000', // Customize the text color*/}
                {/*                width: '90%',*/}
                {/*                fontSize: '100%',*/}
                {/*                // fontFamily:'sarala-bold',*/}
                {/*                fontWeight:800,*/}
                {/*            }}*/}
                {/*            >*/}
                {/*            AI*/}
                {/*        </Button>*/}
                {/*        /!*<div*!/*/}
                {/*        /!*    className="inline-flex items-center px-16 py-3 rounded-full text-xl sarala-bold font-extrabold bg-[#ffd33b] dark:text-black ">*!/*/}
                {/*        /!*    <span>AI</span>*!/*/}
                {/*        /!*</div>*!/*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        /!*<div*!/*/}
                {/*        /!*    className="inline-flex items-center  px-14 py-3 rounded-full text-xl sarala-bold font-extrabold bg-[#4285f4] dark:text-black ">*!/*/}
                {/*        /!*    <span>Cloud</span>*!/*/}
                {/*        /!*</div>*!/*/}
                {/*        <Button*/}
                {/*            variant="contained"*/}
                {/*            sx={{*/}
                {/*                borderRadius: '20px', // Adjust the value to make it more or less rounded*/}
                {/*                padding: '10px 20px', // Adjust padding as needed*/}
                {/*                backgroundColor: '#ffd33b', // Customize the background color*/}
                {/*                color: '#000000', // Customize the text color*/}
                {/*                width: '90%',*/}
                {/*                fontSize: '100%',*/}
                {/*                // fontFamily:'sarala-bold',*/}
                {/*                fontWeight:800,*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            Cloud*/}
                {/*        </Button>*/}
                {/*    </div>*/}
                {/*    <div className="flex flex-col items-end">*/}
                {/*        /!*<div*!/*/}
                {/*        /!*    className="inline-flex items-center  px-14 py-3 rounded-full text-xl sarala-bold font-extrabold bg-[#ea8600] dark:text-black ">*!/*/}
                {/*        /!*    <span>Data</span>*!/*/}
                {/*        /!*</div>*!/*/}
                {/*        <Button*/}
                {/*            variant="contained"*/}
                {/*            sx={{*/}
                {/*                borderRadius: '20px', // Adjust the value to make it more or less rounded*/}
                {/*                padding: '10px 20px', // Adjust padding as needed*/}
                {/*                backgroundColor: '#ffd33b', // Customize the background color*/}
                {/*                color: '#000000', // Customize the text color*/}
                {/*                width: '90%',*/}
                {/*                fontSize: '100%',*/}
                {/*                // fontFamily:'sarala-bold',*/}
                {/*                fontWeight:800,*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            Data*/}
                {/*        </Button>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        /!*<div*!/*/}
                {/*        /!*    className="inline-flex items-center  px-12 py-3 rounded-full text-xl sarala-bold font-extrabold bg-[#34a853] dark:text-black ">*!/*/}
                {/*        /!*    <span>Python</span>*!/*/}
                {/*        /!*</div>*!/*/}
                {/*        <Button*/}
                {/*            variant="contained"*/}
                {/*            sx={{*/}
                {/*                borderRadius: '20px', // Adjust the value to make it more or less rounded*/}
                {/*                padding: '10px 20px', // Adjust padding as needed*/}
                {/*                backgroundColor: '#ffd33b', // Customize the background color*/}
                {/*                color: '#000000', // Customize the text color*/}
                {/*                width: '90%',*/}
                {/*                fontSize: '100%',*/}
                {/*                // fontFamily:'sarala-bold',*/}
                {/*                fontWeight:800,*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            Python*/}
                {/*        </Button>*/}
                {/*    </div>*/}

                {/*</div>*/}

                <div className={`relative grid grid-cols-${gridCols} grid-rows-${gridRows} h-1/2 w-[98%] gap-4`}>
                    {basicinfo.preferences.map((preference,index) => (
                        // <div key={preference.id} className="flex flex-col items-center">
                        <div key={preference.id} className={index % 2 === 0 ? "flex flex-col items-end" : ""}>
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: '20px',
                                    padding: '10px 20px',
                                    backgroundColor: preference.color_code,
                                    color: '#000000',
                                    width: '100%',
                                    fontSize: '100%',
                                    fontWeight: 800,
                                }}
                            >
                                {preference.category_name}
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="ml-2.5 mt-1/20 mb-[2.5%]">
                <h3 className="text-lg sarala-bold dark:text-white">You might be interested in</h3>
                </div>
                <div className="p-4 space-y-4">
                    {cardDetails.map((detail, index) => (
                        <ListCard
                            key={index}
                            color={detail.color}
                            title={detail.title}
                            conductor={detail.conductor}
                            date={detail.date}
                        />
                    ))}
                </div>

            </div>

        </>
    )
}

