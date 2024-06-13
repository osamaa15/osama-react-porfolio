import { Box, SimpleGrid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
type SplitLayoutProps = {
  reverse?: "ltr" | "rtl";
  children: { left: any; right: any };
};

function SplitLayout({ reverse, children }: SplitLayoutProps) {
  const { left, right } = children;
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <SimpleGrid cols={isSmallScreen ? 1 : 2} dir={reverse}>
      <Box w={"100%"} h={"100%"}>
        {left}
      </Box>
      <Box w={"100%"} h={"100%"}>
        {right}
      </Box>
    </SimpleGrid>
  );
}

export default SplitLayout;
