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
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconArrowLeft } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import About from "../pages/About";

function Shell() {
  // Hooks
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const links = [
    { label: "ABOUT ME" },
    { label: "RESUME" },
    { label: "TESTIMONIALS " },
    { label: "CONTACT" },
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
            gradient={{ from: "orange", to: "yellow", deg: 190 }}
            fw={600}
            tt={"uppercase"}
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
          <Stack gap={"sm"}>
            {links.map((link, index) => (
              <NavLink
                variant={active === index ? "light" : "subtle"}
                href="#required-for-focus"
                key={link?.label}
                active={index === active}
                label={link?.label}
                onClick={() => setActive(index)}
                color={active === index ? "white" : "black"}
                fw={700}
              />
            ))}
          </Stack>
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
                size="lg"
                variant="transparent"
                leftSection={<IconArrowLeft />}
              >
                HOME
              </Button>
            </ActionIcon>
          </Card>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <About />
      </AppShell.Main>
    </AppShell>
  );
}
export default Shell;
