import { Button, Flex, Group, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
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

    if (values.key === "hjkesfd1804uy3") {
      navigate("/comments");
      notifications.show({
        title: "Verified!!",
        message: "Key is correct! Redirecting to comments page...",
        radius: "md",
        withBorder: true,
        autoClose: 3000,
        withCloseButton: true,
      });
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
            label="KEY"
            description="Please enter the key"
            placeholder="****************"
            {...getInputProps("key")}
          />
          <Group>
            <Button onClick={() => navigate("/")} variant="outline">
              Go back
            </Button>
            <Button type="submit" variant="outline">
              Verify
            </Button>
          </Group>
        </Stack>
      </form>
    </Flex>
  );
}

export default Admin;