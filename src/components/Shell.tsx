import {
  AppShell,
  Avatar,
  Box,
  Center,
  Container,
  Flex,
  Group,
  Menu,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery, useScrollIntoView } from "@mantine/hooks";

import osama from "../assets/osama.png";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import { useState } from "react";

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

  const { scrollIntoView: scrollIntoViewContact, targetRef: targetRefContact } =
    useScrollIntoView<HTMLDivElement>({
      offset: 150,
    });

  const isSmall = useMediaQuery("(max-width: 768px)");
  const links = [
    { label: "Home" },
    { label: "About Me" },
    { label: "Skills" },
    { label: "Projects" },
    // { label: "Testimonials" },
    { label: "Contact" },
  ];

  //   Handle funtions
  function handleLinkClick(index: any) {
    setActive(index);
  }
  function handleScrollClick(label: any) {
    if (label === "Home") {
      scrollIntoViewHome();
    } else if (label === "About Me") {
      scrollIntoViewAbout();
    } else if (label === "Skills") {
      scrollIntoViewSkills();
    } else if (label === "Projects") {
      scrollIntoViewProjects();
    } else if (label === "Contact") {
      scrollIntoViewContact();
    } else {
      return null;
    }
  }

  // Template
  return (
    <AppShell header={{ height: 100 }} py={"md"}>
      <AppShell.Header p={"md"}>
        <Flex
          h={"100%"}
          align={"center"}
          justify={isSmall ? "end" : "space-between"}
        >
          {!isSmall ? (
            <>
              <div></div>
              <div></div>
            </>
          ) : null}

          {!isSmall ? (
            <Group>
              {links.map((link, index) => (
                <Group key={index}>
                  <Title
                    size={"h4"}
                    tt={"uppercase"}
                    fw={600}
                    onClick={() => {
                      handleLinkClick(index);
                      handleScrollClick(link?.label);
                    }}
                    style={{ cursor: "pointer" }}
                    td={index === active ? "underline" : ""}
                    c={index === active ? "yellow" : ""}
                  >
                    {link.label}
                  </Title>
                </Group>
              ))}
            </Group>
          ) : (
            ""
          )}
          <Flex align={"center"}>
            {!isSmall ? (
              <Text
                size={isSmall ? "sm" : ""}
                variant="gradient"
                gradient={{ from: "orange", to: "yellow", deg: 190 }}
                fw={600}
                tt={"uppercase"}
              >
                Muhammad Osama Iftikhar
              </Text>
            ) : null}
            {isSmall ? (
              <Menu>
                <Menu.Target>
                  <Avatar radius={50} size={"lg"} src={osama} />
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Label c={"orange"} fw={700}>
                    Muhammad Osama Iftikhar
                  </Menu.Label>
                  {links.map((link, index) => (
                    <Group key={index}>
                      <Menu.Item
                        tt={"capitalize"}
                        onClick={() => {
                          handleLinkClick(index);
                          handleScrollClick(link?.label);
                        }}
                        td={index === active ? "underline" : ""}
                        c={index === active ? "yellow" : ""}
                        fw={600}
                      >
                        {link.label}
                      </Menu.Item>
                    </Group>
                  ))}
                </Menu.Dropdown>
              </Menu>
            ) : (
              <Center>
                <Avatar radius={50} size={"lg"} src={osama} />
              </Center>
            )}
          </Flex>
        </Flex>
      </AppShell.Header>
      <AppShell.Main>
        <Container fluid={!isSmall ? false : true}>
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
