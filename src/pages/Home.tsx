import {
  Box,
  Image,
  Card,
  Flex,
  Title,
  Text,
  Badge,
  Stack,
  Button,
  Center,
  useComputedColorScheme,
} from "@mantine/core";
import SplitLayout from "../components/SplitLayout";
import { useNavigate } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import osama from "../assets/osama.png";
function Home() {
  // Hooks
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const colorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  // Handle funtions

  // Template
  return (
    <Flex
      p={isSmallScreen ? 0 : "xl"}
      align={"center"}
      h={"100vh"}
      w={"100vw"}
      bg={colorScheme === "dark" ? "" : "#FFF9DB"}
    >
      <Card radius={isSmallScreen ? 0 : "xl"}>
        <SplitLayout
          children={{
            left: <HomeInformation />,
            right: (
              <Card withBorder={false} bg={"#FCC419"} p={0}>
                <Box>
                  <Center>
                    <Image radius={"lg"} fit="contain" src={osama} />
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
  // Hooks
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 320px)");

  // Handle funtions

  // Template
  return (
    <Stack justify="center" h={"100%"} align={"center"} gap={"md"}>
      <Box>
        <Title tt={"uppercase"}>Hi There!</Title>
      </Box>
      <Box>
        <Title fw={700} size={isSmallScreen ? "h5" : "h3"}>
          I'm{" "}
          <Text
            span
            variant="gradient"
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

      <Text ta={"center"} w={isMobile ? "100%%" : "55%"}>
        I am a versatile and proficient manual tester (QA Analyst) in SQA.
        Additionally, I have extensive experience in software development,
        particularly proficient in React.
      </Text>

      <Box>
        <Button
          tt={"uppercase"}
          size={"lg"}
          rightSection={<IconArrowRight />}
          onClick={() => navigate("/section/about")}
        >
          More About Me
        </Button>
      </Box>
    </Stack>
  );
}

export default Home;
