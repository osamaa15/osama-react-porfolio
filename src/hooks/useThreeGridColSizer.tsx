import { useMediaQuery } from "@mantine/hooks";

function useThreeGridColSizer() {
  // Example usage: detect if screen width is greater than 600px
  const isLargeScreen = useMediaQuery("(min-width: 600px)");

  // Example usage: detect if screen width is less than 992px
  const isSmallScreen = useMediaQuery("(max-width: 992px)");

  // Example usage: detect if screen is extra-large (1200px and up)
  const isExtraLargeScreen = useMediaQuery("(min-width: 1200px)");

  if (isExtraLargeScreen) {
    return 3;
  } else if (isLargeScreen) {
    return 1;
  } else if (isSmallScreen) {
    return 1;
  }
}

export default useThreeGridColSizer;
