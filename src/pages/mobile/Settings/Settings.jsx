import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";

export default function Settings() {
  const navigate = useNavigate();
  const [isClicked1, setIsClicked1] = useState(false);

  const handleClick1 = () => {
    setIsClicked1(true);
    setTimeout(() => setIsClicked1(false), 300); // Reset the click state after 300ms
    // props.onClick(); // Call the onClick prop to handle the bottom sheet opening

    navigate("/aboutus");
  };
  const [isClicked2, setIsClicked2] = useState(false);

  const handleClick2 = () => {
    setIsClicked2(true);
    setTimeout(() => setIsClicked2(false), 300); // Reset the click state after 300ms
    navigate("/termsandcond");
    // props.onClick(); // Call the onClick prop to handle the bottom sheet opening
  };
  const { instance } = useMsal();

  const handleLogout = (logoutType) => {
    if (logoutType === "popup") {
      instance.logoutPopup({
        postLogoutRedirectUri: "/",
        mainWindowRedirectUri: "/",
      });
    } else if (logoutType === "redirect") {
      instance.logoutRedirect({
        postLogoutRedirectUri: "/",
      });
    }
  };
  const [isClicked3, setIsClicked3] = useState(false);

  const handleClick3 = () => {
    setIsClicked3(true);
    setTimeout(() => setIsClicked3(false), 300); // Reset the click state after 300ms
    handleLogout("redirect");

    // props.onClick(); // Call the onClick prop to handle the bottom sheet opening
  };

  // const navigate = useNavigate();

  return (
    <>
      <div className="top-bar flex items-center p-4 h-[10%] dark:bg-black">
        <button onClick={() => navigate(-1)} className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700 dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h2 className="text-xl font-bold text-gray-700 dark:text-white">
          Settings
        </h2>
      </div>
      <div className="m-6">
        <div
          className={`flex justify-between items-center p-4 dark:bg-[#282828] rounded-2xl shadow-md mt-[3%] ${
            isClicked1 ? "animate-click" : ""
          }`}
          onClick={handleClick1}
        >
          <div className="flex items-center">
            <div>
              <h1 className="text-white text-lg sarala-bold">About Us</h1>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-between items-center p-4 dark:bg-[#282828] rounded-2xl shadow-md mt-[3%] ${
            isClicked2 ? "animate-click" : ""
          }`}
          onClick={handleClick2}
        >
          <div className="flex items-center">
            <div>
              <h1 className="text-white text-lg sarala-bold">
                Terms and Conditions
              </h1>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-between items-center p-4 dark:bg-[#282828] rounded-2xl shadow-md mt-[3%] ${
            isClicked3 ? "animate-click" : ""
          }`}
          onClick={handleClick3}
          // onClick={() => handleLogout("redirect")}
        >
          <div className="flex items-center">
            <div>
              <h1 className="text-white text-lg sarala-bold">Logout</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
