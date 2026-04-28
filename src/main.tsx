import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DisplayIdContextProvider } from "./contexts/providedContexts/DisplayIdProvider.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DisplayIdContextProvider>
      <App />
    </DisplayIdContextProvider>
  </StrictMode>,
);
