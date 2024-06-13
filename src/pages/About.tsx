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
          <br />I am a versatile and proficient manual tester (QA Analyst) in
          SQA. Additionally, I have extensive experience in software
          development, particularly proficient in React and Angular.
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
                <Text variant="link" component="span" inherit>
                  I work in web quality assurance, manually testing websites to
                  ensure a smooth user experience. This means I click through
                  pages, fill out forms, and try different functionalities to
                  identify any bugs, glitches, or areas for improvement. My goal
                  is to catch any issues before they reach real users, helping
                  to deliver polished and user-friendly websites.
                </Text>
              </Text>
            </Timeline.Item>
            <Timeline.Item
              bullet={<IconCode size={24} />}
              title="Web Developement "
            >
              <Text c="dimmed" size="sm">
                <Text variant="link" component="span" inherit>
                  In addition to Quality Assurance, I build user interfaces for
                  the web using React. It allows me to create interactive and
                  dynamic applications that provide a great user experience.
                </Text>
              </Text>
            </Timeline.Item>
          </Timeline>
        </Blockquote>
      </Group>
    </Stack>
  );
}

export default About;
