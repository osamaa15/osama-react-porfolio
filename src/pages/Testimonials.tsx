import { Title, Text, Stack } from "@mantine/core";

function Testimonials() {
  return (
    <Stack>
      <Title tt={"uppercase"} td={"underline"} ta={"center"}>
        Testim
        <Text span inherit c={"#F08C00"} td={"underline"}>
          onials
        </Text>
      </Title>
    </Stack>
  );
}

export default Testimonials;
