import {
  Stack,
  Title,
  Text,
  Blockquote,
  Card,
  Flex,
  Pill,
} from "@mantine/core";

function Skills() {
  // Hooks
  const skills: string[] = [
    "Software Quality Assurance",
    "Manual Unit Testing",
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
  // Handle funtions

  // Template
  return (
    <Stack>
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
  );
}

export default Skills;
