import { Title, Text, Stack } from "@mantine/core";

function Projects() {
  return (
    <Stack>
      <Title tt={"uppercase"} td={"underline"} ta={"center"}>
        Pro
        <Text span inherit c={"#F08C00"} td={"underline"}>
          Jects
        </Text>
      </Title>
    </Stack>
  );
}

export default Projects;
