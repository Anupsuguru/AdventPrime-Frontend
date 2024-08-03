import React from "react";
import WorkshopRegistrationBottomSheet from "../../../pages/mobile/Workshoplist/WorkshopRegistrationBottomSheet";

const WorkshopCard = ({
  title,
  date,
  description,
  tags,
  location,
  onRegister,
}) => {
  // console.log(tags);

  return (
    <div className="bg-[#282828] text-white p-4 mb-4 rounded-lg">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-400">{date}</p>

      <p className="text-gray-400">{location}</p> {/* Add this line */}
      <div className="flex space-x-2 my-2">
        <span
          className={`${
            tags === "Tech 1"
              ? "bg-yellow-400"
              : tags === "Tech 2"
              ? "bg-orange-400"
              : "bg-green-400"
          } text-black py-1 px-2 rounded-full`}
        >
          {tags}
        </span>

      </div>
      <p className="text-gray-300">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <a
          href="#"
          className="text-[#C3C3C3] font-bold underline"
          //   onClick={handleRegisterClick}
        >
          View More
        </a>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={onRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default WorkshopCard;
