// Sidebar.jsx
import React from "react";
import Logo from "../svg/logo";
import Minimize from "../svg/minimize";
import { SlArrowDown } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import ComponentsGrid from "./sdComponentsGrid/sdComponentsGrid";

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className='bg-[#FFFFFF] p-2' style={{width: '300px', height:'98vh', position: 'absolute', zIndex: '2'}} >
      <div className="mb-4">
            <div className="pl-2 pr-2">
                <div className="flex items-center justify-between mb-3">
                    <Logo />
                    <Minimize />
                </div>
                <div className="flex items-left gap-2">
                <h3>Untitled </h3> <SlArrowDown className="mt-2 font-bold" size={8}  />
                </div>
                <div className="flex items-left gap-2 text-sm">
                <p>Drafts </p> <div className="pl-2 rounded-lg pr-2 text-xs text-sky-500/100 bg-sky-500/20"><a>Free</a></div>
                </div>
            
            </div>
      </div>
     
        <hr className="w-65 text-[#cecfca] mb-4"/>
      
      

      <div className="mb-3">
        <div className="text-sm flex justify-between items-center mb-1" >
                <div className="rounded-lg font-bold p-1 pl-2 pr-2 bg-[#F8F4EC]"><p>Components</p></div>
                <div><IoIosSearch size={18} /></div>
        </div>  
        <div className="flex items-center justify-between pr-1" hidden>
            <div className=" flex w-50 bg-white border-1 border-black ">
            <div className="p-1"><IoIosSearch size={15} /></div>
            <input className=" border-none pl-2 pr-2 text-sm" placeholder="Find..." type="text" style={{width: '100%'}}/>
        </div>
        <div> <IoMdClose size={20}/></div>
        </div>
       
        
      </div>

      <hr className="w-65 text-[#cecfca] mb-4"/>

      <div className="mb-3" style={{ height: '73vh' }}>
        <ComponentsGrid />
        </div>
      
    </aside>
  );
};

export default Sidebar;
