import {
  Title,
  Text,
  Stack,
  Badge,
  Image,
  Transition,
  Card,
  ScrollArea,
  Grid,
  Spoiler,
} from "@mantine/core";
import { useEffect, useState } from "react";
import projects from "../projects";

const data = projects;

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
              jects
            </Text>
          </Title>
          <Card shadow="none">
            <ScrollArea
              h={500}
              scrollbars="y"
              offsetScrollbars
              scrollbarSize={6}
              scrollHideDelay={0}
            >
              <Grid>
                {data.map((project, index) => (
                  <Grid.Col span={{ xs: 12, md: 6 }} key={index}>
                    <Card shadow="xs">
                      <Card.Section pos={"relative"}>
                        <Badge bottom={20} pos={"absolute"}>
                          {project?.type === "qa" ? "SQA" : "Frontend"}
                        </Badge>
                        <Image src={project?.image} h={160} alt="No way!" />
                      </Card.Section>
                      <Text fw={500} size="lg" mt="md">
                        {project?.title}
                      </Text>
                      <Spoiler maxHeight={30} showLabel="more" hideLabel="less">
                        <Text mt="xs" c="dimmed" size="sm">
                          {project?.description}
                        </Text>
                      </Spoiler>
                    </Card>
                  </Grid.Col>
                ))}
              </Grid>
            </ScrollArea>
          </Card>
        </Stack>
      )}
    </Transition>
  );
}

export default Projects;
