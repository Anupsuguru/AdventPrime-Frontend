import React, { useEffect, useState } from "react";
import WorkshopCard from "../../../components/mobile/WorkshopCard/WorkshopCard";
import { getWorkshops } from "./WorkshoplistApi";
import WorkshopFilterBottomSheet from "./WorkshopFilterBottomSheet";
import WorkshopRegistrationBottomSheet from "./WorkshopRegistrationBottomSheet";
import WorkshopConfirmationBottomSheet from "./WorkshopConfirmationBottomSheet";
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
  const [isDetailsSheetVisible, setIsDetailsSheetVisible] = useState(false);
  const [isRegistrationSheetVisible, setIsRegistrationSheetVisible] =
    useState(false);
  const [isWaitlisted, setIsWaitlisted] = useState(false);

  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const handleRegisterClick = (workshop) => {
    setSelectedWorkshop(workshop);
    setIsRegistrationSheetVisible(true);
  };

  const handleRegister = (isWaitlisted) => {
    // Implement your registration logic here
    // ...

    setIsRegistrationSheetVisible(false);
    setIsDetailsSheetVisible(true);
  };

  const handleToggleWaitlist = () => {
    setIsWaitlisted(!isWaitlisted);
  };

  useEffect(() => {
    // TODO: Uncomment the code below when the API endpoint is ready
    const fetchWorkshops = async () => {
      try {
        const data = await getWorkshops();
        if (Array.isArray(data)) {
          setWorkshops(data);
          setFilteredWorkshops(data);
        } else {
          console.error("getWorkshops did not return an array:", data);
          setWorkshops([]);
          setFilteredWorkshops([]);
        }
      } catch (error) {
        console.error("Error fetching workshops:", error);
        setWorkshops([]);
        setFilteredWorkshops([]);
      }
    };

    fetchWorkshops();
    // Replace with your API call
    // axios.get("/api/workshops").then((response) => {
    //   setWorkshops(response.data);
    // });
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let updatedWorkshops = [...workshops];

    if (filters.sortAlphabetically) {
      updatedWorkshops.sort((a, b) =>
        a.workshop_name.localeCompare(b.workshop_name)
      );
    }

    if (filters.sortByDate) {
      updatedWorkshops.sort(
        (a, b) => new Date(a.workshop_date) - new Date(b.workshop_date)
      );
    }

    // Assuming there's a location field
    if (filters.sortByLocation) {
      updatedWorkshops.sort((a, b) =>
        a.workshop_location.localeCompare(b.workshop_location)
      );
    }

    // Assuming preferred workshops are marked with a 'preferred' tag
    if (filters.showPreferredOnly) {
      updatedWorkshops = updatedWorkshops.filter((workshop) =>
        workshop.tags.includes("preferred")
      );
    }

    setFilteredWorkshops(updatedWorkshops);
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
        {filteredWorkshops?.map((workshop, index) => (
          <WorkshopCard
            key={index}
            title={workshop.workshop_name}
            date={workshop.workshop_date}
            description={workshop.description}
            tags={workshop.category}
            location={workshop.workshop_location}
            onRegister={handleRegisterClick}
          />
        ))}
        {selectedWorkshop && <h2>{selectedWorkshop.workshop_name}</h2>}
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
        selectedWorkshop={selectedWorkshop}
      />
      <WorkshopConfirmationBottomSheet
        isVisible={isDetailsSheetVisible}
        onClose={() => setIsDetailsSheetVisible(false)}
        workshop={selectedWorkshop}
      />
    </div>
  );

}
