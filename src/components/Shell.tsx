import {
  ActionIcon,
  AppShell,
  Avatar,
  Burger,
  Button,
  Card,
  Center,
  Group,
  NavLink,
  ScrollArea,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSquareArrowLeft } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Shell() {
  // Hooks
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const links = [
    { label: "Dashboard", description: "Item with description" },
    {
      label: "Security",
    },
    { label: "Activity" },
  ];
  //   Handle funtions

  // Template
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="xs">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text
            variant="gradient"
            gradient={{ from: "orange", to: "yellow", deg: 90 }}
            fw={600}
          >
            Muhammad Osama Iftikhar
          </Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" bg={"yellow"}>
        <AppShell.Section>
          <Center>
            <Avatar radius={50} size={"xl"} src="./src/assets/osama.png" />
          </Center>
        </AppShell.Section>
        <AppShell.Section grow my="md" component={ScrollArea}>
          {links.map((link, index) => (
            <NavLink
              href="#required-for-focus"
              key={link.label}
              active={index === active}
              label={link.label}
              onClick={() => setActive(index)}
              bg={index === active ? "white" : "transparent"}
            />
          ))}
        </AppShell.Section>
        <AppShell.Section>
          <Card radius={"sm"} p={4} shadow="none">
            <ActionIcon
              variant="transparent"
              w={"100%"}
              onClick={() => {
                navigate("/");
              }}
            >
              <Button
                variant="transparent"
                leftSection={<IconSquareArrowLeft />}
              >
                HOME
              </Button>
            </ActionIcon>
          </Card>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}
export default Shell;
