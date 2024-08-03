import React from "react";
import { useSpring, animated } from "react-spring";

const WorkshopConfirmationBottomSheet = ({ isVisible, onClose, workshop }) => {
  const bottomSheetSpring = useSpring({
    transform: isVisible ? "translateY(0%)" : "translateY(100%)",
    config: { tension: 300, friction: 30 },
  });

  if (!isVisible) {
    return null;
  }

  return (
    <animated.div
      style={bottomSheetSpring}
      className="fixed inset-x-0 bottom-0 bg-[#282828] text-white rounded-t-lg p-4 mb-20"
    >
      <div className="h-1 w-10 bg-gray-400 rounded-full mx-auto mb-2" />
      <h2 className="text-xl font-semibold mb-4">
        You have successfully registered for the following workshop:
      </h2>
      <div className="space-y-2">
        <p>{workshop.workshop_name}</p>
        <p>{workshop.workshop_date}</p>
        <p>{workshop.description}</p>
        <p>{workshop.category}</p>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-red-500 px-4 py-2 rounded-lg" onClick={onClose}>
          Dismiss
        </button>
      </div>
    </animated.div>
  );
};

export default WorkshopConfirmationBottomSheet;
