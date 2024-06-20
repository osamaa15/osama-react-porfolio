import { Button, Flex, Group, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconChevronLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function Admin() {
  // Hooks
  const navigate = useNavigate();
  const { values, getInputProps } = useForm({
    initialValues: {
      key: "",
    },
  });
  // Handle Functions
  function handleKeyVerification(e: any) {
    e.preventDefault();

    if (values.key === "@qwertyuiop15") {
      navigate("/_comments");
      notifications.show({
        title: "Verified!!",
        message: "Key is correct!",
        radius: "md",
        withBorder: true,
        autoClose: 3000,
        withCloseButton: true,
      });

      localStorage.setItem("token", values.key);
    } else {
      notifications.show({
        title: "Invalid Key!",
        message: "Key is incorrect! ",
        radius: "md",
        color: "red",
        withBorder: true,
        autoClose: 3000,
        withCloseButton: true,
      });
    }
  }
  // Template
  return (
    <Flex justify={"center"} align={"center"} h={"100vh"}>
      <form onSubmit={handleKeyVerification}>
        <Stack>
          <TextInput
            required
            label="KEY"
            description="Please enter the key"
            placeholder="****************"
            {...getInputProps("key")}
            size="md"
          />
          <Group justify="center">
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              leftSection={<IconChevronLeft />}
            >
              Back
            </Button>
            <Button type="submit" variant="outline" color="green">
              Verify
            </Button>
          </Group>
        </Stack>
      </form>
    </Flex>
  );
}

export default Admin;
