'use client';

import InteractivePatternViewer from '@/components/InteractivePatternViewer';
import { Edge, Node } from 'reactflow';

const strategyNodes: Node[] = [
  {
    id: 'context',
    type: 'input',
    position: { x: 250, y: 50 },
    data: { label: 'ShoppingCart (Context)' },
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
    id: 'interface',
    position: { x: 250, y: 200 },
    data: { label: 'PaymentStrategy (Interface)' },
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
    id: 'strat1',
    type: 'output',
    position: { x: 50, y: 350 },
    data: { label: 'CreditCardPayment' },
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
    id: 'strat2',
    type: 'output',
    position: { x: 250, y: 350 },
    data: { label: 'PayPalPayment' },
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
    id: 'strat3',
    type: 'output',
    position: { x: 450, y: 350 },
    data: { label: 'CryptoPayment' },
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

const strategyEdges: Edge[] = [
  {
    id: 'e1-2',
    source: 'context',
    target: 'interface',
    label: 'depends on',
    animated: true,
    style: { stroke: '#6366f1', strokeWidth: 2 },
    labelStyle: { fill: '#4f46e5', fontWeight: 600 },
  },
  {
    id: 'e2-3',
    source: 'interface',
    target: 'strat1',
    label: 'implemented by',
    animated: false,
    style: {
      stroke: '#f59e0b',
      strokeWidth: 2,
      strokeDasharray: '5,5',
    },
    labelStyle: { fill: '#d97706', fontWeight: 600 },
  },
  {
    id: 'e2-4',
    source: 'interface',
    target: 'strat2',
    label: 'implemented by',
    animated: false,
    style: {
      stroke: '#f59e0b',
      strokeWidth: 2,
      strokeDasharray: '5,5',
    },
    labelStyle: { fill: '#d97706', fontWeight: 600 },
  },
  {
    id: 'e2-5',
    source: 'interface',
    target: 'strat3',
    label: 'implemented by',
    animated: false,
    style: {
      stroke: '#f59e0b',
      strokeWidth: 2,
      strokeDasharray: '5,5',
    },
    labelStyle: { fill: '#d97706', fontWeight: 600 },
  },
];

export default function StrategyPatternPage() {
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Strategy Pattern
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          The Strategy Pattern defines a family of
          algorithms, encapsulates each one, and makes them
          interchangeable. It lets the algorithm vary
          independently from clients that use it. It's
          essentially "plug and play" behavior!
        </p>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative">
          <InteractivePatternViewer
            initialNodes={strategyNodes}
            initialEdges={strategyEdges}
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
              The <strong>Context</strong> (e.g., a Shopping
              Cart) needs to perform an action but the rules
              for it can change (e.g., payment methods).
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-200 flex items-center justify-center text-sm font-bold mt-0.5 mr-3">
              2
            </span>
            <span>
              Instead of putting all rules in one giant{' '}
              <code>if/else</code> statement, the Context
              delegates the work to a{' '}
              <strong>Strategy Interface</strong>.
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-200 flex items-center justify-center text-sm font-bold mt-0.5 mr-3">
              3
            </span>
            <span>
              You create multiple Concrete Strategies
              (CreditCard, PayPal, Crypto). The Client
              simply "plugs in" whichever class it wants to
              use at runtime!
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-6">
          TypeScript Implementation
        </h3>
        <p className="text-slate-600 mb-4">
          Here is how you inject different payment
          strategies into a shopping cart using the Strategy
          Pattern.
        </p>
        <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm font-mono text-slate-300 leading-relaxed">
            <code>
              {`// 1. The Strategy Interface
interface PaymentStrategy {
  pay(amount: number): void;
}

// 2. Concrete Strategies (The Algorithms)
class CreditCardPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(\`💳 Paid $\${amount} using Credit Card.\`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(\`📱 Paid $\${amount} using PayPal.\`);
  }
}

class CryptoPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(\`🪙 Paid $\${amount} using Cryptocurrency.\`);
  }
}

// 3. The Context
class ShoppingCart {
  private paymentStrategy: PaymentStrategy;

  // We can plug in the strategy at construction...
  constructor(strategy: PaymentStrategy) {
    this.paymentStrategy = strategy;
  }

  // ...or change it dynamically!
  setStrategy(strategy: PaymentStrategy) {
    this.paymentStrategy = strategy;
  }

  checkout(amount: number) {
    if (!this.paymentStrategy) {
      throw new Error("No payment strategy set!");
    }
    // Context delegates the work!
    this.paymentStrategy.pay(amount);
  }
}

// 4. Client Code
const cart = new ShoppingCart(new CreditCardPayment());
cart.checkout(100); // 💳 Paid $100 using Credit Card.

// User switches to PayPal dynamically:
cart.setStrategy(new PayPalPayment());
cart.checkout(50); // 📱 Paid $50 using PayPal.\`}
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
