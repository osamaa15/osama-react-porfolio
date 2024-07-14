import {
  Title,
  Text,
  Stack,
  SimpleGrid,
  Flex,
  ActionIcon,
  Blockquote,
} from "@mantine/core";
import useThreeGridColSizer from "../../hooks/useThreeGridColSizer";
import { Outlet, useNavigate } from "react-router-dom";
import { IconCalculator, IconChevronLeft } from "@tabler/icons-react";

function Utility() {
  const cards: any = [
    {
      title: "Calculator",
      route: "/utilities/calculator",
      icon: <IconCalculator />,
    },
    // { title: "Card 2", route: "/" },
    // { title: "Card 3", route: "/" },
  ];

  // Hooks
  const cols = useThreeGridColSizer();
  const navigate = useNavigate();
  // Handle Functions

  // Template
  return (
    <Stack p={"xl"}>
      <Flex justify={"center"} align={"center"}>
        <ActionIcon onClick={() => navigate("/")}>
          <IconChevronLeft />
        </ActionIcon>
        <Title tt={"uppercase"} td={"underline"} ta={"center"}>
          Util
          <Text span inherit c={"#F08C00"} td={"underline"}>
            ities
          </Text>
        </Title>
      </Flex>

      <SimpleGrid cols={cols}>
        {cards.map((card: any, index: number) => (
          <Blockquote
            key={index}
            mt="xl"
            icon={card?.icon}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(card?.route)}
          >
            <Title size={"h2"} ta={"center"}>
              {card?.title}
            </Title>
          </Blockquote>
        ))}
      </SimpleGrid>

      <Outlet />
    </Stack>
  );
}

export default Utility;
