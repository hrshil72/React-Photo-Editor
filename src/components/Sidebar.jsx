import React from "react";

const Sidebar = ({ option }) => {
  return (
    <div className="sidebar">
      {option.map((option, index) => {
        return (
          <button key={index} className="sidebar-item">
            {option.name}
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;
