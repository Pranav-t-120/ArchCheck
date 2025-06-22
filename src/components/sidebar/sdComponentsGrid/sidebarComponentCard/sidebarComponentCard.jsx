import React, {useState} from "react";
import { Card, List, ListItem, Typography } from "@material-tailwind/react";
import SvgProvider from "../../../svg/svgProvider";
import { useDrag } from "react-dnd";

const SidebarComponentCard = ({ logo, component }) => {
  // use react dnd to make this component draggable
  
  const [{ isDragging }, drag] = useDrag(() => ({
    // add card component to the drag and drop context and current x and y position
    // define specification for the drag source
    type: "component",
    item:  component ,
    end: (item, monitor) => {
      if (!monitor.didDrop()) {
        return;
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div className="component" ref={drag} data-testid="components-grid">
      <List>
        <ListItem className="rounded">
          <div className="flex items-center gap-4">
            <div>{logo && <SvgProvider type={logo} />}</div>
            <div>
              <Typography variant="h6" color="blue-gray" className="text-sm">
                {component.name}
              </Typography>

              <Typography variant="small" color="gray" className="text-xs">
                {component.description.length > 50
                  ? component.description.substring(0, 50) + "..."
                  : component.description}
              </Typography>
            </div>
          </div>
        </ListItem>
      </List>
    </div>
  );
};

export default SidebarComponentCard;
