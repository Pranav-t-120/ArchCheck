// Sidebar.jsx
import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";
import UnderlineTabs from "../tabGroup/TabGroup";

const tabData = [
  {
    label: "Node Inspector",
    value: "nodeInspector",
  }
]

const RightSideBar = () => {
  return (
    <aside
      className="bg-[#FFFFFF] p-2"
      style={{
        width: "300px",
        height: "100vh",
        position: "absolute",
        right: "0",
        zIndex: "2",
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="text-lg ">
          <Button size="sm" variant="text" className="flex items-center">
            <IoIosArrowRoundBack className="text-xl font-bold" /> Back
          </Button>
        </div>
        <div className=" w-100 flex ">
          <IconButton size="sm" className="rounded-full">
            <p>P</p>
          </IconButton>
          <SlArrowDown className=" mt-3 ml-2 font-bold" size={8} />
        </div>
      </div>

      <div>
        <UnderlineTabs data={tabData} />
      </div>


      
    </aside>
  );
};

export default RightSideBar;
