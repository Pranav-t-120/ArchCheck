import React, { useEffect } from "react";

import { Switch } from "@material-tailwind/react";

import components from "../../../mocks/sdComponents/components.json";
import { useSelector } from "react-redux";

const NodeInspector = () => {
  const [open, setOpen] = React.useState(0);
  const selectedNode = useSelector(
    (state) => state.selectedComponent.selectedComponent
  );

  useEffect(() => {}, [components]);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="border-t-4 border-[black]/50 rounded-sm">
      
        <form className="inset-shadow-2xs">
          <div className="text-center p-2">{selectedNode.name}</div>

          <div className="pl-2 pr-2">
            {selectedNode.config &&
            Object.keys(selectedNode.config).length > 0 ? (
              <div>
                <hr />
                {Object.entries(selectedNode.config).map(([key, value]) => (
                  <div key={key} className="mt-2 ">
                    {value.fieldType === "select" && (
                      <div>
                        <div>
                          <label className="text-sm font-medium">
                            {value.label}
                          </label>
                        </div>
                        <div>
                          <select className="text-xs border rounded p-1">
                            {value.options.map((option) => (
                              <option
                                key={option.value}
                                value={option.value}
                                className="text-xs"
                              >
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}
                    {value.fieldType === "text" && (
                      <div>
                        <label className="text-sm font-medium">
                          {value.label}
                        </label>
                        <input
                          type="text"
                          placeholder={value.placeholder || "Enter value"}
                          className="border rounded p-1"
                        />
                      </div>
                    )}
                    {value.fieldType === "number" && (
                      <div>
                        <label className="text-sm font-medium">
                          {value.label}
                        </label>
                        <input
                          type="number"
                          placeholder={value.placeholder || "Enter number"}
                          className="border rounded p-1"
                        />
                      </div>
                    )}
                    {value.fieldType === "toggle" && (
                      <div className="flex justify-between items-center">
                        <div>
                          <label className="text-sm font-medium">
                            {value.label}
                          </label>
                        </div>
                        <div>
                          <Switch
                            id={`toggle-${key}`}
                            ripple={false}
                            className="h-full w-full checked:bg-[#2ec946]"
                            containerProps={{
                              className: "w-11 h-6",
                            }}
                            circleProps={{
                              className: "before:hidden left-0.5 border-none",
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center">No Configuration Available</div>
            )}
          </div>
        </form>
    </div>
  );
};

export default NodeInspector;
