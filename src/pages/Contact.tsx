import {
  Stack,
  Title,
  Text,
  Blockquote,
  Flex,
  Alert,
  Anchor,
  TextInput,
  Textarea,
  Group,
  Button,
  Fieldset,
} from "@mantine/core";
import {
  IconAddressBook,
  IconBrandWhatsapp,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

function Contact() {
  return (
    <Stack>
      <Title tt={"uppercase"} td={"underline"} ta={"center"}>
        Con
        <Text span inherit c={"#F08C00"} td={"underline"}>
          Tact
        </Text>
      </Title>
      <Blockquote mt="xl" icon={<IconAddressBook />}>
        <Stack>
          <Flex wrap={"wrap"} gap={"md"} justify={"center"}>
            <Alert title="PHONE" icon={<IconPhone />}>
              +92 (313) 6784434
            </Alert>
            <Alert title="EMAIL" icon={<IconMail />}>
              <Anchor href="mailto:osaiftgmail.com">osaift@gmail.com</Anchor>
            </Alert>
            <Alert title="WHATSAPP" icon={<IconBrandWhatsapp />}>
              <Anchor href="https://wa.me/03098091512" target="_blank">
                Go to WhatsApp
              </Anchor>
            </Alert>
          </Flex>
          <form>
            <Fieldset variant="default" legend="SHARE YOUR BUSINESS IDEA">
              <Stack>
                <TextInput placeholder="John Doe" label="Name" required />
                <TextInput
                  placeholder="johndoe@gmail.com"
                  label="Email"
                  required
                  type="email"
                />
                <Textarea
                  placeholder="Lets talk!"
                  label="Comments"
                  resize="vertical"
                  required
                />

                <Group justify="end">
                  <Button variant="outline">Send</Button>
                </Group>
              </Stack>
            </Fieldset>
          </form>
        </Stack>
      </Blockquote>
    </Stack>
  );
}

export default Contact;
