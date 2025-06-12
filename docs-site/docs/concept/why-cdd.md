---
sidebar_position: 2
title: Why CDD?
---

CDD is not just a pattern — it's a mindset.  
It reimagines system architecture from the ground up by placing **communication** at the center of design.

## The Problem with Traditional Architecture

Traditional layered or feature-based architectures often focus on _data ownership_, _object modeling_, or _component hierarchy_.  
But in complex systems, these boundaries quickly blur—modules grow tightly coupled, and cross-cutting concerns become hard to manage.

Most importantly, **they don't reflect how the system actually behaves**.

## CDD's Core Idea

CDD starts with the question:

> “**What are the core messages that flow through this system?**”

By identifying **what is communicated**, **who needs to know**, and **how they react**, you begin to uncover the _true shape_ of your system—one built on **interactions**, not objects.

This leads to:

- 📦 **Modular design** – Each module is responsible for how it listens and reacts to specific messages.
- 🧭 **Predictability** – You can trace system behavior just by following the communication flow.
- 🎯 **Decoupling by intent** – Instead of calling methods or sharing state directly, modules **observe** and **react** to meaningful events.

## CDD vs Event-Driven Architecture

While similar in surface, **CDD is not just event-driven**.

|                         | Event-Driven                 | Communication-Driven (CDD)              |
| ----------------------- | ---------------------------- | --------------------------------------- |
| Focus                   | Emitting and handling events | Designing around communication patterns |
| Implementation-first    | Usually yes                  | Often no—starts with semantics          |
| Communication semantics | Implicit or ad-hoc           | Central and explicit                    |
| Suitable for            | Backend, pipelines           | Fullstack, cross-role design            |
| System understanding    | Hard to infer from code      | Clear from message contracts            |

## Why It Matters

Modern applications aren't just built by developers — they're designed by **teams**, including designers, product managers, and sometimes even AI agents.

CDD enables:

- 🧠 **Shared understanding across roles**
- 🔌 **Pluggable and testable modules**
- 📐 **Architectures that reflect real system behavior**

But more importantly, **CDD prepares us for the future**.

As collaboration between **humans and AI** becomes increasingly common, our systems must be **interactive and understandable** — not just to us, but to machines that work alongside us.

This is the foundation of **Vibe Coding**:

> Programming through shared context, intent, and interaction — across people and intelligent agents.

---

Communication isn't a side-effect — **it's the architecture**.
