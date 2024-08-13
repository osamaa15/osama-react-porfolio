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
  Transition,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import {
  IconAddressBook,
  IconBrandWhatsapp,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";

function Contact() {
  // Hooks
  const [processing, setProcessing] = useState<boolean>(false);
  const [response, setResponse] = useState<any>(null);
  const { values, getInputProps } = useForm({
    initialValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  // Handle Functions

  function handleSubmitComment(e: any) {
    setProcessing(true);
    axios
      .post("https://comment-system-be.vercel.app/api/comments", values)
      .then((res) => {
        console.log(res);
        setResponse(res?.data?.message);
        setProcessing(false);
        values.name = "";
        values.email = "";
        values.comment = "";
        notifications.show({
          title: "Hurray!",
          message:
            response ??
            "Thanks for your comment, we will get back to you soon!",
          radius: "md",
          withBorder: true,
          autoClose: 3000,
          withCloseButton: true,
        });
      })
      .catch((err) => {
        console.log(err);
        setProcessing(false);
        values.name = "";
        values.email = "";
        values.comment = "";

        notifications.show({
          title: "Oh no!",
          message: "Something went wrong, please try again later",
          radius: "md",
          color: "red",
          withBorder: true,
          autoClose: 3000,
          withCloseButton: true,
        });
      });
    e.preventDefault();
  }

  // Template
  return (
    <Transition
      mounted={mount}
      transition="fade-left"
      duration={3000}
      timingFunction="ease"
    >
      {(styles) => (
        <Stack style={styles}>
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
                  <Anchor href="mailto:osaiftgmail.com">
                    osaift@gmail.com
                  </Anchor>
                </Alert>
                <Alert title="WHATSAPP" icon={<IconBrandWhatsapp />}>
                  <Anchor href="https://wa.me/923136784434" target="_blank">
                    Go to WhatsApp
                  </Anchor>
                </Alert>
              </Flex>
              <form onSubmit={handleSubmitComment}>
                <Fieldset variant="default" legend="SHARE YOUR BUSINESS IDEA">
                  <Stack>
                    <TextInput
                      placeholder="John Doe"
                      label="Name"
                      required
                      {...getInputProps("name")}
                    />
                    <TextInput
                      placeholder="johndoe@gmail.com"
                      label="Email"
                      required
                      type="email"
                      {...getInputProps("email")}
                    />
                    <Textarea
                      placeholder="Lets talk!"
                      label="Comments"
                      resize="vertical"
                      required
                      {...getInputProps("comment")}
                    />
                    <Group justify="end">
                      <Button
                        type="submit"
                        variant="outline"
                        disabled={processing}
                        loading={processing}
                      >
                        Send
                      </Button>
                    </Group>
                  </Stack>
                </Fieldset>
              </form>
            </Stack>
          </Blockquote>
        </Stack>
      )}
    </Transition>
  );
}

export default Contact;
