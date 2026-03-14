import PatternCard from '@/components/PatternCard';

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-20">
        <h1 className="text-sm font-semibold uppercase tracking-wider text-indigo-600 mb-4 drop-shadow-sm">
          Welcome to
        </h1>
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 relative inline-block">
          Pattern Playground
          <svg className="absolute w-full h-4 -bottom-2 md:-bottom-4 left-0 text-indigo-200 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
             <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="8" fill="transparent"/>
          </svg>
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto">
          Learn complex software design patterns by interacting with them visually.
          Say goodbye to boring text blocks and hello to dynamic environments!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <PatternCard
          title="Factory Pattern"
          description="Create objects without exposing creation logic, delegating instantiation to subclasses."
          href="/patterns/factory"
        />
        <PatternCard
          title="Singleton Pattern"
          description="Ensure a class has only one instance, and provide a global point of access to it."
          href="/patterns/singleton"
        />
        <PatternCard
          title="Observer Pattern"
          description="Define a one-to-many dependency so that when one object changes state, all its dependents are notified."
          href="/patterns/observer"
        />
        <PatternCard
          title="Strategy Pattern"
          description="Define a family of algorithms, encapsulate each one, and make them interchangeable at runtime."
          href="/patterns/strategy"
        />
        <PatternCard
          title="Decorator Pattern"
          description="Attach additional responsibilities to an object dynamically without altering its structure."
          href="/patterns/decorator"
        />
      </div>
    </main>
  );
}
