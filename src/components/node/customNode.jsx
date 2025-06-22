import React from "react";
import SvgProvider from "../svg/svgProvider";
import { Handle } from "@xyflow/react";
import { useDispatch } from "react-redux";
import {selectedNode} from "../../redux/slices/selectedNode";



const CustomNode = ({ data, id, selected }) => {

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.stopPropagation(); // Prevent the click from propagating to the parent
    // Dispatch an action or perform any other logic you need when the node is clicked
    dispatch(selectedNode(data.component));
  };

  return (
    <div className="p-2 z-7" onClick={handleClick}>
      {/* Header with SVG Icon and Label */}
      <div className="grid grid-flow-col justify-items-center">
        <SvgProvider type={data.component.name} className="w-6 h-6" />
      </div>

      <div
        className="text-xs mt-2 text-center"
        style={{ color: selected ? "#FFB347" : "#5B4636" }}
      >
        {data.component.name}
      </div>
      {/* create transparent handles for connections */}

      <Handle type="source" position="right" id="right-handle" className="opacity-15 p-1" />
      <Handle type="target" position="left" id="left-handle" className="opacity-15 p-1" />
      
    </div>
  );
};

export default CustomNode;
