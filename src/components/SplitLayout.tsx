import { Box, SimpleGrid } from "@mantine/core";

type SplitLayoutProps = {
  reverse?: "ltr" | "rtl";
  children: { left: any; right: any };
};

function SplitLayout({ reverse, children }: SplitLayoutProps) {
  const { left, right } = children;

  return (
    <SimpleGrid cols={2} dir={reverse}>
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
