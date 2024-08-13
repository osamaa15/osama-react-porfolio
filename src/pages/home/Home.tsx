import {
  Box,
  Image,
  Card,
  Flex,
  Title,
  Text,
  Badge,
  Stack,
  Center,
  ActionIcon,
  Anchor,
  Transition,
} from "@mantine/core";
import SplitLayout from "../../components/SplitLayout";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import osama from "../../assets/osama.png";
import { useEffect, useState } from "react";

function Home() {
  // Hooks
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  // Handle funtions

  // Template
  return (
    <Flex align={"center"}>
      <Transition
        mounted={mount}
        transition="fade-left"
        duration={3000}
        timingFunction="ease"
      >
        {(styles) => (
          <Card style={styles}>
            <SplitLayout
              children={{
                left: <HomeInformation />,
                right: (
                  <Card withBorder={false} bg={"#FCC419"} p={0}>
                    <Box>
                      <Center>
                        <Image
                          style={{ pointerEvents: "none" }}
                          radius={"lg"}
                          fit="contain"
                          src={osama}
                        />
                      </Center>
                    </Box>
                  </Card>
                ),
              }}
            />
          </Card>
        )}
      </Transition>
    </Flex>
  );
}

function HomeInformation() {
  // Hooks

  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 320px)");
  // const n = useNavigate();
  // Handle functions

  // Template
  return (
    <Stack justify="center" h={"100%"} align={"center"} gap={"md"}>
      <Box>
        <Title tt={"uppercase"}>Hi There!</Title>
      </Box>
      <Box>
        <Title fw={700} size={isSmallScreen ? "h5" : "h3"} ta={"center"}>
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

      <Flex gap={"md"}>
        <Anchor href="https://github.com/osamaa15" target="_blank">
          <ActionIcon>
            <IconBrandGithub />
          </ActionIcon>
        </Anchor>
        <Anchor
          href="https://www.linkedin.com/in/muhammad-osama-iftikhar-ba7529244/"
          target="_blank"
        >
          <ActionIcon>
            <IconBrandLinkedin />
          </ActionIcon>
        </Anchor>

        {/* <button onClick={() => n("/comments")}>click</button> */}
      </Flex>
    </Stack>
  );
}

export default Home;
