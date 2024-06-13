import {
  Box,
  Image,
  Card,
  Flex,
  Title,
  Text,
  Group,
  Badge,
  Stack,
} from "@mantine/core";
import SplitLayout from "../components/SplitLayout";

function Home() {
  return (
    <Box flex={1}>
      <Card radius={0}>
        <SplitLayout
          children={{
            left: <HomeInformation />,
            right: (
              <Card withBorder={false} bg={"#FCC419"} p={0}>
                <Image
                  radius={"lg"}
                  fit="contain"
                  // src="./src/assets/osama.png"
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"
                />
              </Card>
            ),
          }}
        />
      </Card>
    </Box>
  );
}

function HomeInformation() {
  return (
    <Stack justify="center" h={"100%"} align={"center"} gap={"md"}>
      <Box>
        <Title>HI THERE!</Title>
      </Box>
      <Box>
        <Group>
          <Text fw={700} size={"xl"}>
            I'M
          </Text>
          <Text
            variant="gradient"
            size={"xl"}
            gradient={{ from: "orange", to: "yellow", deg: 90 }}
            fw={600}
          >
            Muhammad Osama Iftikhar
          </Text>
        </Group>
      </Box>
      <Box>
        <Badge
          variant="gradient"
          gradient={{ from: "yellow", to: "orange", deg: 180 }}
        >
          QA Analyst / Frontend Developer
        </Badge>
      </Box>

      <Box>
        <Text ta={"center"}>
          I am a versatile and proficient manual tester (QA Analyst) in SQA.
          Additionally, I have extensive experience in software development,
          particularly proficient in React and Angular.
        </Text>
      </Box>
    </Stack>
  );
}

export default Home;
