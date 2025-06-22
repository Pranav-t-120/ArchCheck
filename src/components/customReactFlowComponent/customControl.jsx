import { Controls } from "@xyflow/react";

const CustomControl = () => {
  return (
    
      <Controls
        style={{
          position: "relative",
          left: "300px",
          zIndex: "2",
          pointerEvents: "all",
        }}
        showInteractive={true} 
      />
   
  );
}

export default CustomControl;