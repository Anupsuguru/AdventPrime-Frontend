import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const WorkshopRegistrationBottomSheet = ({
  isVisible,
  onClose,
  onRegister,
}) => {
  const [isWaitlisted, setIsWaitlisted] = useState(false);

  const handleToggleWaitlist = () => {
    setIsWaitlisted(!isWaitlisted);
  };

  const handleRegister = () => {
    onRegister(isWaitlisted);
    onClose();
  };

  const bottomSheetSpring = useSpring({
    transform: isVisible ? "translateY(0%)" : "translateY(100%)",
    config: { tension: 300, friction: 30 },
  });

  return (
    <animated.div
      style={bottomSheetSpring}
      className="fixed inset-x-0 bottom-0 bg-[#282828] text-white rounded-t-lg p-4 mb-20"
    >
      <div className="h-1 w-10 bg-gray-400 rounded-full mx-auto mb-2" />
      <h2 className="text-xl font-semibold mb-4">Confirm Registration</h2>
      <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isWaitlisted}
            onChange={handleToggleWaitlist}
          />
          <span className="ml-2">
            Do you wish to be waitlisted if there are no seats?
          </span>
        </label>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-red-500 px-4 py-2 rounded-lg" onClick={onClose}>
          Cancel
        </button>
        <button
          className="bg-blue-500 px-4 py-2 rounded-lg"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </animated.div>
  );
};

export default WorkshopRegistrationBottomSheet;
