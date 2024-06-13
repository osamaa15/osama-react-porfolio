import { Title, Text, Stack, Blockquote, Group, Timeline } from "@mantine/core";
import {
  IconBug,
  IconCode,
  IconInfoCircle,
  IconZoomQuestion,
} from "@tabler/icons-react";

function About() {
  return (
    <Stack>
      <Title tt={"uppercase"} td={"underline"}>
        About{" "}
        <Text span inherit c={"#F08C00"} td={"underline"}>
          Me
        </Text>
      </Title>
      <Group>
        <Blockquote mt="xl" icon={<IconInfoCircle />} radius={"lg"}>
          <Title size={"h4"}>
            I'm Muhammad Osama Iftikhar,{" "}
            <Text span inherit c={"#F08C00"} td={"underline"}>
              QA Analyst | Frontend Developer
            </Text>
          </Title>
          <br />
          <Text c="dimmed">
            I'm not just your average QA Analyst; I'm a many-sided professional
            with a deep passion for ensuring software quality. My expertise lies
            in the art of manual testing, where I excel at regardfully inspect
            applications to uncover even the most cagey bugs. My experience goes
            beyond just finding flaws; I possess a keen understanding of
            Software Quality Assurance (SQA) principles, allowing me to
            strategize and implement effective testing methodologies. But my
            skillset doesn't stop there. I'm also a proficient software
            developer, with a particular fondness for the power and flexibility
            of React. This unique blend of qualities makes me a true asset to
            any development team. My understanding of the development process
            allows me to approach testing from a developer's perspective,
            anticipating potential issues and crafting tests that truly
            challenge the software's functionality.
          </Text>
        </Blockquote>
      </Group>
      <Group>
        <Blockquote mt="xl" icon={<IconZoomQuestion />} radius={"lg"}>
          <Title size={"h4"}>
            What I{" "}
            <Text span inherit c={"#F08C00"} td={"underline"}>
              Do?
            </Text>
          </Title>
          <br />
          <Timeline active={1} bulletSize={24} lineWidth={2}>
            <Timeline.Item
              bullet={<IconBug size={24} />}
              title="Quality Assurance"
            >
              <Text c="dimmed" size="sm">
                I work in web quality assurance, manually testing websites to
                ensure a smooth user experience. This means I click through
                pages, fill out forms, and try different functionalities to
                identify any bugs, glitches, or areas for improvement. My goal
                is to catch any issues before they reach real users, helping to
                deliver polished and user-friendly websites.
              </Text>
            </Timeline.Item>
            <Timeline.Item
              bullet={<IconCode size={24} />}
              title="Web Developement "
            >
              <Text c="dimmed" size="sm">
                In addition to Quality Assurance, I build user interfaces for
                the web using React. It allows me to create interactive and
                dynamic applications that provide a great user experience.
              </Text>
            </Timeline.Item>
          </Timeline>
        </Blockquote>
      </Group>
    </Stack>
  );
}

export default About;
