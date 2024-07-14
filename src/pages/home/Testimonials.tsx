import { Title, Text, Stack, Blockquote } from "@mantine/core";
import { Icon360 } from "@tabler/icons-react";

function Testimonials() {
  return (
    <Stack>
      <Title tt={"uppercase"} td={"underline"} ta={"center"}>
        Testim
        <Text span inherit c={"#F08C00"} td={"underline"}>
          onials
        </Text>
      </Title>
      <Blockquote mt="xl" icon={<Icon360 />}></Blockquote>
    </Stack>
  );
}

export default Testimonials;
