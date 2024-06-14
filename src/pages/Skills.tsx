import {
  Stack,
  Title,
  Text,
  Blockquote,
  Card,
  Badge,
  Flex,
} from "@mantine/core";

function Skills() {
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
            <Badge size="xl">Software Quality Assurance</Badge>
            <Badge size="xl">Manual Unit Testing</Badge>
            <Badge size="xl">GIT</Badge>
            <Badge size="xl">HTML 5</Badge>
            <Badge size="xl">CSS 3</Badge>
            <Badge size="xl">Tailwind CSS</Badge>
            <Badge size="xl">JavaScript</Badge>
            <Badge size="xl">Typescript</Badge>
            <Badge size="xl">React</Badge>
            <Badge size="xl">React Native</Badge>
            <Badge size="xl">Bootstrap</Badge>
            <Badge size="xl">Communication Skills</Badge>
            <Badge size="xl"> Quick Learner</Badge>
            <Badge size="xl">Adaptive</Badge>
            <Badge size="xl">Data Management</Badge>
            <Badge size="xl">Detail Oriented</Badge>
            <Badge size="xl">Computer Operation</Badge>
            <Badge size="xl">Multi-Tasking</Badge>
          </Flex>
        </Card>
      </Blockquote>
    </Stack>
  );
}

export default Skills;
