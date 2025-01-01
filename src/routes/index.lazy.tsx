import { createLazyFileRoute } from "@tanstack/react-router";

import { MainLayout } from "@/components/main/layout-main.tsx";

export const Route = createLazyFileRoute("/")({
  component: MainLayout,
});
