'use client';

import InteractivePatternViewer from '@/components/InteractivePatternViewer';
import { Edge, Node } from 'reactflow';

const observerNodes: Node[] = [
  {
    id: 'subject',
    type: 'input',
    position: { x: 250, y: 50 },
    data: { label: 'Subject (News Publisher)' },
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
    id: 'obs1',
    type: 'output',
    position: { x: 100, y: 250 },
    data: { label: 'Observer 1 (Mobile App)' },
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
    id: 'obs2',
    type: 'output',
    position: { x: 400, y: 250 },
    data: { label: 'Observer 2 (Email Alert)' },
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
    id: 'state',
    type: 'output',
    position: { x: 250, y: 400 },
    data: { label: 'Event: "Breaking News!"' },
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

const observerEdges: Edge[] = [
  {
    id: 'e1-2',
    source: 'subject',
    target: 'obs1',
    label: 'notify()',
    animated: true,
    style: { stroke: '#f59e0b', strokeWidth: 2 },
    labelStyle: { fill: '#d97706', fontWeight: 600 },
  },
  {
    id: 'e1-3',
    source: 'subject',
    target: 'obs2',
    label: 'notify()',
    animated: true,
    style: { stroke: '#f59e0b', strokeWidth: 2 },
    labelStyle: { fill: '#d97706', fontWeight: 600 },
  },
  {
    id: 'e2-4',
    source: 'obs1',
    target: 'state',
    label: 'receives',
    animated: false,
    style: {
      stroke: '#6366f1',
      strokeWidth: 2,
      strokeDasharray: '5,5',
    },
    labelStyle: { fill: '#4f46e5', fontWeight: 600 },
  },
  {
    id: 'e3-4',
    source: 'obs2',
    target: 'state',
    label: 'receives',
    animated: false,
    style: {
      stroke: '#6366f1',
      strokeWidth: 2,
      strokeDasharray: '5,5',
    },
    labelStyle: { fill: '#4f46e5', fontWeight: 600 },
  },
];

export default function ObserverPatternPage() {
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Observer Pattern
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          The Observer Pattern defines a one-to-many
          dependency between objects so that when one object
          changes state, all its dependents are notified and
          updated automatically. Welcome to the world of
          Event Listeners!
        </p>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative">
          <InteractivePatternViewer
            initialNodes={observerNodes}
            initialEdges={observerEdges}
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
              The <strong>Subject</strong> holds a list of
              Observers (subscribers) who want to be
              notified of changes.
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-200 flex items-center justify-center text-sm font-bold mt-0.5 mr-3">
              2
            </span>
            <span>
              When an event happens, the Subject iterates
              through its list and calls the{' '}
              <code>update()</code> method on each Observer.
            </span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-200 flex items-center justify-center text-sm font-bold mt-0.5 mr-3">
              3
            </span>
            <span>
              The <strong>Observers</strong> react to the
              new state they received from the Subject
              without the Subject needing to know what they
              do with it.
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-6">
          TypeScript Implementation
        </h3>
        <p className="text-slate-600 mb-4">
          Here is how you might implement the Observer
          pattern to handle news publications to various
          listeners.
        </p>
        <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm font-mono text-slate-300 leading-relaxed">
            <code>
              {`// 1. Observer Interface
interface Observer {
  update(news: string): void;
}

// 2. Concrete Observers
class MobileApp implements Observer {
  update(news: string) {
    console.log(\`📱 Mobile push notification: \${news}\`);
  }
}

class EmailAlert implements Observer {
  update(news: string) {
    console.log(\`📧 Sending email alert: \${news}\`);
  }
}

// 3. Subject Class
class NewsPublisher {
  private observers: Observer[] = [];

  // Subscription management
  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // State change triggers notification
  publishNews(news: string) {
    console.log(\`\\n📢 Publisher generating news: \${news}\`);
    this.notifyAll(news);
  }

  private notifyAll(news: string) {
    for (const observer of this.observers) {
      observer.update(news);
    }
  }
}

// Client code
const publisher = new NewsPublisher();
const appSubscriber = new MobileApp();
const emailSubscriber = new EmailAlert();

publisher.subscribe(appSubscriber);
publisher.subscribe(emailSubscriber);

publisher.publishNews("Aliens have landed! 👽");\`}
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
