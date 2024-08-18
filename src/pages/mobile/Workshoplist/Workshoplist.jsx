// import React, { useEffect, useState } from "react";
// import WorkshopCard from "../../../components/mobile/WorkshopCard/WorkshopCard";
// import { getWorkshops } from "./WorkshoplistApi";
// import WorkshopFilterBottomSheet from "./WorkshopFilterBottomSheet";
// import WorkshopRegistrationBottomSheet from "./WorkshopRegistrationBottomSheet";
// import WorkshopConfirmationBottomSheet from "./WorkshopConfirmationBottomSheet";
// import axios from "axios";
// import BookingBottomSheet from "../../../components/mobile/Bookingbottomsheet/Bookingbottomsheet.jsx";
// import BottomSheet from "../../../components/mobile/Bottomsheethome/BottomSheet.jsx";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
// import {Button} from "@mui/material";
// // import axios from "axios";
//
// export function Workshoplist() {
//   const [workshops, setWorkshops] = useState([]);
//   const [filteredWorkshops, setFilteredWorkshops] = useState([]);
//   const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
//   const [filters, setFilters] = useState({
//     sortAlphabetically: false,
//     sortByDate: false,
//     sortByLocation: false,
//     showPreferredOnly: false,
//   });
//   const [isDetailsSheetVisible, setIsDetailsSheetVisible] = useState(false);
//   const [isRegistrationSheetVisible, setIsRegistrationSheetVisible] =
//     useState(false);
//   const [isWaitlisted, setIsWaitlisted] = useState(false);
//
//   const [selectedWorkshop, setSelectedWorkshop] = useState(null);
//
//   const handleRegisterClick = (workshop) => {
//     setSelectedWorkshop(workshop);
//     setIsRegistrationSheetVisible(true);
//   };
//
//   const handleRegister = (isWaitlisted) => {
//     // Implement your registration logic here
//     // ...
//
//     setIsRegistrationSheetVisible(false);
//     setIsDetailsSheetVisible(true);
//   };
//
//   const handleToggleWaitlist = () => {
//     setIsWaitlisted(!isWaitlisted);
//   };
//   const [open, setOpen] = useState(false);
//   const [dialogMessage, setDialogMessage] = useState('');
//
//   const handleClose = () => {
//     setOpen(false);
//   };
//   useEffect(() => {
//     // TODO: Uncomment the code below when the API endpoint is ready
//     const fetchWorkshops = async () => {
//       try {
//         const data = await getWorkshops();
//         if (Array.isArray(data)) {
//           setWorkshops(data);
//           setFilteredWorkshops(data);
//         } else {
//           console.error("getWorkshops did not return an array:", data);
//           setWorkshops([]);
//           setFilteredWorkshops([]);
//         }
//       } catch (error) {
//         console.error("Error fetching workshops:", error);
//         setWorkshops([]);
//         setFilteredWorkshops([]);
//       }
//     };
//
//     fetchWorkshops();
//     // Replace with your API call
//     // axios.get("/api/workshops").then((response) => {
//     //   setWorkshops(response.data);
//     // });
//   }, []);
//
//   useEffect(() => {
//     applyFilters();
//   }, [filters]);
//
//   const applyFilters = () => {
//     let updatedWorkshops = [...workshops];
//
//     if (filters.sortAlphabetically) {
//       updatedWorkshops.sort((a, b) =>
//         a.workshop_name.localeCompare(b.workshop_name)
//       );
//     }
//
//     if (filters.sortByDate) {
//       updatedWorkshops.sort(
//         (a, b) => new Date(a.workshop_date) - new Date(b.workshop_date)
//       );
//     }
//
//     // Assuming there's a location field
//     if (filters.sortByLocation) {
//       updatedWorkshops.sort((a, b) =>
//         a.workshop_location.localeCompare(b.workshop_location)
//       );
//     }
//
//     // Assuming preferred workshops are marked with a 'preferred' tag
//     if (filters.showPreferredOnly) {
//       updatedWorkshops = updatedWorkshops.filter((workshop) =>
//         workshop.tags.includes("preferred")
//       );
//     }
//
//     setFilteredWorkshops(updatedWorkshops);
//   };
//   const [homeBottomSheetOpen, setHomeBottomSheetOpen] = useState(false);
//   const [homeSelectedWorkshopId, setHomeSelectedWorkshopId] = useState(null);
//
//   const handleHomeOpenBottomSheet = (id) => {
//     setHomeSelectedWorkshopId(id);
//     setHomeBottomSheetOpen(true);
//   };
//
//   const handleHomeCloseBottomSheet = () => {
//     setHomeBottomSheetOpen(false);
//     setHomeSelectedWorkshopId(null);
//   };
//
//   const handleHomeRegister = (id) => {
//     if (id) {
//       handleHomeCloseBottomSheet();
//       axios.post(import.meta.env.VITE_API_URL + "register", {
//         "workshop_id": id,
//         "status":"confirmed"
//       }).then(
//           (response) => {
//             if (response.status === 200) {
//               setDialogMessage(response.data.message);
//             } else {
//               setDialogMessage(response.data.message);
//             }
//             setOpen(true);
//           }
//       ).catch(error => {
//         console.error("An error occurred. Please try again.", error);
//       });
//     }
//   };
//
//   return (
//     <div className="min-h-screen bg-[#000000] text-white p-4">
//       <link
//         rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
//       />
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-2xl font-bold">Explore Workshops</h1>
//         <div className="flex items-center space-x-2">
//           <button
//             className="bg-[#282828] p-2 rounded-full"
//             onClick={() => setIsBottomSheetVisible(true)}
//           >
//             <i className="fas fa-filter"></i>
//           </button>
//           {/* <button className="bg-[#282828] p-2 rounded-full">
//
//             <i className="fas fa-calendar"></i>
//           </button>
//           <button className="bg-[#282828] p-2 rounded-full">
//             <i className="fas fa-check-circle"></i>
//           </button> */}
//         </div>
//       </div>
//       <div className="space-y-4">
//         {filteredWorkshops?.map((workshop, index) => (
//           <WorkshopCard
//             key={index}
//             title={workshop.workshop_name}
//             date={workshop.workshop_date}
//             description={workshop.description}
//             tags={workshop.category}
//             location={workshop.workshop_location}
//             onRegister={handleRegisterClick}
//           />
//         ))}
//         {selectedWorkshop && <h2>{selectedWorkshop.workshop_name}</h2>}
//       </div>
//       <div className="h-28"></div>{" "}
//       <WorkshopFilterBottomSheet
//         isVisible={isBottomSheetVisible}
//         onClose={() => setIsBottomSheetVisible(false)}
//         onApply={(filters) => setFilters(filters)}
//       />
//
//       {/*<WorkshopRegistrationBottomSheet*/}
//       {/*  isVisible={isRegistrationSheetVisible}*/}
//       {/*  onClose={() => setIsRegistrationSheetVisible(false)}*/}
//       {/*  onRegister={handleRegister}*/}
//       {/*  onToggleWaitlist={handleToggleWaitlist}*/}
//       {/*  isWaitlisted={isWaitlisted}*/}
//       {/*  selectedWorkshop={selectedWorkshop}*/}
//       {/*/>*/}
//       {/*<WorkshopConfirmationBottomSheet*/}
//       {/*  isVisible={isDetailsSheetVisible}*/}
//       {/*  onClose={() => setIsDetailsSheetVisible(false)}*/}
//       {/*  workshop={selectedWorkshop}*/}
//       {/*/>*/}
//
//       <BookingBottomSheet
//           open={homeBottomSheetOpen}
//           handleClose={handleHomeCloseBottomSheet}
//           handleConfirm={handleHomeRegister}
//           workshopId={homeSelectedWorkshopId}
//       />
//       <Dialog open={open} onClose={handleClose} sx={{
//         '& .MuiPaper-root': {
//           backgroundColor: '#000000', // Set background color to black
//           color: '#ffffff', // Set text color to white
//         },
//       }}>
//         <DialogTitle sx={{color:"#ffffff"}}>Status</DialogTitle>
//         <DialogContent sx={{color:"#ffffff"}}>
//           {dialogMessage}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             OK
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
//
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import WorkshopFilterBottomSheet from './WorkshopFilterBottomSheet';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {Button} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import BookingBottomSheet from "../../../components/mobile/Bookingbottomsheet/Bookingbottomsheet.jsx";
import {getWorkshops} from "./WorkshoplistApi.jsx";
import {useMsal} from "@azure/msal-react";
import {loginRequest} from "../../../auth/authConfig.jsx";
import WorkshopCard from "../../../components/mobile/WorkshopCard/WorkshopCard.jsx";

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
  const [isRegistrationSheetVisible, setIsRegistrationSheetVisible] = useState(false);
  const [isWaitlisted, setIsWaitlisted] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [homeBottomSheetOpen, setHomeBottomSheetOpen] = useState(false);
  const [homeSelectedWorkshopId, setHomeSelectedWorkshopId] = useState(null);
  const [open, setOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const { instance, accounts } = useMsal();
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
  axios.defaults.headers.common['Authorization'] = 'Bearer '+accessToken;
  const handleHomeOpenBottomSheet = (id) => {
    setHomeSelectedWorkshopId(id);
    setHomeBottomSheetOpen(true);
  };

  const handleHomeCloseBottomSheet = () => {
    setHomeBottomSheetOpen(false);
    setHomeSelectedWorkshopId(null);
  };

  const handleHomeRegister = (id) => {
    if (id) {
      handleHomeCloseBottomSheet();
      axios.post(import.meta.env.VITE_API_URL + "register", {
        "workshop_id": id,
        "status": "confirmed"
      }).then(
          (response) => {
            if (response.status === 200) {
              setDialogMessage(response.data.message);
            } else {
              setDialogMessage(response.data.message);
            }
            setOpen(true);
          }
      ).catch(error => {
        console.error("An error occurred. Please try again.", error);
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const data = await getWorkshops(accessToken);
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
  }, [accessToken]);

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

    if (filters.sortByLocation) {
      updatedWorkshops.sort((a, b) =>
          a.workshop_location.localeCompare(b.workshop_location)
      );
    }

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
                  onRegister={() => handleHomeOpenBottomSheet(workshop.id)}
              />
          ))}
          {selectedWorkshop && <h2>{selectedWorkshop.workshop_name}</h2>}
        </div>
        <div className="h-28"></div>
        <WorkshopFilterBottomSheet
            isVisible={isBottomSheetVisible}
            onClose={() => setIsBottomSheetVisible(false)}
            onApply={(filters) => setFilters(filters)}
        />
        <BookingBottomSheet
            open={homeBottomSheetOpen}
            handleClose={handleHomeCloseBottomSheet}
            handleConfirm={handleHomeRegister}
            workshopId={homeSelectedWorkshopId}
        />
        <Dialog open={open} onClose={handleClose} sx={{
          '& .MuiPaper-root': {
            backgroundColor: '#000000',
            color: '#ffffff',
          },
        }}>
          <DialogTitle sx={{ color: "#ffffff" }}>Status</DialogTitle>
          <DialogContent sx={{ color: "#ffffff" }}>
            {dialogMessage}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  );
}
