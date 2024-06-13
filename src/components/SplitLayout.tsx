import { SimpleGrid } from "@mantine/core";

type SplitLayoutProps = {
  reverse?: "ltr" | "rtl";
  children: { left: any; right: any };
};

function SplitLayout({ reverse, children }: SplitLayoutProps) {
  const { left, right } = children;

  return (
    <SimpleGrid cols={2} dir={reverse}>
      <div>{left}</div>
      <div>
        {/* <Image src="./src/assets/notFound.svg" /> */}
        {right}
      </div>
    </SimpleGrid>
  );
}

export default SplitLayout;
