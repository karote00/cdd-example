---
id: ai-integration
title: How AI Can Use This Architecture
sidebar_position: 7
sidebar_label: AI Agents Integration
---

In the CDD architecture, AI agents are treated as **intent emitters** and **state observers**, integrated via the same event pipeline and API interfaces as human users. We support two types of AI agents with distinct responsibilities and boundaries.

---

## 🤖 Two Types of AI Agents

1. **Development AI Agents**  
   Internal agents that assist with building the product (e.g. generating tools, automating workflows).

   - Can emit new domain-specific events to `reactive-events`
   - Can create new handlers and APIs in `core`
   - Capable of helping humans design or extend the system itself

2. **User-Facing AI Agents**  
   External agents (e.g. via MCP) that assist end users with tasks.
   - Cannot mutate system architecture
   - Can only call public APIs exposed by `core`
   - Must follow the same permission, access, and validation pipeline as human actions

---

## 🗂️ Involved Repos

`core`, `reactive-events`, `ai-agent` (in future), `system-context`

---

## 🔁 Event & Execution Flow

This flow diagram shows how **Development AI Agents** can introduce new capabilities to the system:

```mermaid
sequenceDiagram
participant AA as AI Agent (internal)
participant Reactive Events
participant Core
participant UI
participant State

AA->>Reactive Events: define 'feature.generate-thumbnail'
Reactive Events->>Core: create handler for 'feature.generate-thumbnail'
UI->>Reactive Events: emit({ type: 'feature.generate-thumbnail' })
Reactive Events->>Core: dispatch event
Core->>State: mutate context state
Core-->>UI: update via context providers
```

In contrast, **User-Facing AI Agents** interact with the system through pre-defined APIs only:

```mermaid
sequenceDiagram
participant AA as AI Agent (external)
participant Core API
participant Reducer
participant UI

AA->>Core API: call `applyLayoutGrid(...)`
Core API->>Reducer: validate and execute action
Reducer->>UI: update context state
```

---

## 🧱 Design Principles

To keep both AI types safely decoupled from core logic:

- Internal AI agents contribute to the **event definition layer**
- External AI agents interact only through **explicit public APIs**
- No AI can directly mutate shared state—they always go through the same reducers and validators
- All actions are observable, reversible, and trackable

---

## 🧠 Summary

- AI is a **first-class participant** in the CDD system—no backdoors or privileged shortcuts
- Internal AIs help evolve the system by working through `reactive-events` and `core`
- External AIs (via MCP) operate safely within API boundaries
- This makes AI a modular, testable, and predictable part of your architecture
