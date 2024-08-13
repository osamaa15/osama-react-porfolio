import {
  Stack,
  Title,
  Text,
  Blockquote,
  Card,
  Flex,
  Pill,
  Transition,
} from "@mantine/core";
import { useEffect, useState } from "react";

function Skills() {
  // Hooks
  const skills: string[] = [
    "Software Quality Assurance",
    "Manual Unit Testing",
    "Cypress",
    "GIT",
    "HTML 5",
    "CSS 3",
    "Tailwind CSS",
    "JavaScript",
    "Typescript",
    "React",
    "React Native",
    "Bootstrap",
    "Communication Skills",
    "Quick Learner",
    "Adaptive",
    "Data Management",
    "Detail Oriented",
    "Computer Operation",
    "Multi-Tasking",
  ];

  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  // Handle funtions

  // Template
  return (
    <Transition
      mounted={mount}
      transition="fade-left"
      duration={3000}
      timingFunction="ease"
    >
      {(styles) => (
        <Stack style={styles}>
          <Title tt={"uppercase"} td={"underline"} ta={"center"}>
            Ski
            <Text span inherit c={"#F08C00"} td={"underline"}>
              lls
            </Text>
          </Title>
          <Blockquote mt="xl">
            <Card>
              <Flex wrap={"wrap"}>
                {skills.map((skill, index) => (
                  <Pill size={"md"} key={index}>
                    {skill}
                  </Pill>
                ))}
              </Flex>
            </Card>
          </Blockquote>
        </Stack>
      )}
    </Transition>
  );
}

export default Skills;
