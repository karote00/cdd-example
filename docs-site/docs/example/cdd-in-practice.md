---
id: cdd-in-practice
title: CDD in Practice
sidebar_position: 1
sidebar_label: CDD in Practice
description: A real-world implementation of Communication-Driven Development using a modular design tool architecture.
---

In this section, we move beyond ideas and theory to show how **Communication-Driven Development (CDD)** is applied in a real-world project — a functional design tool built entirely around the CDD philosophy.

This design tool isn't just a demo — it’s a foundational implementation that reflects the complexity, scalability, and collaboration principles of CDD. While the feature set represents only a small fraction of what tools like Figma offer, the architectural design is intentionally modular and forward-compatible, laying the groundwork for larger, more ambitious projects.

## 📘 Scope and Purpose of This Example

This example project serves as a practical demonstration of the CDD workflow applied to a modular architecture.

The focus is on illustrating the overall design principles, inter-module communication, and feature integration patterns rather than delivering a full-fledged, production-ready system.

Each module or repository implements a minimal but representative slice of functionality to clarify responsibilities and showcase interaction flows.

As such, some feature aspects, interactions, or edge cases are intentionally simplified or omitted. This approach helps to keep the example clear and focused on demonstrating best practices for CDD, rather than complicating it with comprehensive implementation details.

When applying these concepts to your real-world projects, you may need to extend and refine the implementations to suit your specific requirements and product scope.

## 🧱 Modular Architecture, Driven by Communication

To fully demonstrate how CDD works in practice, we’ve implemented a simplified but complete design tool using a modular, repo-splitting architecture. Each repo has a single, focused responsibility, and all communication between them follows CDD principles.

- ### 🧠 `core`

  The central orchestrator of the system. It exposes a unified API that external consumers — including developers and AI agents — use to trigger operations. It listens to system-wide inputs (from `input-system`) and interprets actions (from `interaction-core`) to coordinate tool behavior.

- ### 🎨 `design-system`

  Shared design components such as buttons, inputs, dropdowns, and panels. This repo defines the consistent UI vocabulary across the entire application.

- ### 🏭 `factory`

  Manages the data lifecycle. It handles Yjs synchronization and groups multiple changes into a single transaction to ensure atomic updates and efficient state sharing.

- ### 🎮 `input-system`

  Handles low-level user input (mouse, keyboard, touch) and manages shortcut mapping. It serves as the entry point for physical user interaction.

- ### 🧩 `interaction-core`

  Interprets system state and user inputs to decide what **user action** should be triggered. It also supports interruption and replacement of ongoing actions, managing both discrete and continuous interactions.

- ### 🔄 `reactive-events`

  A lightweight event bus system for decoupled, reactive communication between modules. It's the backbone of inter-repo message flow.

- ### 🖼️ `render`

  Responsible for canvas rendering, using PixiJS or Three.js depending on 2D/3D context.

- ### 🌲 `scene-tree`

  Manages the hierarchical structure of design elements. It only handles `add`, `remove`, or `update` operations on elements and their associated property components — no business logic is included.

- ### 🧱 `props-manager`

  Manages property components such as `position`, `dimension`, `rotation`, etc. It provides a unified interface for manipulating props, and is used exclusively by `scene-tree`.

- ### ✨ `selection`

  Tracks the selection state of elements and vertices. Manages the selection **result state** only. Contains no selection logic or operations.

- ### ⚙️ `system-context`

  Stores system-wide states including mouse position, keyboard modifiers, configuration parameters, and other shared runtime states.

- ### 📦 `ui-context`

  Aggregates and processes data from various contexts to generate final, derived state for UI rendering. Think of it as a UI-specific selector layer.

- ### 🧰 `utils`

  A shared utility repo containing type definitions, constants, enums, and common helper functions used throughout the system.

---

## 🧩 Why This Structure Works

The design tool is intentionally complex enough to demonstrate key advantages of CDD:

- **Parallel Development**  
  Each repo can be developed, tested, and deployed independently. Teams can own modules without worrying about side effects.

- **High Scalability**  
  Adding a new feature (e.g. rotation, layers, plugins) simply involves a new module or an event extension — not a rewrite.

- **Future-Proofed for AI**  
  While the current implementation doesn’t yet integrate with AI agents, the architecture is designed with them in mind. The `core` module exposes a unified interface that external consumers — including future AI systems — can use to trigger operations. Events and states are machine-readable and explicitly structured, laying a solid foundation for future collaboration.

- **Consistent Terminology**  
  Shared types and events create a consistent language between modules — no ambiguity in data shape, naming, or behavior.

Together, these traits enable a system where **communication comes first** — enabling clarity, modularity, and long-term evolution.

---

Together, these repos illustrate how communication boundaries and data responsibilities can be made explicit — empowering teams (and AI) to interact with the system more clearly and consistently.

Each module only communicates through **well-defined APIs and shared events** — no internal coupling, no hidden state. If a module needs data, it **asks** for it. If a module updates state, it **emits** an event. This communication-first structure enables precise boundaries, easy testability, and clear mental models.

## 🧩 Why This Structure Works

The design tool is intentionally complex enough to demonstrate key advantages of CDD:

- **Parallel Development**  
  Each repo can be developed, tested, and deployed independently. Teams can own modules without worrying about side effects.

- **High Scalability**  
  Adding a new feature (e.g. rotation, layers, plugins) simply involves a new module or an event extension — not a rewrite.

- **Unified APIs, Built for AI (Future-Ready)**  
  This system doesn’t currently integrate with AI agents — but it’s designed to.

  Because each module communicates through events and the `core` provides a unified entry point, it’s easy for external systems — including AI — to observe, interpret, and trigger actions without needing to know internal details.

  It’s not AI-powered yet, but it’s **AI-capable by design**.
  And because the architecture is semantically clear and communication-first, it allows AI to assist with greater ease — so human developers can focus more on designing functionality, not deciphering structure.

- **Consistent Terminology**  
  Shared types and events create a consistent language between modules — no ambiguity in data shape, naming, or behavior.

## 🧪 Try It Yourself

You can explore the example design tool repo here:

> [GitHub - CDD Design Tool Example](https://github.com/karote00/cdd-example)

It includes:

- Canvas interactions (add, delete, update elements)
- Zoom and pan
- Undo/redo via transaction manager
- Fully reactive data flow
- Type-safe and event-driven architecture

This example is designed to be readable, extendable, and forkable — a learning tool for engineers and teams who want to embrace CDD in their own projects.

## 🔭 What’s Next

This is just the beginning. The current implementation covers around **0.1%** of a full-featured design tool, but a second, more comprehensive open-source version is planned — covering approximately 10% of the functionality found in modern, professional-grade design tools — showcasing CDD at full scale.

Stay tuned. Or better — start building with CDD yourself.
