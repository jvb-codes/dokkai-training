import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ScreenIdContextProvider } from "./provider.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ScreenIdContextProvider>
      <App />
    </ScreenIdContextProvider>
  </StrictMode>
);
