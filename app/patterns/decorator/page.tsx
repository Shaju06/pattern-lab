'use client';

import InteractivePatternViewer from '@/components/InteractivePatternViewer';
import { Edge, Node } from 'reactflow';

const decoratorNodes: Node[] = [
  {
    id: 'component',
    type: 'input',
    position: { x: 250, y: 50 },
    data: { label: 'Coffee (Component)' },
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
    id: 'base',
    position: { x: 100, y: 200 },
    data: { label: 'SimpleCoffee (Concrete)' },
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
    id: 'decorator',
    position: { x: 400, y: 200 },
    data: { label: 'CoffeeDecorator' },
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
    id: 'dec1',
    type: 'output',
    position: { x: 300, y: 350 },
    data: { label: 'MilkDecorator' },
    style: {
      background: '#e0e7ff',
      color: '#3730a3',
      border: '2px dashed #6366f1',
      fontWeight: 'bold',
      padding: '10px 20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.2)',
    },
  },
  {
    id: 'dec2',
    type: 'output',
    position: { x: 500, y: 350 },
    data: { label: 'WhipDecorator' },
    style: {
      background: '#e0e7ff',
      color: '#3730a3',
      border: '2px dashed #6366f1',
      fontWeight: 'bold',
      padding: '10px 20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.2)',
    },
  },
];

const decoratorEdges: Edge[] = [
  {
    id: 'e1-2',
    source: 'component',
    target: 'base',
    label: 'implements',
    animated: false,
    style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' },
    labelStyle: { fill: '#d97706', fontWeight: 600 },
  },
  {
    id: 'e1-3',
    source: 'component',
    target: 'decorator',
    label: 'implements & wraps',
    animated: true,
    style: { stroke: '#6366f1', strokeWidth: 2 },
    labelStyle: { fill: '#4f46e5', fontWeight: 600 },
  },
  {
    id: 'e3-4',
    source: 'decorator',
    target: 'dec1',
    label: 'extends',
    animated: false,
    style: { stroke: '#6366f1', strokeWidth: 2, strokeDasharray: '5,5' },
    labelStyle: { fill: '#4f46e5', fontWeight: 600 },
  },
  {
    id: 'e3-5',
    source: 'decorator',
    target: 'dec2',
    label: 'extends',
    animated: false,
    style: { stroke: '#6366f1', strokeWidth: 2, strokeDasharray: '5,5' },
    labelStyle: { fill: '#4f46e5', fontWeight: 600 },
  },
];

export default function DecoratorPatternPage() {
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Decorator Pattern
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          The Decorator Pattern attaches additional responsibilities to an object dynamically. 
          Decorators provide a flexible alternative to subclassing for extending functionality. It's like wrapping an object in layers of onions!
        </p>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative">
          <InteractivePatternViewer
            initialNodes={decoratorNodes}
            initialEdges={decoratorEdges}
          />
        </div>
      </div>
      
      <div className="mt-12 bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">How it works</h3>
        <ul className="space-y-3 text-indigo-800">
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-200 flex items-center justify-center text-sm font-bold mt-0.5 mr-3">1</span>
            <span>You start with a core <strong>Component</strong> interface (e.g., Coffee) and a concrete core class (SimpleCoffee).</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-200 flex items-center justify-center text-sm font-bold mt-0.5 mr-3">2</span>
            <span>You create a <strong>Decorator</strong> that both *implements* the Component interface AND *holds a reference* to a Component inside itself.</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-200 flex items-center justify-center text-sm font-bold mt-0.5 mr-3">3</span>
            <span>Concrete Decorators (Milk, Whip) wrap the inner component, executing their own behavior before or after delegating to the inner component (e.g., adding milk cost to the base cost).</span>
          </li>
        </ul>
      </div>

      <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-6">TypeScript Implementation</h3>
        <p className="text-slate-600 mb-4">
          Here is how you wrap a base coffee order with dynamic add-ons using the Decorator Pattern at runtime.
        </p>
        <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm font-mono text-slate-300 leading-relaxed">
            <code>
{\`// 1. The Component Interface
interface Coffee {
  getCost(): number;
  getDescription(): string;
}

// 2. Concrete Component (The base object)
class SimpleCoffee implements Coffee {
  getCost() { return 2; }
  getDescription() { return "Simple Coffee"; }
}

// 3. Base Decorator (Implements interface & wraps an object)
abstract class CoffeeDecorator implements Coffee {
  protected decoratedCoffee: Coffee;

  constructor(coffee: Coffee) {
    this.decoratedCoffee = coffee;
  }

  getCost() { return this.decoratedCoffee.getCost(); }
  getDescription() { return this.decoratedCoffee.getDescription(); }
}

// 4. Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
  getCost() { return super.getCost() + 0.5; }
  getDescription() { return super.getDescription() + ", Milk"; }
}

class WhipDecorator extends CoffeeDecorator {
  getCost() { return super.getCost() + 0.7; }
  getDescription() { return super.getDescription() + ", Whip"; }
}

// Client Code
let myOrder: Coffee = new SimpleCoffee();
console.log(myOrder.getDescription() + " $" + myOrder.getCost()); 
// Output: Simple Coffee $2

// Wrap it in Milk!
myOrder = new MilkDecorator(myOrder);
console.log(myOrder.getDescription() + " $" + myOrder.getCost()); 
// Output: Simple Coffee, Milk $2.5

// Wrap it in Whip!
myOrder = new WhipDecorator(myOrder);
console.log(myOrder.getDescription() + " $" + myOrder.getCost()); 
// Output: Simple Coffee, Milk, Whip $3.2\`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
