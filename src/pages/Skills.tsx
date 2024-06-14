import {
  Stack,
  Title,
  Text,
  Blockquote,
  Card,
  Flex,
  Chip,
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
            <Chip defaultChecked size="md">
              Software Quality Assurance
            </Chip>
            <Chip defaultChecked size="md">
              Manual Unit Testing
            </Chip>
            <Chip defaultChecked size="md">
              GIT
            </Chip>
            <Chip defaultChecked size="md">
              HTML 5
            </Chip>
            <Chip defaultChecked size="md">
              CSS 3
            </Chip>
            <Chip defaultChecked size="md">
              Tailwind CSS
            </Chip>
            <Chip defaultChecked size="md">
              JavaScript
            </Chip>
            <Chip defaultChecked size="md">
              Typescript
            </Chip>
            <Chip defaultChecked size="md">
              React
            </Chip>
            <Chip defaultChecked size="md">
              React Native
            </Chip>
            <Chip defaultChecked size="md">
              Bootstrap
            </Chip>
            <Chip defaultChecked size="md">
              Communication Skills
            </Chip>
            <Chip defaultChecked size="md">
              {" "}
              Quick Learner
            </Chip>
            <Chip defaultChecked size="md">
              Adaptive
            </Chip>
            <Chip defaultChecked size="md">
              Data Management
            </Chip>
            <Chip defaultChecked size="md">
              Detail Oriented
            </Chip>
            <Chip defaultChecked size="md">
              Computer Operation
            </Chip>
            <Chip defaultChecked size="md">
              Multi-Tasking
            </Chip>
          </Flex>
        </Card>
      </Blockquote>
    </Stack>
  );
}

export default Skills;
