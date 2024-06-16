import {
  ActionIcon,
  Button,
  Container,
  Flex,
  Group,
  LoadingOverlay,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconChevronLeft, IconRefresh } from "@tabler/icons-react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CommentList() {
  // Hooks
  const [comments, setComments] = useState<any>([]);
  const [processing, setProcessing] = useState<boolean>(false);
  //   const [overlayProcessing, setOverlayProcessing] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    // setOverlayProcessing(true);
    axios
      .get("https://comment-system-be.vercel.app/api/comments")
      .then((res) => {
        setComments(res?.data);
        // setOverlayProcessing(false);
      })
      .catch((err) => {
        // setOverlayProcessing(false);
        notifications.show({
          title: "Oh no!",
          message:
            err.message ?? "Something went wrong, please try again later",
          radius: "md",
          color: "red",
          withBorder: true,
          autoClose: 3000,
          withCloseButton: true,
        });
      });
  }, [comments]);

  //   Handle Functions

  const rows = comments.map((comment: any, index: number) => (
    <Table.Tr key={index}>
      <Table.Td>{comment.name}</Table.Td>
      <Table.Td>{comment.email}</Table.Td>
      <Table.Td>{comment.comment}</Table.Td>
    </Table.Tr>
  ));

  function handleRefreshCommentsRecords() {
    setProcessing(true);
    axios
      .get("https://comment-system-be.vercel.app/api/comments")
      .then((res) => {
        setComments(res?.data);
        notifications.show({
          title: "Hurray!",
          message: "Refreshed Sucessfully.",
          radius: "md",
          withBorder: true,
          autoClose: 3000,
          withCloseButton: true,
        });
        setProcessing(false);
      })
      .catch((err) => {
        notifications.show({
          title: "Oh no!",
          message:
            err.message ?? "Something went wrong, please try again later",
          radius: "md",
          color: "red",
          withBorder: true,
          autoClose: 3000,
          withCloseButton: true,
        });
        setProcessing(false);
      });
  }

  // Template
  return (
    <Container>
      <Flex align={"center"} h={"100vh"}>
        <Stack>
          <Group justify="center" align="center">
            <ActionIcon onClick={() => navigate("/")}>
              <IconChevronLeft />
            </ActionIcon>
            <Title tt={"uppercase"} td={"underline"} ta={"center"}>
              Comm
              <Text span inherit c={"#F08C00"} td={"underline"}>
                ents
              </Text>
            </Title>
          </Group>
          <Table.ScrollContainer
            minWidth={600}
            mah={600}
            style={{
              overflow: "auto",
              scrollbarWidth: "thin",
              scrollBehavior: "smooth",
            }}
            pos={"relative"}
          >
            <LoadingOverlay visible={processing} />
            <Table striped highlightOnHover withTableBorder withColumnBorders>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Email</Table.Th>
                  <Table.Th>Comments</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </Table.ScrollContainer>
          <Group justify="end">
            <Button
              leftSection={!processing && <IconRefresh />}
              variant="outline"
              onClick={handleRefreshCommentsRecords}
              disabled={processing}
              loading={processing}
            >
              Refresh
            </Button>
          </Group>
        </Stack>
      </Flex>
    </Container>
  );
}

export default CommentList;
