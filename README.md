# CDD Example

**Communication-Driven Development (CDD)** is a development approach that emphasizes **explicit communication not only between software components but also among people** involved in the development process.

By fostering clear, structured communication, CDD helps both the system and the team better understand how to collaborate effectively and build the right product.

In this model:

- System behavior is driven by explicit messages and events exchanged between decoupled components
- Teams maintain shared understanding through transparent communication patterns
- Components react only to relevant events, making the system modular and easier to maintain
- This approach bridges technical design and human collaboration for better product outcomes

This repository demonstrates how to implement CDD principles in a frontend application using reactive events and scoped data contexts.  
Each sub-repo highlights part of the pattern — it is a minimal example, **not a full product**.

---

## Important Notes

- This repo will **not receive further updates** and serves as a static example only.
- The implemented features are designed to illustrate CDD workflows and ideas, not to be a complete product.
- If you open the demo site for the first time and pressing **R** to create a rectangle does not work properly, please click the **RESET** button at the top-left corner once to reset the scene. After that, the feature should work as expected.

---

## Documentation Links

- [CDD Docs](https://cdd-docs.vercel.app/)
- [CDD Demo](https://cdd-demo.vercel.app/)

---

## Available Actions in the Demo

- Press **V** to switch to the **Select Tool**
- Press **R** to switch to the **Create Rectangle Tool**
- Scroll mouse wheel to **pan** the viewport
- Hold **Cmd + Scroll** to **zoom** the viewport
- In **Create Rectangle Tool** mode, **left-click** on the canvas to create a rectangle
- Use the **Element Panel** on the left to **select an element**
- The **Property Panel** on the right shows properties of the selected element
- Use the input fields in the **Property Panel** to **edit element properties**
- Press **Cmd + 1** to **fit-zoom** the viewport
- Press **Cmd + Z** to **undo**
- Press **Cmd + Shift + Z** to **redo**

---

## How to Run This Project

To start all apps locally for demonstration purposes, run:

```bash
yarn dev:all
```

This will launch the example setup.
Please note that **none of the individual repos include their own README** —
for explanations, structure, and usage details, please refer to the [documentation site](https://cdd-docs.vercel.app/).

---

## Contribution & Maintenance

This repository is provided **for learning and demonstration purposes only**.  
It is **not intended for production use** and will **not receive further updates**.

We are **not accepting any Issues or Pull Requests** for this repository.

However, you're more than welcome to **fork this project**, **add new features**, or even **build your own product** based on it.  
We hope this example helps you better understand the principles of Communication-Driven Development.

Thank you for your interest and understanding!

---

For more details about CDD concepts, please refer to the documentation.  
Feel free to explore and learn!
