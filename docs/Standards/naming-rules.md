---
sidebar_position: 1
---

# Naming Conventions

This document provides simple rules for naming and organizing files, folders, variables, and constants in this project. Following these standards keeps the code clean, easy to read, and consistent.

## TypeScript Files/Folders

These guidelines apply to general TypeScript (`.ts`) files, including files for types, Recoil state, utilities, data, and assets.

### Structure

- **Includes**:
  - Types files
  - Recoil state files
  - Utility files
  - Data files
  - Asset files

### Naming Rules

- **Files**: Use **Camel Case** format. Example: `perkforceAppSetting.ts`  
  For more information on Camel Case, refer to this [Camel Case Guide](https://www.techtarget.com/whatis/definition/CamelCase).
- **Folders**: Follow the same **Camel Case** convention as files.

---

## React Files (Components, Pages, etc.)

Use these conventions for files containing JSX or TSX code, such as React components or pages.

### Naming Rules

- Use **Pascal Case** for file names.
  - Example: `PerkForm.tsx`, `PerkDashboard.tsx`
- For additional details on Pascal Case, see this [Pascal Case Guide](https://www.theserverside.com/definition/Pascal-case).

---

## Variables, Constants, and Functions

### Global Constants

- Use **Snake Case** in all capital letters for global constants.
  - Example: `SOME_GLOBAL_CONSTANT`
- Refer to this [Snake Case Guide](https://www.theserverside.com/definition/Snake-case) for more information.

### Component-level Variables, Constants, and Function Names

- Use **Camel Case** for variables, constants, and function names within components.
  - Example: `userDataInfo`
- For reference, see this [Camel Case Guide](https://www.techtarget.com/whatis/definition/CamelCase).

### Function Parameters

- Start function parameter names with an underscore (`_`), followed by **Camel Case**.
  - Example: `const someFunction = (_param1, _param2) => { ... }`

### Variables/Constants Inside Functions

- Prefix with double underscores (`__`) and use **Camel Case** after.
  - Example: `const someFunction = (_param1, _param2) => { __someVar = "value"; }`
