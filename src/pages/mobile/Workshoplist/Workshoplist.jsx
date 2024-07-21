import React, { useEffect, useState } from "react";
import WorkshopCard from "../../../../../../AdventPrime/AdventPrime/src/components/mobile/WorkshopCard/WorkshopCard";
import { getWorkshops } from "../../../mockup/WorkshoplistApi.jsx";
// import WorkshopFilterBottomSheet from "./WorkshopFilterBottomSheet";
// import WorkshopRegistrationBottomSheet from "./WorkshopRegistrationBottomSheet";
import WorkshopFilterBottomSheet from "../../../../../../AdventPrime/AdventPrime/src/components/mobile/WorkshopFilter/WorkshopFilterBottomSheet.jsx";
import WorkshopRegistrationBottomSheet from "../../../../../../AdventPrime/AdventPrime/src/components/mobile/WorkshopRegistration/WorkshopRegistrationBottomSheet.jsx";
// import axios from "axios";

export function Workshoplist() {
    const [workshops, setWorkshops] = useState([]);
    const [filteredWorkshops, setFilteredWorkshops] = useState([]);
    const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
    const [filters, setFilters] = useState({
        sortAlphabetically: false,
        sortByDate: false,
        sortByLocation: false,
        showPreferredOnly: false,
    });

    const [isRegistrationSheetVisible, setIsRegistrationSheetVisible] =
        useState(false);
    const [isWaitlisted, setIsWaitlisted] = useState(false);

    const handleRegisterClick = () => {
        setIsRegistrationSheetVisible(true);
    };

    const handleRegister = (isWaitlisted) => {
        // Implement your registration logic here
        // ...

        setIsRegistrationSheetVisible(false);
    };

    const handleToggleWaitlist = () => {
        setIsWaitlisted(!isWaitlisted);
    };

    useEffect(() => {
        const workshopData = getWorkshops();
        setWorkshops(workshopData);
        setFilteredWorkshops(workshopData);
        // TODO: Uncomment the code below when the API endpoint is ready
        // const fetchWorkshops = async () => {
        //   const data = await getWorkshops();
        //   setWorkshops(data);
        // };

        // fetchWorkshops();
        // Replace with your API call
        // axios.get("/api/workshops").then((response) => {
        //   setWorkshops(response.data);
        // });
    }, []);

    useEffect(() => {
        applyFilters();
    }, [filters]);

    const applyFilters = () => {
        // let updatedWorkshops = [...workshops];
        // const noFiltersSelected =
        //   !filters.sortAlphabetically &&
        //   !filters.sortByDate &&
        //   //   !filters.sortByLocation &&
        //   !filters.showPreferredOnly;
        // if (noFiltersSelected) {
        //   setFilteredWorkshops(workshops);
        //   return;
        // }
        // if (filters.sortAlphabetically) {
        //   updatedWorkshops.sort((a, b) => a.title.localeCompare(b.title));
        // }
        // if (filters.sortByDate) {
        //   updatedWorkshops.sort((a, b) => new Date(a.date) - new Date(b.date));
        // }
        // if (filters.sortByLocation) {
        //   updatedWorkshops.sort((a, b) => a.location.localeCompare(b.location)); // Assuming there's a location field
        // }
        // if (filters.showPreferredOnly) {
        //   updatedWorkshops = updatedWorkshops.filter(
        //     (workshop) => workshop.tags.includes("Preferred") // Assuming preferred workshops are marked
        //   );
        // }
        // setFilteredWorkshops(updatedWorkshops);
    };

    return (
        <div className="min-h-screen bg-[#000000] text-white p-4">
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            />
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">Explore Workshops</h1>
                <div className="flex items-center space-x-2">
                    <button
                        className="bg-[#282828] p-2 rounded-full"
                        onClick={() => setIsBottomSheetVisible(true)}
                    >
                        <i className="fas fa-filter"></i>
                    </button>
                    {/* <button className="bg-[#282828] p-2 rounded-full">
            <i className="fas fa-calendar"></i>
          </button>
          <button className="bg-[#282828] p-2 rounded-full">
            <i className="fas fa-check-circle"></i>
          </button> */}
                </div>
            </div>
            <div className="space-y-4">
                {filteredWorkshops.map((workshop, index) => (
                    <WorkshopCard
                        key={index}
                        title={workshop.title}
                        date={workshop.date}
                        description={workshop.description}
                        tags={workshop.tags}
                        onRegister={handleRegisterClick}
                    />
                ))}
            </div>
            <div className="h-28"></div>{" "}
            <WorkshopFilterBottomSheet
                isVisible={isBottomSheetVisible}
                onClose={() => setIsBottomSheetVisible(false)}
                onApply={(filters) => setFilters(filters)}
            />
            <WorkshopRegistrationBottomSheet
                isVisible={isRegistrationSheetVisible}
                onClose={() => setIsRegistrationSheetVisible(false)}
                onRegister={handleRegister}
                onToggleWaitlist={handleToggleWaitlist}
                isWaitlisted={isWaitlisted}
            />
        </div>
    );
}
