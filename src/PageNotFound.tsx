import { Box, Stack, Image, Title, Anchor } from "@mantine/core";

function PageNotFound() {
  return (
    <Box>
      <Stack align="center">
        <Title>
          Looks like you've gotten lost! The page you requested is unavailable
        </Title>
        <Anchor
          variant="gradient"
          gradient={{ from: "pink", to: "yellow" }}
          href={"/"}
        >
          Head back to the homepage.
        </Anchor>
        <Image
          w={"70%"}
          h={"50%"}
          src="./src/assets/notFound.svg"
          alt="Page not found"
        />
      </Stack>
    </Box>
  );
}

export default PageNotFound;
