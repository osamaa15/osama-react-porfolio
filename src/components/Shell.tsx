import {
  AppShell,
  Avatar,
  Box,
  Center,
  Flex,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { useMediaQuery, useScrollIntoView } from "@mantine/hooks";

import { useState } from "react";
import osama from "../assets/osama.png";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

function Shell() {
  // Hooks
  const [active, setActive] = useState(0);
  const { scrollIntoView: scrollIntoViewAbout, targetRef: targetRefAbout } =
    useScrollIntoView<HTMLDivElement>({
      offset: 150,
    });
  const { scrollIntoView: scrollIntoViewSkills, targetRef: targetRefSkills } =
    useScrollIntoView<HTMLDivElement>({
      offset: 150,
    });
  const isMobile = useMediaQuery("(max-width: 320px)");
  const links = [
    { label: "HOME", scrollIntoView: scrollIntoViewAbout },
    { label: "ABOUT ME", scrollIntoView: scrollIntoViewSkills },
    { label: "SKILLS" },
    { label: "PROJECTS " },
    { label: "TESTIMONIALS " },
    { label: "CONTACT" },
  ];

  //   Handle funtions
  function handleLinkClick(index: any) {
    setActive(index);
  }
  // Template
  return (
    <AppShell header={{ height: 130 }} padding="md">
      <AppShell.Header p={"md"}>
        <Flex h={"100%"} align={"center"} justify={"space-between"}>
          <div></div>
          <div></div>
          <Group>
            {links.map((link, index) => (
              <Group key={index}>
                <Text
                  onClick={() => link?.scrollIntoView}
                  style={{ cursor: "pointer" }}
                >
                  {link.label}
                </Text>
              </Group>
            ))}
          </Group>
          <Flex align={"center"}>
            {!isMobile && (
              <Text
                size={isMobile ? "sm" : ""}
                variant="gradient"
                gradient={{ from: "orange", to: "yellow", deg: 190 }}
                fw={600}
                tt={"uppercase"}
              >
                Muhammad Osama Iftikhar
              </Text>
            )}
            <Center>
              <Avatar radius={50} size={"lg"} src={osama} />
            </Center>
          </Flex>
        </Flex>
      </AppShell.Header>
      <AppShell.Main>
        <Stack>
          <Box>
            <Home />
          </Box>
          <Box ref={targetRefAbout}>
            <About />
          </Box>
          <Box ref={targetRefSkills}>
            <Skills />
          </Box>
          <Box>
            <Projects />
          </Box>
          <Box>
            <Contact />
          </Box>
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
export default Shell;
