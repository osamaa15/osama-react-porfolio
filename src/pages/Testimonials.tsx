import { Title, Text, Stack, Blockquote } from "@mantine/core";

function Testimonials() {
  return (
    <Stack>
      <Title tt={"uppercase"} td={"underline"} ta={"center"}>
        Testim
        <Text span inherit c={"#F08C00"} td={"underline"}>
          onials
        </Text>
      </Title>
      <Blockquote mt="xl"></Blockquote>
    </Stack>
  );
}

export default Testimonials;
