# General Coding Rules

## How `useEffect`, `useIonViewWillEnter`, & `useIonViewWillLeave` Work

- **`useEffect`**:
  - Runs when the page is mounted or one of its dependencies changes.
  - In Ionic, if the page is mounted, it will not unmount until the app is refreshed.  
    This is why passing an empty dependency array will run the effect only once (when the page is mounted).
- **`useIonViewWillEnter`** and **`useIonViewWillLeave`**:
  - `useIonViewWillEnter`: Runs when the page gets focused (visible in the browser).
  - `useIonViewWillLeave`: Runs when the page is about to close.
- **Example**:
  - In `createNewShortLink`, if you want to fetch data from the backend every time the view is entered, use `useIonViewWillEnter` instead of `useEffect`.

## Object and Array Value Assignment to New Variables

- Objects and arrays are reference types, so they must be **destructured** before assigning to new variables.
- **Invalid**:

  ```javascript
  const newArray = oldArray;
  const newObject = oldObject;
  ```

- **Valid**:

  ```javascript
  const newArray = [...oldArray];
  const newObject = { ...oldObject };
  ```
