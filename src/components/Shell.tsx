import {
  ActionIcon,
  AppShell,
  Avatar,
  Burger,
  Card,
  Center,
  Group,
  NavLink,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconArrowLeft } from "@tabler/icons-react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import osama from "../assets/osama.png";

function Shell() {
  // Hooks
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 320px)");
  const links = [
    { label: "ABOUT ME", route: "/section/about" },
    { label: "RESUME", route: "/section/resume" },
    { label: "TESTIMONIALS ", route: "/section/testimonials" },
    { label: "CONTACT", route: "/section/contact" },
  ];
  //   Handle funtions
  function handleLinkClick(index: any, route: any) {
    setActive(index );
    navigate(route);
  }
  // Template
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 240, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="xs">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text
            size={isMobile ? "sm" : ""}
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
            <Avatar radius={50} size={"xl"} src={osama} />
          </Center>
        </AppShell.Section>
        <AppShell.Section grow my="md" component={ScrollArea}>
          <Stack gap={"sm"}>
            {links.map((link, index) => (
              <NavLink
                variant={active === index ? "light" : "subtle"}
                key={link?.label}
                active={index === active}
                label={link?.label}
                onClick={() => handleLinkClick(index, link?.route)}
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
              <IconArrowLeft />
              <Text size="lg" variant="transparent">
                HOME
              </Text>
            </ActionIcon>
          </Card>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
export default Shell;
