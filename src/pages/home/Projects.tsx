import {
  Title,
  Text,
  Stack,
  Blockquote,
  Anchor,
  Badge,
  Group,
  Transition,
} from "@mantine/core";
import { useEffect, useState } from "react";

function Projects() {
  // Hooks
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  // Handle Functions

  // Template
  return (
    <Transition
      mounted={mount}
      transition="fade-right"
      duration={3000}
      timingFunction="ease"
    >
      {(styles) => (
        <Stack style={styles}>
          <Title tt={"uppercase"} td={"underline"} ta={"center"}>
            Pro
            <Text span inherit c={"#F08C00"} td={"underline"}>
              Jects
            </Text>
          </Title>
          <Blockquote mt="xl">
            <Stack>
              <Group justify="end">
                <Badge>QA Projects</Badge>
              </Group>
              <Anchor
                size="sm"
                href="https://breeneq2.intelligentsoftware.net/"
                target="_blank"
              >
                Breeneq Brand Store (Ongoing)
              </Anchor>
              <Anchor
                size="sm"
                href="https://vibe-design.intelligentsoftware.net/"
                target="_blank"
              >
                Vibe Design (Ongoing).
              </Anchor>
              <Anchor
                size="sm"
                href="https://xchangemls.com/login"
                target="_blank"
              >
                Xchange (Ongoing).
              </Anchor>
              <Anchor
                size="sm"
                href="https://www.dev.hexadesk.ca/auth/login"
                target="_blank"
              >
                Hexa desk (Ongoing).
              </Anchor>
            </Stack>
          </Blockquote>
          {/*  */}
          <Blockquote mt="xl">
            <Stack>
              <Group justify="end">
                <Badge>Frontend Projects</Badge>
              </Group>
              <Anchor
                size="sm"
                target="_blank"
                underline="never"
                style={{ cursor: "default" }}
              >
                Leave and Attendance Record System (12/2022 – 02/2023 )
              </Anchor>
              <Anchor
                size="sm"
                target="_blank"
                underline="never"
                style={{ cursor: "default" }}
              >
                DHWQADY Booking Management System (06/2022 – 08/2023 )
              </Anchor>
              <Anchor
                size="sm"
                target="_blank"
                underline="never"
                style={{ cursor: "default" }}
              >
                YoScores - Mobile App (2024 - Ongoing)
              </Anchor>
              <Anchor size="sm" target="_blank" href="https://pushstarter.co/">
                Pushstarter (2024 - Ongoing)
              </Anchor>
            </Stack>
          </Blockquote>
        </Stack>
      )}
    </Transition>
  );
}

export default Projects;
