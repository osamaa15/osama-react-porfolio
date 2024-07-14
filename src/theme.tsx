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
  fontFamily: "Greycliff CF, sans-serif",
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
    Avatar: {
      defaultProps: {
        radius: "xl",
        size: "lg",
        bg: "#F08C00",
      },
    },
    Fieldset: {
      defaultProps: {
        radius: "lg",
        variant: "filled",
      },
    },
    Blockquote: {
      defaultProps: {
        radius: "lg",
      },
    },
    Alert: {
      defaultProps: {
        radius: "lg",
        variant: "light",
      },
    },
    TextInput: {
      defaultProps: {
        radius: "md",
      },
    },
    Textarea: {
      defaultProps: {
        radius: "md",
      },
    },
    Pill: {
      defaultProps: {
        bg: "yellow",
        c: "black",
      },
    },

    Modal: {
      defaultProps: {
        closeOnClickOutside: false,
        centered: true,
      },
      styles: {
        title: { fontWeight: 700 },
      },
    },
  },
};

export default theme;
