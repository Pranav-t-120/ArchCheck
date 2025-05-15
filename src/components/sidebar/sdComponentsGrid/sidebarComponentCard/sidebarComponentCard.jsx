import React from "react";
import {
  Card,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";
import SvgProvider from "../../../svg/svgProvider";

const SidebarComponentCard = ({ logo, component }) => {
  return (
    <Card style={{ width: "100%" }}>
      <List>
        <ListItem>
          <div className="flex items-center gap-4">
            <div>
              {logo && (<SvgProvider type={logo} />) }
            </div>
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
    </Card>
  );
};

export default SidebarComponentCard;
