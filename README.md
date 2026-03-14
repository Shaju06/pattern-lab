# Pattern Playground

Welcome to **Pattern Playground**! A fun, interactive visual playground to learn and understand Software Design Patterns without falling asleep reading dry text blocks.

## 🚀 Features

Built with a stunning, modern **Light Mode aesthetic** (`Tailwind CSS v4`), the playground gives you a vibrant environment to explore complex topics. 

The site utilizes **React Flow** to generate interactive node diagrams allowing you to physically drag objects around to understand how different components inside a design pattern interact with each other.

### Currently Available Patterns:

1. **Factory Pattern**: See how a Client delegates the creation of specific objects to a centralized Factory class without knowing the concrete implementations.
2. **Singleton Pattern**: Understand how multiple clients share the *exact same* instance of a Database Connection in memory.
3. **Observer Pattern**: Watch a News Publisher dispatch events dynamically to multiple subscribed Observers (like a Mobile App and an Email Alert).
4. **Strategy Pattern**: Visualize a Shopping Cart dynamically swapping between different payment algorithms (Credit Card, PayPal, Crypto) at runtime.
5. **Decorator Pattern**: Interactively see how a simple Coffee object gets layered with Milk and Whip decorators to add new behavior dynamically without subclassing.

---

## 💻 TypeScript First

Visualizing is great, but how do you actually code it? 
Every pattern in the playground finishes with a **complete, copy-pasteable TypeScript implementation block** so you can see exactly how the visual flow translates into production code.

---

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the playground!

---

### Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- [React](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [React Flow](https://reactflow.dev)
