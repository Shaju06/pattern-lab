'use client';

import InteractivePatternViewer from '@/components/InteractivePatternViewer';
import { Edge, Node } from 'reactflow';

const singletonNodes: Node[] = [
  {
    id: 'client1',
    type: 'input',
    position: { x: 100, y: 50 },
    data: { label: 'Client A' },
    style: {
      background: '#e0e7ff',
      color: '#3730a3',
      border: '2px solid #6366f1',
      fontWeight: 'bold',
      padding: '10px 20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.2)',
    },
  },
  {
    id: 'client2',
    type: 'input',
    position: { x: 400, y: 50 },
    data: { label: 'Client B' },
    style: {
      background: '#e0e7ff',
      color: '#3730a3',
      border: '2px solid #6366f1',
      fontWeight: 'bold',
      padding: '10px 20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.2)',
    },
  },
  {
    id: 'singleton',
    position: { x: 250, y: 200 },
    data: { label: 'Database Connection (Singleton)' },
    style: {
      background: '#fef3c7',
      color: '#92400e',
      border: '2px solid #f59e0b',
      fontWeight: 'bold',
      padding: '10px 20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgba(245, 158, 11, 0.2)',
    },
  },
  {
    id: 'instance',
    type: 'output',
    position: { x: 250, y: 350 },
    data: { label: 'Instance #1234' },
    style: {
      background: '#dcfce7',
      color: '#166534',
      border: '2px solid #22c55e',
      fontWeight: 'bold',
      padding: '10px 20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgba(34, 197, 94, 0.2)',
    },
  },
];

const singletonEdges: Edge[] = [
  {
    id: 'e1-3',
    source: 'client1',
    target: 'singleton',
    label: 'getInstance()',
    animated: true,
    style: { stroke: '#6366f1', strokeWidth: 2 },
    labelStyle: { fill: '#4f46e5', fontWeight: 600 },
  },
  {
    id: 'e2-3',
    source: 'client2',
    target: 'singleton',
    label: 'getInstance()',
    animated: true,
    style: { stroke: '#6366f1', strokeWidth: 2 },
    labelStyle: { fill: '#4f46e5', fontWeight: 600 },
  },
  {
    id: 'e3-4',
    source: 'singleton',
    target: 'instance',
    label: 'returns existing',
    animated: true,
    style: { stroke: '#f59e0b', strokeWidth: 2 },
    labelStyle: { fill: '#d97706', fontWeight: 600 },
  },
];

export default function SingletonPatternPage() {
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Singleton Pattern
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          The Singleton pattern ensures that a class has
          only one instance and provides a global point of
          access to it. This is especially useful for shared
          resources like database connections or
          configuration managers.
        </p>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative">
          <InteractivePatternViewer
            initialNodes={singletonNodes}
            initialEdges={singletonEdges}
          />
        </div>
      </div>

      <div className="mt-12 bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">
          How it works
        </h3>
        <ul className="space-y-3 text-indigo-800">
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-200 flex items-center justify-center text-sm font-bold mt-0.5 mr-3">
              1
            </span>
            <span>
              Multiple parts of the application (
              <strong>Client A</strong> and{' '}
              <strong>Client B</strong>) need access to a
              shared resource.
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-200 flex items-center justify-center text-sm font-bold mt-0.5 mr-3">
              2
            </span>
            <span>
              They both call the <code>getInstance()</code>{' '}
              method on the <strong>Singleton</strong>{' '}
              class.
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-200 flex items-center justify-center text-sm font-bold mt-0.5 mr-3">
              3
            </span>
            <span>
              The Singleton checks if an instance already
              exists. If yes, it returns the exact same
              instance. If not, it creates it once and
              returns it.
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-6">
          TypeScript Implementation
        </h3>
        <p className="text-slate-600 mb-4">
          Here is how you implement a strict Singleton in
          TypeScript by making the constructor private.
        </p>
        <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm font-mono text-slate-300 leading-relaxed">
            <code>
              {`//class DatabaseConnection {
  // 1. Static field to hold the single instance
  private static instance: DatabaseConnection;

  // 2. Private constructor prevents direct 'new' calls
  private constructor() {
    console.log("Initializing database connection... 🔌");
  }

  // 3. Static method that controls access to the singleton
  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  public query(sql: string) {
    console.log(\`Running query: \${sql}\`);
  }
}

// Client Code
const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();

// Both variables refer to the exact same object in memory!
console.log(db1 === db2); // true\`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
