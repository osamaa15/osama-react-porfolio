import {
  AppShell,
  Avatar,
  Box,
  Center,
  Container,
  Flex,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery, useScrollIntoView } from "@mantine/hooks";

import { useState } from "react";
import osama from "../assets/osama.png";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Testimonials from "../pages/Testimonials";

function Shell() {
  // Hooks
  const [active, setActive] = useState(0);
  const { scrollIntoView: scrollIntoViewHome, targetRef: targetRefHome } =
    useScrollIntoView<HTMLDivElement>({
      offset: 150,
    });
  const { scrollIntoView: scrollIntoViewAbout, targetRef: targetRefAbout } =
    useScrollIntoView<HTMLDivElement>({
      offset: 150,
    });
  const { scrollIntoView: scrollIntoViewSkills, targetRef: targetRefSkills } =
    useScrollIntoView<HTMLDivElement>({
      offset: 150,
    });
  const {
    scrollIntoView: scrollIntoViewProjects,
    targetRef: targetRefProjects,
  } = useScrollIntoView<HTMLDivElement>({
    offset: 150,
  });
  const {
    scrollIntoView: scrollIntoViewTestimonials,
    targetRef: targetRefTestimonials,
  } = useScrollIntoView<HTMLDivElement>({
    offset: 150,
  });
  const { scrollIntoView: scrollIntoViewContact, targetRef: targetRefContact } =
    useScrollIntoView<HTMLDivElement>({
      offset: 150,
    });
  const isMobile = useMediaQuery("(max-width: 320px)");
  const links = [
    { label: "Home" },
    { label: "About Me" },
    { label: "Skills" },
    { label: "Projects" },
    { label: "Testimonials" },
    { label: "Contact" },
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
          {!isMobile && (
            <>
              <div></div>
              <div></div>
            </>
          )}

          <Group>
            {links.map((link, index) => (
              <Group key={index}>
                <Title
                  size={"h4"}
                  tt={"uppercase"}
                  fw={600}
                  onClick={() =>
                    link?.label === "Home"
                      ? scrollIntoViewHome()
                      : link?.label === "About Me"
                      ? scrollIntoViewAbout()
                      : link?.label === "Skills"
                      ? scrollIntoViewSkills()
                      : link?.label === "Projects"
                      ? scrollIntoViewProjects()
                      : link?.label === "Testimonials"
                      ? scrollIntoViewTestimonials()
                      : link?.label === "Contact"
                      ? scrollIntoViewContact()
                      : null
                  }
                  style={{ cursor: "pointer" }}
                >
                  {link.label}
                </Title>
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
        <Container>
          <Stack>
            <Box ref={targetRefHome}>
              <Home />
            </Box>
            <Box ref={targetRefAbout}>
              <About />
            </Box>
            <Box ref={targetRefSkills}>
              <Skills />
            </Box>
            <Box ref={targetRefProjects}>
              <Projects />
            </Box>
            <Box ref={targetRefTestimonials}>
              <Testimonials />
            </Box>
            <Box ref={targetRefContact}>
              <Contact />
            </Box>
          </Stack>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
export default Shell;
