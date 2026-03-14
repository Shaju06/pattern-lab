'use client';

import InteractivePatternViewer from '@/components/InteractivePatternViewer';
import { Edge, Node } from 'reactflow';

const factoryNodes: Node[] = [
  {
    id: 'client',
    type: 'input',
    position: { x: 250, y: 50 },
    data: { label: 'Client (Ordering a Vehicle)' },
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
    id: 'factory',
    position: { x: 250, y: 200 },
    data: { label: 'VehicleFactory (The Creator)' },
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
    id: 'car',
    type: 'output',
    position: { x: 100, y: 350 },
    data: { label: 'Car (Product)' },
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
  {
    id: 'bike',
    type: 'output',
    position: { x: 400, y: 350 },
    data: { label: 'Bike (Product)' },
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

const factoryEdges: Edge[] = [
  {
    id: 'e1-2',
    source: 'client',
    target: 'factory',
    label: 'requests vehicle',
    animated: true,
    style: { stroke: '#6366f1', strokeWidth: 2 },
    labelStyle: { fill: '#4f46e5', fontWeight: 600 },
  },
  {
    id: 'e2-3',
    source: 'factory',
    target: 'car',
    label: 'creates',
    animated: true,
    style: { stroke: '#f59e0b', strokeWidth: 2 },
    labelStyle: { fill: '#d97706', fontWeight: 600 },
  },
  {
    id: 'e2-4',
    source: 'factory',
    target: 'bike',
    label: 'creates',
    animated: true,
    style: { stroke: '#f59e0b', strokeWidth: 2 },
    labelStyle: { fill: '#d97706', fontWeight: 600 },
  },
];

export default function FactoryPatternPage() {
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Factory Pattern
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          The Factory Method Pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate. 
          It lets a class defer instantiation to subclasses. Play around with the diagram below to see how a client requests an object from the Factory without knowing its exact class!
        </p>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative">
          <InteractivePatternViewer
            initialNodes={factoryNodes}
            initialEdges={factoryEdges}
          />
        </div>
      </div>
      
      <div className="mt-12 bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">How it works</h3>
        <ul className="space-y-3 text-indigo-800">
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-200 flex items-center justify-center text-sm font-bold mt-0.5 mr-3">1</span>
            <span>The <strong>Client</strong> needs a vehicle but doesn&apos;t care exactly how it&apos;s built or which specific type it is right away.</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-200 flex items-center justify-center text-sm font-bold mt-0.5 mr-3">2</span>
            <span>It asks the <strong>VehicleFactory</strong> for one, maybe passing a string like &quot;Car&quot;.</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-200 flex items-center justify-center text-sm font-bold mt-0.5 mr-3">3</span>
            <span>The Factory instantiates the exact product (<strong>Car</strong> or <strong>Bike</strong>) and returns it to the Client.</span>
          </li>
        </ul>
      </div>

      <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-6">TypeScript Implementation</h3>
        <p className="text-slate-600 mb-4">
          Here is how you might implement the Factory pattern in TypeScript to create different types of vehicles.
        </p>
        <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm font-mono text-slate-300 leading-relaxed">
            <code>
{`// 1. Defining the Product Interface
interface Vehicle {
  drive(): void;
}

// 2. Creating Concrete Products
class Car implements Vehicle {
  drive() { 
    console.log("🚗 Driving a car!"); 
  }
}

class Bike implements Vehicle {
  drive() { 
    console.log("🚲 Riding a bike!"); 
  }
}

// 3. Building the Creator (Factory)
class VehicleFactory {
  // The Factory Method
  static createVehicle(type: "car" | "bike"): Vehicle {
    switch (type) {
      case "car": 
        return new Car();
      case "bike": 
        return new Bike();
      default: 
        throw new Error("Unknown vehicle type");
    }
  }
}

// 4. Client Code
const myCar = VehicleFactory.createVehicle("car");
myCar.drive(); // Outputs: 🚗 Driving a car!

const myBike = VehicleFactory.createVehicle("bike");
myBike.drive(); // Outputs: 🚲 Riding a bike!`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
