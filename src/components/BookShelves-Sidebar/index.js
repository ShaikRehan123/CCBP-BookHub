import { useState } from "react";
import "./index.css";
const Sidebar = (props) => {
  const { bookshelvesList, selectedShelf, setSelectedShelf } = props;
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Book Shelves</h3>
      </div>
      <div className="sidebar-body">
        {bookshelvesList.map((eachShelf) => (
          <div className="sidebar-body-item-wrapper" key={eachShelf.id}>
            <h4
              className={`sidebar-body-item ${
                selectedShelf.value === eachShelf.value ? "selected" : ""
              }`}
              onClick={() => setSelectedShelf(eachShelf)}
            >
              {eachShelf.label}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
