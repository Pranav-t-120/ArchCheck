// create a react flow component
import  {
    ReactFlow,
    Controls,
    MiniMap,
    Background,
    NodeToolbar,
    NodeResizer,  
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
    {id: '1', data: { label: 'Node 1' }, position: { x: 0, y: 0 }, style : {backgroundColor: '#FFF9DB',
      border: '2px solid  #D8CAB8 ',
      color: '#5B4636',
      fontFamily: 'Courier New, monospace',
      padding: 10,
      borderRadius: 8,} },
    {id: '2', data: { label: 'Node 2' }, position: { x: 0, y: 100 },style : {backgroundColor: '#FFF9DB',
      border: '2px solid  #D8CAB8 ',
      color: '#5B4636',
      fontFamily: 'Courier New, monospace',
      padding: 10,
      borderRadius: 8,} },
];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', style: {
      stroke: '#FFB347', // your retro orange edge
      strokeWidth: 2,
    }, },
];

export default function Editor() {

    return (
        <div style={{ height: '100%' }} className='container mx-auto col-span-12 bg-[#FFFAFA]'>
            <ReactFlow
                nodes={initialNodes}
                edges={initialEdges}
            >

                <Controls />
                <MiniMap />
                <NodeToolbar />
                <NodeResizer />
                <Background  gap={12} variant='dots' />

            </ReactFlow>
        </div>
    )
}