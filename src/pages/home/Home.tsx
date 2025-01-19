import {
  Box,
  Image,
  Card,
  Flex,
  Title,
  Text,
  Badge,
  Stack,
  ActionIcon,
  Anchor,
  Transition,
  useMantineTheme,
  Spoiler,
} from "@mantine/core";
import SplitLayout from "../../components/SplitLayout";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import imageLogo from "../../assets/osama.png";
import { useEffect, useState } from "react";

function Home() {
  // Hooks
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  // Handle functions

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
          <>
            <Card style={styles}>
              <SplitLayout
                children={{
                  left: <HomeInformation />,
                  right: (
                    <Flex h={"100%"} align={"center"}>
                      <Card
                        h={"fit"}
                        bg={"linear-gradient(to right, #fcc419, #feb47b)"}
                        p={0}
                      >
                        <Box>
                          <Image
                            style={{
                              pointerEvents: "none",
                            }}
                            radius={"lg"}
                            fit="fill"
                            src={imageLogo}
                          />
                        </Box>
                      </Card>
                    </Flex>
                  ),
                }}
              />
            </Card>
          </>
        )}
      </Transition>
    </Flex>
  );
}

function HomeInformation() {
  // Hooks
  const theme = useMantineTheme();
  const isSmallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);
  // const n = useNavigate();
  // Handle functions

  // Template
  return (
    <Stack justify="center" h={"100%"} align={"center"} gap={"sm"}>
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
          size={isMobile ? "sm" : "lg"}
          variant="gradient"
          gradient={{ from: "yellow", to: "orange", deg: 180 }}
        >
          SQA Analyst | React Developer | Web Designer
        </Badge>
      </Box>

      <Spoiler
        maxHeight={80}
        showLabel="more"
        hideLabel="less"
        styles={{
          control: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          },
        }}
      >
        <Text ta={isMobile ? "center" : "justify"}>
          I am a versatile and proficient manual and automation tester (QA
          Analyst) in Software Quality Assurance (SQA) with extensive experience
          in software development and strong proficiency in React. I specialize
          in crafting user-centered content, dynamic web interfaces, and
          flawless software that deliver exceptional results. My expertise
          includes Web and UX Writing, creating clear and persuasive web copy
          aligned with brand voice, intuitive UX microcopy for seamless user
          navigation, SEO-optimized content to boost visibility, and structured
          content strategies for clarity and user-friendliness. As a React
          developer, I build responsive, interactive, and dynamic user
          interfaces using React.js and React Native, ensuring smooth
          functionality and exceptional user experiences. In SQA, I excel in
          manual and automation testing, leveraging tools like Cypress.js to
          develop scalable test frameworks, conduct in-depth exploratory and
          functional testing, and create robust automation scripts to enhance
          efficiency and product quality. I also design comprehensive test
          plans, write detailed test cases, and deliver actionable reports.
          Additionally, I am skilled in content writing, video editing, and
          creating detailed software documentation, including Software
          Requirement Specifications (SRS).
        </Text>
      </Spoiler>

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
