# 🧱 React + TypeScript Context Skeleton

## 1. Create the Context

```tsx
// MyContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. Define the types of the values that are going to be consumed by components here.

type MyContextType = {
  value: string;
  setValue: (newValue: string) => void;
};

// 2. Create the context with default undefined

const MyContext = createContext<MyContextType | undefined>(undefined);

// 3. Create a function that takes in children (the react components that the context will wrap)
//then return the context's provider. This is also where to create state and pass it to the provider.

export const MyProvider = ({ children }: { children: ReactNode }) => {
  //create state --- the values to be consumed in components

  const [value, setValue] = useState("initialVal");

  //return context's provider with state's values passed in.

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

// 4. Custom hook for consuming the context safely

export const useMyContext = () => {
  const context = useContext(MyContext);

  //check whether the component where the context is being used actually has access to the values.
  //in other words, whether it is wrapped by the context's provider or not.

  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
```

---

## 2. Wrap Your App with the Provider

```tsx
// App.tsx
import { MyProvider } from "./MyContext";
import MyComponent from "./MyComponent";

function App() {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
}

export default App;
```

---

## 3. Consume the Context in a Child Component

```tsx
// MyComponent.tsx

//custom hook
import { useMyContext } from "./MyContext";

function MyComponent() {
  const { value, setValue } = useMyContext();

  return (
    <>
      <p>Current value: {value}</p>
      <button onClick={() => setValue("updated!")}>Update</button>
    </>
  );
}
```
