import { Box, Image, Card, Flex } from "@mantine/core";
import SplitLayout from "../components/SplitLayout";

function Home() {
  return (
    <Box flex={1}>
      <Card radius={0}>
        <SplitLayout
          children={{
            left: <HomeInformation />,
            right: <Image src="./src/assets/notFound.svg" />,
          }}
        />
      </Card>
    </Box>
  );
}

function HomeInformation() {
  return (
    <Flex direction="column" align="center" justify="center">
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
    </Flex>
  );
}

export default Home;
