import { Stack, Title, Text } from "@mantine/core";

function Contact() {
  return (
    <Stack>
      <Title tt={"uppercase"} td={"underline"} ta={"center"}>
        Con
        <Text span inherit c={"#F08C00"} td={"underline"}>
          Tact
        </Text>
      </Title>
    </Stack>
  );
}

export default Contact;
