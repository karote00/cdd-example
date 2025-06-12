---
sidebar_position: 4
title: CDD vs Alternatives
---

How does **Communication-Driven Development (CDD)** compare to other popular approaches?

This section highlights how CDD differs from:

- **Layered Architecture**
- **Object-Oriented Design (OOD)**
- **Event-Driven Architecture (EDA)**
- **Domain-Driven Design (DDD)**
- **Behavior-Driven Development (BDD)**

---

## 1. CDD vs Layered Architecture

| Aspect       | Layered Architecture          | CDD                                                      |
| ------------ | ----------------------------- | -------------------------------------------------------- |
| Structure    | Strict, hierarchical layers   | Communication-driven contexts with loose coupling        |
| Dependencies | Downward-only dependencies    | Decoupled via message contracts                          |
| Flexibility  | Changes ripple through layers | Modules evolve independently if messages stay consistent |

Layered Architecture enforces strict dependency direction, which can cause tight coupling and ripple effects.  
CDD flips the focus to **communication contracts**, enabling independent evolution and easier scaling.

---

## 2. CDD vs Object-Oriented Design (OOD)

| Aspect          | OOD                                 | CDD                                          |
| --------------- | ----------------------------------- | -------------------------------------------- |
| Focus           | Data structures & interfaces        | Communication semantics (messages)           |
| Composition     | Class inheritance, polymorphism     | Event emission, subscription                 |
| Change strategy | Encapsulate behavior inside objects | Decouple behavior through observable streams |
| Problem         | Tends to hide intent                | Surfaces intent via clear message contracts  |

OOD encourages encapsulation but can obscure the _intent_ behind changes.  
CDD makes intent explicit via messages, aiding debugging, tooling, and collaboration.

---

## 3. CDD vs Event-Driven Architecture (EDA)

| Aspect    | EDA                                  | CDD                                  |
| --------- | ------------------------------------ | ------------------------------------ |
| Scale     | System-wide events                   | Context-level communication          |
| Messaging | Infrastructure-focused (e.g., Kafka) | Semantic and domain-level messages   |
| Tooling   | Heavyweight (brokers, queues)        | Lightweight (RxJS, observers, CRDTs) |

Both focus on events, but CDD emphasizes **meaningful, scoped conversations** rather than global messaging infrastructure.

---

## 4. CDD vs Domain-Driven Design (DDD)

| Aspect         | DDD                                 | CDD                           |
| -------------- | ----------------------------------- | ----------------------------- |
| Focus          | Modeling domain logic               | Modeling system communication |
| Unit of design | Aggregates, entities, value objects | Contexts and message flows    |
| Coordination   | Domain services                     | Reactive messaging            |

CDD and DDD complement each other:  
DDD models _what_ the domain means,  
CDD models _how_ parts of the system communicate.

---

## 5. CDD vs Behavior-Driven Development (BDD)

| Aspect | BDD                                  | CDD                                       |
| ------ | ------------------------------------ | ----------------------------------------- |
| Focus  | Behavior specification & testing     | Communication design and system structure |
| Output | Human-readable tests and scenarios   | Message contracts and module interactions |
| Goal   | Shared understanding of requirements | Robust, extensible software architecture  |

BDD defines **expected behaviors** to improve collaboration and ensure requirements clarity.  
CDD designs the **communication paths** that implement those behaviors at runtime.

---

## Summary

CDD is not a replacement for other approaches, but a **shift in emphasis**:

- It improves on Layered Architecture by breaking strict dependency directions.
- It reveals intent more clearly than OOD.
- It scopes communication more meaningfully than EDA.
- It complements DDD’s domain focus with communication design.
- It supports BDD’s behavioral clarity with a robust communication architecture.

> CDD focuses on communication as the core contract between parts of a system — and between humans and software.
