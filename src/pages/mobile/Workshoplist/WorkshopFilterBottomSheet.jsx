import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const WorkshopFilterBottomSheet = ({ isVisible, onClose, onApply }) => {
  const [filters, setFilters] = useState({
    sortAlphabetically: false,
    sortByDate: false,
    sortByLocation: false,
    showPreferredOnly: false,
  });

  const handleFilterChange = (filter) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  const applyFilters = () => {
    onApply(filters);
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
      <h2 className="text-xl font-semibold mb-4">Filter Options</h2>
      <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={filters.sortAlphabetically}
            onChange={() => handleFilterChange("sortAlphabetically")}
          />
          <span className="ml-2">Sort Alphabetically</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={filters.sortByDate}
            onChange={() => handleFilterChange("sortByDate")}
          />
          <span className="ml-2">Sort by Date</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={filters.sortByLocation}
            onChange={() => handleFilterChange("sortByLocation")}
          />
          <span className="ml-2">Sort by Location</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={filters.showPreferredOnly}
            onChange={() => handleFilterChange("showPreferredOnly")}
          />
          <span className="ml-2">Show Preferred Only</span>
        </label>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-red-500 px-4 py-2 rounded-lg" onClick={onClose}>
          Dismiss
        </button>
        <button
          className="bg-blue-500 px-4 py-2 rounded-lg"
          onClick={applyFilters}
        >
          Apply
        </button>
      </div>
    </animated.div>
  );
};

export default WorkshopFilterBottomSheet;
