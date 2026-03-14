'use client';

import { useCallback, useState } from 'react';
import ReactFlow, {
    applyEdgeChanges,
    applyNodeChanges,
    Background,
    ConnectionMode,
    Controls,
    Edge,
    EdgeChange,
    MiniMap,
    Node,
    NodeChange,
} from 'reactflow';
import 'reactflow/dist/style.css';

interface InteractivePatternViewerProps {
  initialNodes: Node[];
  initialEdges: Edge[];
}

export default function InteractivePatternViewer({
  initialNodes,
  initialEdges,
}: InteractivePatternViewerProps) {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  return (
    <div className="w-full h-[600px] border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white/50 backdrop-blur-sm">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        connectionMode={ConnectionMode.Loose}
        fitView
        className="bg-slate-50/50"
      >
        <Background color="#cbd5e1" gap={16} size={2} />
        <Controls className="bg-white border-slate-200 fill-slate-600 shadow-sm rounded-lg overflow-hidden" showInteractive={false} />
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.type === 'input') return '#4f46e5';
            if (n.type === 'output') return '#0ea5e9';
            return '#94a3b8';
          }}
          nodeColor={(n) => {
            if (n.style?.background) return n.style.background as string;
            return '#fff';
          }}
          maskColor="rgba(248, 250, 252, 0.7)"
          className="border-slate-200 rounded-lg shadow-sm"
        />
      </ReactFlow>
    </div>
  );
}
