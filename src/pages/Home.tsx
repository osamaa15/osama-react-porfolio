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
  Button,
  Center,
} from "@mantine/core";
import SplitLayout from "../components/SplitLayout";
import { useNavigate } from "react-router-dom";

function Home() {
  // Hooks

  // Handle funtions

  // Template
  return (
    <Flex p={"xl"} align={"center"} h={"100vh"} w={"100vw"}>
      <Card bg={"#FFF9DB"}>
        <SplitLayout
          children={{
            left: <HomeInformation />,
            right: (
              <Card withBorder={false} bg={"#FCC419"} p={0}>
                <Box>
                  <Center>
                    <Image
                      radius={"lg"}
                      fit="contain"
                      src="./src/assets/osama.png"
                    />
                  </Center>
                </Box>
              </Card>
            ),
          }}
        />
      </Card>
    </Flex>
  );
}

function HomeInformation() {
  const navigate = useNavigate();
  return (
    <Stack justify="center" h={"100%"} align={"center"} gap={"md"}>
      <Box>
        <Title tt={"uppercase"}>Hi There!</Title>
      </Box>
      <Box>
        <Title fw={700} size={"h3"}>
          I'm{" "}
          <Text
            span
            variant="gradient"
            size={"xl"}
            gradient={{ from: "orange", to: "yellow", deg: 90 }}
            inherit
            tt={"uppercase"}
          >
            Muhammad Osama Iftikhar
          </Text>
        </Title>
      </Box>
      <Box>
        <Badge
          size="lg"
          variant="gradient"
          gradient={{ from: "yellow", to: "orange", deg: 180 }}
        >
          QA Analyst / Frontend Developer
        </Badge>
      </Box>

      <Text ta={"center"} w={"55%"}>
        I am a versatile and proficient manual tester (QA Analyst) in SQA.
        Additionally, I have extensive experience in software development,
        particularly proficient in React and Angular.
      </Text>

      <Box>
        <Button tt={"uppercase"} size={"lg"} onClick={() => navigate("/about")}>
          More About Me
        </Button>
      </Box>
    </Stack>
  );
}

export default Home;
