import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import theme from "./theme.tsx";
import { RouterProvider } from "react-router-dom";
import routes from "./router/routes.tsx";
import ThemeToggle from "./components/ThemeToggle.tsx";
import { NavigationProgress } from "@mantine/nprogress";
import "./App.css";
const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <>
      <ColorSchemeScript />
      <MantineProvider theme={theme}>
        <NavigationProgress />
        <ThemeToggle />
        <RouterProvider router={routes} />
      </MantineProvider>
    </>
  );
}
