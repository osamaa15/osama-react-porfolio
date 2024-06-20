import {
  ActionIcon,
  Button,
  Container,
  Flex,
  Group,
  LoadingOverlay,
  Modal,
  Stack,
  Table,
  TableCaption,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { IconChevronLeft, IconRefresh, IconTrash } from "@tabler/icons-react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CommentList() {
  // Hooks
  const [comments, setComments] = useState<any>([]);
  const [processing, setProcessing] = useState<boolean>(false);
  const [overlayProcessing, setOverlayProcessing] = useState<boolean>(false);
  const [userCommentsRecord, setUserCommentsRecord] = useState<any>({});

  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();

  useEffect(() => {
    setOverlayProcessing(true);
    axios
      .get("https://comment-system-be.vercel.app/api/comments")
      .then((res) => {
        setComments(res?.data);
        setOverlayProcessing(false);
      })
      .catch((err) => {
        setOverlayProcessing(false);
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
  }, []);

  //   Handle Functions

  const rows = comments.map((comment: any, index: number) => (
    <Table.Tr key={index}>
      <Table.Td>{comment?.name}</Table.Td>
      <Table.Td>{comment?.email}</Table.Td>
      <Table.Td>{comment?.comment}</Table.Td>
      <Table.Td>
        <ActionIcon
          onClick={() => {
            setUserCommentsRecord(comment ?? null);
            open();
          }}
        >
          <IconTrash />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));

  function handleDeleteCommentRecord(id: string) {
    axios
      .delete("https://comment-system-be.vercel.app/api/comments", {
        data: { id },
      })
      .then(() => {
        notifications.show({
          title: "Hurray!",
          message: "Record Deleted Successfully.",
          radius: "md",
          withBorder: true,
          autoClose: 3000,
          withCloseButton: true,
        });
        handleRefreshCommentsRecords(false);
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
        handleRefreshCommentsRecords(false);
      });
  }

  function handleRefreshCommentsRecords(isShowRefreshAlert: boolean) {
    setProcessing(true);
    axios
      .get("https://comment-system-be.vercel.app/api/comments")
      .then((res) => {
        setComments(res?.data);

        isShowRefreshAlert &&
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
        isShowRefreshAlert &&
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

  function handleNavigateBack() {
    navigate("/");
    localStorage.removeItem("token");
  }

  // Template
  return (
    <Container>
      <Flex justify={"center"} align={"center"} h={"100vh"}>
        <Stack pos={"relative"}>
          <Group justify="center" align="center">
            <ActionIcon onClick={handleNavigateBack}>
              <IconChevronLeft />
            </ActionIcon>
            <Title tt={"uppercase"} td={"underline"} ta={"center"}>
              Comm
              <Text span inherit c={"#F08C00"} td={"underline"}>
                ents
              </Text>
            </Title>
          </Group>
          <LoadingOverlay visible={overlayProcessing} />
          <Table.ScrollContainer
            minWidth={600}
            mah={600}
            style={{
              overflow: "auto",
              scrollbarWidth: "thin",
              scrollBehavior: "smooth",
            }}
          >
            <Table
              striped
              highlightOnHover
              withTableBorder
              withColumnBorders
              pos={"relative"}
              captionSide="bottom"
            >
              <LoadingOverlay visible={processing} />
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Email</Table.Th>
                  <Table.Th>Comments</Table.Th>
                  <Table.Th>Actions</Table.Th>
                </Table.Tr>
              </Table.Thead>
              {comments.length > 0 ? (
                <>
                  <Table.Tbody>{rows}</Table.Tbody>
                </>
              ) : (
                <TableCaption>No Records Found</TableCaption>
              )}
            </Table>
          </Table.ScrollContainer>
          <Group justify="end">
            <Button
              leftSection={!processing && <IconRefresh />}
              variant="outline"
              onClick={() => {
                handleRefreshCommentsRecords(true);
              }}
              disabled={processing}
              loading={processing}
            >
              Refresh
            </Button>
          </Group>
        </Stack>
      </Flex>
      {/*  */}
      <Modal
        opened={opened}
        onClose={close}
        title="This action will permanently delete the selected record!"
        size={"lg"}
        centered
      >
        <Stack>
          <Text size="sm">
            Selected Record: {userCommentsRecord?.name} (
            {userCommentsRecord?.email})
          </Text>
          <Group justify="end">
            <Button variant="outline" onClick={close}>
              Cancel
            </Button>
            <Button
              color={"red"}
              onClick={() => {
                handleDeleteCommentRecord(userCommentsRecord?.["_id"]);
                close();
              }}
            >
              Delete
            </Button>
          </Group>
        </Stack>
      </Modal>
    </Container>
  );
}

export default CommentList;
