# General Coding Rules

## Standards Points

- **Testing Attribute and Assessable Attribute** must be added.

---

## Coding Rules

- Use constants for strings used in more than one place.
- Use Recoil state properly throughout the whole project so that data updates in one file are reflected in other relevant pages.
- Forms should only be made using Formik with validation handled by `ZOD`.
  - For simple validations, use the `validate` method.
- For states used in more than one component (e.g., in two components), use Recoil state.
- **Alerts**:
  - Use `useIonAlert()` to show an alert inside a React component.
  - Use `Dialog.alert` from `@capacitor/dialog` to show alerts in non-React components, such as helper files.
  - Use `useIonToast()` to display toast messages inside React components.
- **Loaders**:
  - Use `useIonLoading()` to show loading alerts inside React components (e.g., while fetching data or submitting a form).
- Avoid using the `any` type in your own code unless absolutely necessary:
  - `any` is allowed only for external packages where the type is unknown.
  - For custom code, always use proper types.
- Write descriptive names for parameters, functions, constants, etc.
  - Avoid generic names like `const selectFromTemplate = (e: string) => {...}`.
  - Naming conventions:
    - Global constants: Use all capitals (e.g., `GOOGLE`).
    - Function parameters inside React components: Start with `_` (e.g., `_userInfo`).
    - Variables/constants inside a React function: Start with `**` (e.g., `**constantName`).
- For simple validation checks, use the `validator` package.
- Select option values should be all lowercase.
- Ensure database entries are case-insensitive.
- Never throw an error in a top-level `catch` block:
  - Instead, report errors using the `reportCustomError` helper function.
- Wrap all function bodies, conditionals, and loop content in `{}` for consistency.
- Use absolute imports for easier refactoring instead of relative imports.
- Ensure all tasks for dynamic components or pages are completed before navigation or reloading:
  - Example issues:
    - Calling `dismiss` for a modal and then navigating can cause problems.
    - Resetting state before navigation can lead to unexpected behaviors.

---

## Forms

- Every field should be handled using Formik.
- Always set field values using Formik (unless explicitly instructed otherwise).
  - This makes pre-populating forms for editing easier.
- Validation for Formik fields should be handled by helper functions like `validateFields` or `validateField`.
- Form submission logic must be in a separate function and assigned to the `onSubmit` property of the Formik component.

---

## Components

- Create custom components for library components and pass required props as custom props.
  - This ensures updates across the project can be made by modifying the custom component.
  - Example: Check `components/ZIonComponents/ZIonButton.tsx`.
- Use self-closing tags for components without children:
  - **Bad**: `<input></input>`
  - **Good**: `<input />`

---

## File/Folder/Variable Naming Rules

### TypeScript Files/Folders

- TypeScript Files/Folders (In generic any "ts" file)
- Includes: Types files, Recoil state files, utility files, data files, assets files.
- Rules:
  - Files: Use camel case (e.g., `zaionsAppSetting.type.ts`).
  - Folders: Same as files (e.g., `appSettings`).

### React Files (Components/Pages/etc.)

- Use Pascal case (e.g., `ZaionsHome.tsx`, `ZaionsDashboard.tsx`).

### Variables/Constants/Functions

- **Global Constants**:
  - Use snake case with all capitals (e.g., `SOME_GLOBAL_CONSTANT`).
- **Component Variables/Constants/Functions**:
  - Use camel case (e.g., `userDataInfo`).
- **Function Parameters**:
  - Start with `_` (e.g., `_param1`, `_param2`) and use camel case.
- **Variables Inside Functions**:
  - Start with `**` (e.g., `**someVar`) and use camel case.

---

## Lazy Loading

- Use `React.lazy` for lazy loading main page components (e.g., in `AppRoutes.tsx`).
- For in-page components, use `React.lazy` (example: `src/pages/Home/index.tsx`).
- Use `<ZIonImg />` for all images to enable lazy loading automatically.
  - **Note**: Provide meaningful `alt` text for all images.

---

## Known Errors and Alerts

### Error: "Trying to access property of undefined."

- **Description**: This error occurs when accessing a deeply nested property without null checks (e.g., `obj1.obj2.obj3.keyName`).
- **Solution**: Use optional chaining:
  - **Bad**: `obj1.obj2.obj3.keyName`
  - **Good**: `obj1?.obj2?.obj3?.keyName`

### Catch Block Errors

- Always use an error-reporting function in `catch` blocks.
- Never leave a `catch` block unhandled.
