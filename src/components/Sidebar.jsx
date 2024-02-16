import React from "react";

const Sidebar = ({ option, active, selected }) => {
  return (
    <div className="sidebar">
      {option.map((option, index) => {
        return (
          <button
            key={index}
            onClick={() => selected(index)}
            className={`sidebar-item ${index === active ? "active" : ""}`}>
            {option.name}
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;
