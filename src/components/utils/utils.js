import { v4 as uuidv4 } from "uuid";

export const createNode = (component, type, position) => {
  return {
    id: component.id + uuidv4(),
    type,
    position,
    data: {
       component: {
        name: component.name,
        description: component.description,
        config: component.config
    },
  },
    style: {
      backgroundColor: "transparent",
      borderRadius: "8px",
      color: "#5B4636", // text color
    },
    draggable: true,
  };
};

export const createEdge = (source, target) => {
  return {
    id: `e${source}-${target}`,
    source,
    target,
    animated: true,
    style: { stroke: "#5B4636", strokeWidth: 2 },
  };
};
