import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Performance monitoring
if (process.env.NODE_ENV === "development") {
  console.log("🎉 Cayla's Birthday Website loaded");
  console.log("📊 Performance monitoring enabled");
}

// Measure page load performance
if (window.performance && window.performance.timing) {
  window.addEventListener("load", () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    if (process.env.NODE_ENV === "development") {
      console.log(`⏱️ Page load time: ${pageLoadTime}ms`);
    }
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
