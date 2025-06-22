// create a react flow component
import {
  ReactFlow,
  Controls,
  MiniMap,
  Background,
  NodeToolbar,
  NodeResizer,
  useNodesState,
  applyNodeChanges,
  applyEdgeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import CustomNode from "../node/customNode";
import { use, useEffect, useState, useCallback } from "react";
import { useDrop } from "react-dnd";
import { add, remove, update } from "../../redux/slices/draggableComponentSlice";
import {addEdge, removeEdge} from "../../redux/slices/draggableComponentEdge";
import { useSelector, useDispatch } from "react-redux";
import { createNode, createEdge } from "../utils/utils";


export default function Editor() {
  const nodeObject = useSelector((state) => state.draggableComponent.components);
  const edgeObject = useSelector((state) => {
    return state.draggableComponentEdge.edges;
  });
  const [nodes, setNodes] = useNodesState(nodeObject);
  const [edges, setEdges] = useState(edgeObject);
  const dispatch = useDispatch();


 // Custom onNodesChange handler
  const onNodesChange = useCallback(
    (changes) => {
      // You can add custom logic here before applying changes
      // dispatch update action to update the node position
      setNodes((nds) => applyNodeChanges(changes, nds));
    },
    []
  );

   // Custom onEdgesChange handler
  const onEdgesChange = useCallback(
    (changes) => {
      // dispatch addEdge or removeEdge action based on the change type
      changes.forEach((change) => {
        if (change.type === "add") {
          const { id, source, target } = change;
          dispatch(addEdge({ id, source, target }));
        } else if (change.type === "remove") {
          dispatch(removeEdge(change.id));
        }
      });
      setEdges((eds) => {
        applyEdgeChanges(changes, eds);
        return eds;
      });
    },
    []
  );

  const onConnect = useCallback(
  (params) => {
    // params: { source, target, ... }
    dispatch(addEdge(createEdge(params.source, params.target)));
    setEdges((eds) => {
      return [...eds, { ...params, id: `${params.source}-${params.target}` }];
    });
  },
  []
);

  const onNodeDragStop = useCallback(
    (event, node) => {
      // Update the node position in the Redux store
      dispatch(update({ id: node.id, x: node.position.x, y: node.position.y }));
    },
    []
  );



  useEffect(() => {
    // Simulate fetching nodes and edges from an API
    setNodes(nodeObject);
    setEdges(edgeObject);
  }, [nodeObject, edgeObject]);


  const [{ isOver }, drop] = useDrop(() => ({
    // accept multiple types
    // Here we can accept both "component" and "editorNode" types
    accept: "component",
    drop: (item, monitor) => {
      // Handle the dropped item
      // You can add logic to create a new node based on the dropped component
      const newNode = createNode(item, "customControl", {
        x: monitor.getClientOffset().x,
        y: monitor.getClientOffset().y,
      });
      dispatch(add(newNode));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  // useEffect(() => {
  //   // Simulate fetching nodes and edges from an API
  //   setNodes(nodeObject.nodes);
  //   setEdges(initialEdges);
  // }, [nodeObject]);

  return (
    <div
      style={{ height: "100%" }}
      className="col-span-12 bg-[#FFFAFA]"
      ref={drop}
    >
      {isOver && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 5,
            opacity: 0.5,
            backgroundColor: "#FFFAFA",
            pointerEvents: "none",
          }}
        />
      )}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeDragStop={onNodeDragStop}
        nodeTypes={{ customControl: CustomNode }}
        fitView
      >
        <Controls
          style={{
            pointerEvents: "all",
            position: "absolute",
            left: "300px",
            bottom: "0px",
          }}
        />
        <MiniMap
          style={{
            pointerEvents: "all",
            position: "absolute",
            right: "110px",
            bottom: "0px",
          }}
        />
        <NodeToolbar />
        <NodeResizer />
        <Background gap={12} variant="dots" />
      </ReactFlow>
    </div>
  );
}
