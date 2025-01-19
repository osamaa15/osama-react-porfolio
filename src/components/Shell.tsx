import {
  ActionIcon,
  AppShell,
  Avatar,
  Box,
  Container,
  Flex,
  Group,
  Menu,
  Stack,
  Text,
  Title,
  useMantineTheme,
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
import ThemeToggle from "./ThemeToggle";
import { IconMenu } from "@tabler/icons-react";

function Shell() {
  // Hooks
  const [active, setActive] = useState(0);
  const [opened, setOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const theme = useMantineTheme();

  const isSmall = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

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
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

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
        bg={"cyan"}
        p={"md"}
        styles={{
          header: {
            borderRadius: scrolled ? (isSmall ? "30px" : "100px") : "0px",
            marginTop: scrolled ? (isSmall ? "6px" : "8px") : "0px",
            marginLeft: scrolled ? (isSmall ? "30px" : "450px") : "0px",
            marginRight: scrolled ? (isSmall ? "30px" : "450px") : "0px",
            boxShadow: scrolled ? "0 0 10px 0 rgba(0,0,0,0.1)" : "none",
            transition: "all 0.3s ease-in-out",
            backgroundColor: "transparent", // Keep cyan when not scrolled
            backdropFilter: scrolled ? "blur(10px)" : "none", // Apply blur when scrolled
          },
        }}
      >
        <Flex
          h={"100%"}
          align={"center"}
          justify={isSmall ? "center" : "space-around"}
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
              <Menu
                withArrow
                shadow="xs"
                opened={opened}
                offset={0}
                transitionProps={{ transition: "rotate-right", duration: 150 }}
              >
                <Stack align="center" gap={"xs"}>
                  <Group gap={"xs"} align="center">
                    <ThemeToggle size="lg" />
                    <Avatar radius={50} size={"lg"} src={osama} />
                    <ActionIcon
                      variant="transparent"
                      onClick={() => setOpened(!opened)}
                    >
                      <IconMenu />
                    </ActionIcon>
                  </Group>
                  <Menu.Target>
                    <Text
                      size={"xs"}
                      variant="gradient"
                      gradient={{ from: "orange", to: "yellow", deg: 190 }}
                      fw={600}
                      tt={"uppercase"}
                    >
                      Muhammad Osama Iftikhar
                    </Text>
                  </Menu.Target>
                </Stack>

                <Menu.Dropdown w={300}>
                  {links.map((link, index) => (
                    <Menu.Item
                      key={index}
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
                  ))}
                </Menu.Dropdown>
              </Menu>
            ) : (
              <Group>
                <ThemeToggle />
                <Avatar radius={50} size={"lg"} src={osama} />
              </Group>
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
