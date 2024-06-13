import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import theme from "./theme.tsx";
import { RouterProvider } from "react-router-dom";
import routes from "./router/routes.tsx";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <>
      <ColorSchemeScript />
      <MantineProvider theme={theme}>
        <RouterProvider router={routes} />
      </MantineProvider>
    </>
  );
}
