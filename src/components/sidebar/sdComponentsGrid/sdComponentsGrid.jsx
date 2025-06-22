import React, { useState, useEffect } from "react";
import components from "../../../../mocks/sdComponents/components.json";
import SidebarComponentCard from "./sidebarComponentCard/sidebarComponentCard";

const ComponentsGrid = () => {
   const [component, setComponents] = useState([]);
  useEffect(() => {
    setComponents(components);
  }, [components]);

  return (
    // validate if components is an array
   
    <div
      className="system-components grid grid-cols-1 h-170 overflow-y-auto no-scrollbar "
      style={{ height: "100%" }}
    >
      {component &&
        component.length > 0 &&
        component.map((cp, index) => (
          <div key={index}>
            <SidebarComponentCard logo={cp.name} component={cp} />
          </div>
        ))}
    </div>
  );
};

export default ComponentsGrid;
