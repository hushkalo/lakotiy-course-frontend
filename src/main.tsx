import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "@/lib/i18n";
import "./index.css";

import { MainLayout } from "@/components/main/layout-main.tsx";

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <MainLayout />
    </StrictMode>
  );
}
