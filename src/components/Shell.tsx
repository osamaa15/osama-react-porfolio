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
import { useEffect, useState } from "react";

import osama from "../assets/osama.png";
import Home from "../pages/home/Home";
import About from "../pages/home/About";
import Skills from "../pages/home/Skills";
import Projects from "../pages/home/Projects";
import Contact from "../pages/home/Contact";

import { useNavigate } from "react-router-dom";

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
    { label: "Contact" },
    { label: "More", route: "/utilities" },
  ];

  const navigate = useNavigate();

  //   Handle functions
  function handleLinkClick(index: number) {
    setActive(index);
  }
  function handleScrollClick(label: string) {
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
    } else if (label === "More") {
      navigate("/utilities");
    } else {
      return null;
    }
  }

  // Set active link on scroll
  useEffect(() => {
    const sections = [
      { ref: targetRefHome, index: 0 },
      { ref: targetRefAbout, index: 1 },
      { ref: targetRefSkills, index: 2 },
      { ref: targetRefProjects, index: 3 },
      { ref: targetRefContact, index: 4 },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(
              (section) => section.ref.current === entry.target
            );
            if (section) {
              setActive(section.index);
            }
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [
    targetRefHome,
    targetRefAbout,
    targetRefSkills,
    targetRefProjects,
    targetRefContact,
  ]);

  // Template
  return (
    <AppShell header={{ height: 100 }} py={"md"}>
      <AppShell.Header
        p={"md"}
        styles={{
          header: {
            borderRadius: "30px",
            marginTop: "6px",
            marginLeft: "30px",
            marginRight: "30px",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
          },
        }}
      >
        <Flex
          h={"100%"}
          align={"center"}
          justify={isSmall ? "center" : "space-between"}
        >
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
                    {link?.label}
                  </Title>
                </Group>
              ))}
            </Group>
          ) : null}
          <Flex align={"center"}>
            {isSmall ? (
              <Menu withArrow shadow="xs">
                <Menu.Target>
                  <Stack align="center" gap={"xs"}>
                    <Avatar radius={50} size={"lg"} src={osama} />
                    <Text
                      size={"xs"}
                      variant="gradient"
                      gradient={{ from: "orange", to: "yellow", deg: 190 }}
                      fw={600}
                      tt={"uppercase"}
                    >
                      Muhammad Osama Iftikhar
                    </Text>
                  </Stack>
                </Menu.Target>
                <Menu.Dropdown w={200}>
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
                        {link?.label}
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

      {/*  */}
      <AppShell.Main pos="relative">
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
