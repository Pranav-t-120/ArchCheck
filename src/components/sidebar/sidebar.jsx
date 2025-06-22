// Sidebar.jsx
import React from "react";
import Logo from "../svg/logo";
import Minimize from "../svg/minimize";
import { SlArrowDown } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import UnderlineTabs from "../tabGroup/TabGroup";
import { Chip } from "@material-tailwind/react";
import { BsStack } from "react-icons/bs";
import { FaTools } from "react-icons/fa";

 const data = [
    {
      label: "Components",
      value: "components",
      iconButton: <BsStack className="text-xs" />,
    },
    {
      label: "Tools",
      value: "tools" ,
      iconButton: <FaTools className="text-xs" />,
    },
  ];

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside
      className="bg-[#FFFFFF] p-2 h-full flex flex-col"
      style={{
        width: "300px",
        position: "absolute",
        zIndex: "4",
      }}
    >
      <div className="mb-4">
        <div className="pl-2 pr-2">
          <div className="flex items-center justify-between mb-3">
            <Logo />
            <Minimize />
          </div>
          <div className="flex items-left gap-2">
            <h3>Untitled </h3>{" "}
            <SlArrowDown className="mt-2 font-bold" size={8} />
          </div>
          <div className="flex items-left gap-2 text-sm">
            <p>Drafts </p>{" "}
            <div className="pl-2 rounded-lg pr-2 text-xs text-sky-500/100 bg-sky-500/20">
              <Chip
                color="blue"
                value="Free"
                variant="ghost"
                size="sm"
                style={{ fontSize: "10px", padding: "2px 5px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="w-65 text-[#cecfca] mb-4" />

      <div className="mb-3">
        <div className=" pr-1">
          <div className=" flex w-250 bg-white border-1 border-black ">
            <div className="p-1">
              <IoIosSearch size={15} />
            </div>
            <input
              className=" border-none pl-2 pr-2 text-sm"
              placeholder="Find..."
              type="text"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      <hr className="w-65 text-[#cecfca] mb-4" />

      <div
        className="mb-3 no-scrollbar grow overflow-y-auto" 
      >
        <UnderlineTabs data={data} defaultValue={data[0].value}/>
      </div>
    </aside>
  );
};

export default Sidebar;
