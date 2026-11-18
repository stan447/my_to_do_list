// Import StrictMode to help React find potential problems.
import { StrictMode } from "react";
// Import createRoot to connect React to the HTML page.
import { createRoot } from "react-dom/client";
// Import the global CSS styles.
import "./index.css";
// Import the main App component.
import App from "./App.jsx";

// Find the root HTML element and create a React root.
createRoot(document.getElementById("root")).render(
  // Enable extra React development checks.
  <StrictMode>
    {/* Render the complete to-do application. */}
    <App />
  </StrictMode>,
);
