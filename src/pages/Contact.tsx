import { Stack, Title, Text, Blockquote } from "@mantine/core";

function Contact() {
  return (
    <Stack>
      <Title tt={"uppercase"} td={"underline"} ta={"center"}>
        Con
        <Text span inherit c={"#F08C00"} td={"underline"}>
          Tact
        </Text>
      </Title>

      <Blockquote mt="xl"></Blockquote>
    </Stack>
  );
}

export default Contact;
