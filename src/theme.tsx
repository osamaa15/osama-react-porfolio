import { MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  colors: {
    yellow: [
      "#FFF9DB",
      "#FFF3BF",
      "#FFEC99",
      "#FFE066",
      "#FFD43B",
      "#FCC419",
      "#FAB005",
      "#F59F00",
      "#F08C00",
      "#E67700",
    ],
  },
  primaryColor: "yellow",
  fontSmoothing: true,
  fontFamily: "Verdana, sans-serif",
  headings: { fontFamily: "Greycliff CF, sans-serif" },
  components: {
    Card: {
      defaultProps: {
        padding: "md",
        shadow: "xl",
        radius: "lg",
        withBorder: true,
      },
    },
    Flex: {
      defaultProps: {
        gap: "md",
      },
    },
    Badge: {
      defaultProps: {
        radius: "xs",
        size: "lg",
      },
    },
    Button: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
  },
};

export default theme;
