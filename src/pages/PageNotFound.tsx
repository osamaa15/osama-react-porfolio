import { Box, Stack, Image, Title, Anchor } from "@mantine/core";

function PageNotFound() {
  return (
    <Stack justify={"center"} align={"center"} mt={100}>
      <Title>
        Looks like you've gotten lost! The page you requested is unavailable
      </Title>
      <Anchor
      fw={700}
        variant="gradient"
        gradient={{ from: "pink", to: "yellow" }}
        href={"/"}
      >
        Head back to the homepage.
      </Anchor>
      <Box>
        <Image
          fit="contain"
          src="./src/assets/notFound.svg"
          alt="Page not found"
        />
      </Box>
    </Stack>
  );
}

export default PageNotFound;