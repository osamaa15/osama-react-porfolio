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
  Affix,
  ActionIcon,
  Button,
} from "@mantine/core";
import SplitLayout from "../components/SplitLayout";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useState } from "react";

function Home() {
  // Hooks
  const [toogle, setToogle] = useState(false);

  // Handle funtions
  function handleToggle() {
    setToogle(!toogle);
  }

  // Template
  return (
    <Flex p={"xl"} align={"center"} h={"100vh"} w={"100vw"}>
      <Affix position={{ top: 20, right: 10 }}>
        <ActionIcon
          variant="filled"
          bg={"#F08C00"}
          size={"xl"}
          radius={"xl"}
          onClick={handleToggle}
        >
          {toogle ? <IconSun size={24} /> : <IconMoon size={24} />}
        </ActionIcon>
      </Affix>
      <Card radius={0}>
        <SplitLayout
          children={{
            left: <HomeInformation />,
            right: (
              <Card withBorder={false} bg={"#FCC419"} p={0}>
                <Image
                  radius={"lg"}
                  fit="contain"
                  src="./src/assets/osama.png"
                />
              </Card>
            ),
          }}
        />
      </Card>
    </Flex>
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

      <Text ta={"center"} w={"55%"}>
        I am a versatile and proficient manual tester (QA Analyst) in SQA.
        Additionally, I have extensive experience in software development,
        particularly proficient in React and Angular.
      </Text>

      <Box>
        <Button size={"lg"}>MORE ABOUT ME</Button>
      </Box>
    </Stack>
  );
}

export default Home;
