import { Container, Flex, Table } from "@mantine/core";

function CommentList() {
  const comments = [
    {
      name: "Muhammad Osama Iftikhar",
      email: "osama@gmail.com",
      comment: "This is a comment",
    },
    {
      name: "Muhammad Osama Iftikhar",
      email: "osama@gmail.com",
      comment: "This is a comment",
    },
    {
      name: "Muhammad Osama Iftikhar",
      email: "osama@gmail.com",
      comment: "This is a comment",
    },
  ];

  const rows = comments.map((comment, index) => (
    <Table.Tr key={index}>
      <Table.Td>{comment.name}</Table.Td>
      <Table.Td>{comment.email}</Table.Td>
      <Table.Td>{comment.comment}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Container>
      <Flex align={"center"} h={"100vh"}>
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
      </Flex>
    </Container>
  );
}

export default CommentList;
