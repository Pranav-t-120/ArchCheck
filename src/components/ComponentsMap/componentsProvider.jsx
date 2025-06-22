import ComponentsGrid from "../sidebar/sdComponentsGrid/sdComponentsGrid";
import NodeInspector from "../NodeInspector/nodeInspector";

const componentsMap = {
    "components": <ComponentsGrid />,
    "nodeInspector": <NodeInspector />,
}

const ComponentsProvider = ({name}) => {
    return (
        <div>
            {componentsMap[name] ? componentsMap[name] : null}
        </div>
       
    );
};

export default ComponentsProvider;
