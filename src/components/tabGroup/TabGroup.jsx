import React, {useEffect, useState} from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  iconButton,
} from "@material-tailwind/react";

import ComponentsProvider from "../ComponentsMap/componentsProvider";
import JsonConfig from "../NodeInspector/jsonConfig";

const jsonConfig = {
  "name": "Example Component",
  "description": "This is an example component",
  "props": {
    "title": {
      "type": "string",
      "default": "Default Title"
    },
    "isVisible": {
      "type": "boolean",
      "default": true
    }
  }
};

export function UnderlineTabs({data, defaultValue}) {
  const [activeTab, setActiveTab] = useState(defaultValue || data[0].value);
  const [activeLayout, setActiveLayout] = useState("UI");

  const handleLayoutChange = (layout) => {
    setActiveLayout(layout);
  };

  useEffect(() => {
   
  }, [activeLayout]);

  return (
    <Tabs value={activeTab} className="flex-1 h-full" >
      <TabsHeader
        className="rounded-none sticky top-0 z-10 bg-white  bg-white border-b border-blue-gray-50 p-0 "
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value, iconButton, }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
          >
            <div className="flex align-middle text-sm"><span className="mt-1 mr-1">{iconButton}</span>{label} </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="overflow-y-scroll no-scrollbar" style={{ height: "100%" }}>
        {data.map(({ value }) => (
          <TabPanel key={value} value={value} className="p-0 pt-2">
            {
              value === "nodeInspector" && (<div className="flex flex-row-reverse mb-2 pr-2">
              <p><a className="text-xs text-blue-500 underline underline-offset-1" onClick={() => handleLayoutChange("UI")}> UI </a> /
              <a className="text-xs text-blue-500 underline-offset-1" onClick={() => handleLayoutChange("JSON")}> JSON </a></p>
            </div>)
            }
            
            {
              activeLayout === "UI" ? (
                <ComponentsProvider name={value} className=" inset-shadow-2xs"/>
              ) : (
                <JsonConfig config={jsonConfig} className=" inset-shadow-2xs"/>
              )
            }
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

export default UnderlineTabs;