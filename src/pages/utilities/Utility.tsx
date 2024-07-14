import {
  Title,
  Text,
  Stack,
  SimpleGrid,
  Flex,
  ActionIcon,
  Blockquote,
  Modal,
} from "@mantine/core";
import useThreeGridColSizer from "../../hooks/useThreeGridColSizer";
import { useNavigate } from "react-router-dom";
import { IconCalculator, IconChevronLeft } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import Calculator from "../../components/Calculator";
import { useState } from "react";

function Utility() {
  const cards: any = [
    {
      title: "Calculator",
      icon: <IconCalculator />,
    },
    // { title: "Card 2", route: "/" },
    // { title: "Card 3", route: "/" },
  ];

  // Hooks
  const cols = useThreeGridColSizer();
  const navigate = useNavigate();
  const [opened, { open: openCalc, close: closeCalc }] = useDisclosure(false);
  const [title, setTitle] = useState("");
  // Handle Functions
  function handleModalNavigation(title: string) {
    if (title === "Calculator") {
      openCalc();
    } else {
      return null;
    }
  }
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
            onClick={() => {
              handleModalNavigation(card?.title);
              setTitle(card?.title);
            }}
          >
            <Title size={"h2"} ta={"center"}>
              {card?.title}
            </Title>
          </Blockquote>
        ))}
      </SimpleGrid>

      {/*---------- Modals ---------- */}

      {/* Calculator Modal */}
      <Modal  opened={opened} onClose={closeCalc} title={title}>
        <Calculator />  
      </Modal>

      {/*---------------------------- */}
    </Stack>
  );
}

export default Utility;
