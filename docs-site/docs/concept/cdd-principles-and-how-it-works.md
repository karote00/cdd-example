---
sidebar_position: 3
title: CDD Principles & How It Works
---

CDD isn't just a philosophy—it's a set of **practical design principles** that reshape how we structure codebases, teams, and systems.

At its core, CDD treats _communication_ as the primary interface between modules, developers, and tools.

## CDD Principles

1. **Start With Messages, Not Classes**  
   Messages reveal intent by describing _what_ happens, not _how_. Unlike traditional APIs or data models, messages form a clear communication contract that makes modules easier to understand, test, and evolve.
   Within CDD, each event name embodies a shared design understanding. These names become a **common language** across the team, grounded in domain knowledge and consistent terminology, enabling clearer collaboration across engineering, product, and design.

2. **Modules Are Defined by Their Conversations**  
   Every module acts as a **speaker**, **listener**, and sometimes a **translator** of messages. This reduces tight coupling, enforces clear boundaries, and enables advanced features like undo/redo and time-travel debugging.

3. **Repos Are Organized by Context, Not Layers**  
   Instead of classic MVC or layered folders, organize repositories and modules by **communication boundaries** (contexts). This fosters modularity and clarity.

4. **Communication Happens via Observable Events**  
   Runtime communication flows through semantic event streams (e.g., RxJS, event emitters, CRDTs). These events describe **what happened**, not how to handle it, enabling powerful tooling, logging, and AI integration.

5. **Communication Is Testable and Replayable**  
   Since system changes are driven by events, you can replay them to reconstruct state or write tests verifying module reactions—making debugging and maintenance easier.

## How CDD Works in Practice

- **Define Messages First:** Start by designing the semantic messages your system exchanges to express intent.
- **Design Modules Around Messages:** Build modules that emit, listen to, and translate these messages rather than exposing complex APIs.
- **Structure Repositories by Context:** Group related modules by their communication roles, not by UI or data layers.
- **Implement Observable Communication:** Use event streams or message buses to deliver messages consistently and reliably.
- **Leverage Replay & Testing:** Use message logs to replay interactions for debugging or testing purposes.

---

By embracing these principles, CDD creates software systems that are easier to reason about, extend, and collaborate on—whether with teams or AI.

> CDD makes communication a first-class concern, not an afterthought.
