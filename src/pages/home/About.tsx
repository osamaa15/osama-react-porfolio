import {
  Title,
  Text,
  Stack,
  Blockquote,
  Group,
  Timeline,
  List,
  Transition,
} from "@mantine/core";
import {
  IconActivity,
  IconBook,
  IconBug,
  IconCode,
  IconInfoCircle,
  IconZoomQuestion,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";

function About() {
  // Hooks
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  // Handle Functions

  // Template
  return (
    <Transition
      mounted={mount}
      transition="fade-right"
      duration={3000}
      timingFunction="ease"
    >
      {(styles) => (
        <Stack style={styles}>
          <Title tt={"uppercase"} td={"underline"} ta={"center"}>
            About{" "}
            <Text span inherit c={"#F08C00"} td={"underline"}>
              Me
            </Text>
          </Title>
          <Group>
            <Blockquote mt="xl" icon={<IconInfoCircle />}>
              <Title size={"h4"}>
                I'm Muhammad Osama Iftikhar,{" "}
                <Text span inherit c={"#F08C00"} td={"underline"}>
                  QA Analyst | Frontend Developer
                </Text>
              </Title>
              <br />
              <Text c="dimmed">
                I'm not just your average QA Analyst; I'm a many-sided
                professional with a deep passion for ensuring software quality.
                My expertise lies in the art of manual testing, where I excel at
                regardfully inspect applications to uncover even the most cagey
                bugs. My experience goes beyond just finding flaws; I possess a
                keen understanding of Software Quality Assurance (SQA)
                principles, allowing me to strategize and implement effective
                testing methodologies. But my skillset doesn't stop there. I'm
                also a proficient software developer, with a particular fondness
                for the power and flexibility of React. This unique blend of
                qualities makes me a true asset to any development team. My
                understanding of the development process allows me to approach
                testing from a developer's perspective, anticipating potential
                issues and crafting tests that truly challenge the software's
                functionality.
              </Text>
            </Blockquote>
          </Group>
          <Group>
            <Blockquote mt="xl" icon={<IconZoomQuestion />}>
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
                    I work in web quality assurance, manually testing websites
                    to ensure a smooth user experience. This means I click
                    through pages, fill out forms, and try different
                    functionalities to identify any bugs, glitches, or areas for
                    improvement. My goal is to catch any issues before they
                    reach real users, helping to deliver polished and
                    user-friendly websites.
                  </Text>
                </Timeline.Item>
                <Timeline.Item
                  bullet={<IconCode size={24} />}
                  title="Web Developement "
                >
                  <Text c="dimmed" size="sm">
                    In addition to Quality Assurance, I build user interfaces
                    for the web using React. It allows me to create interactive
                    and dynamic applications that provide a great user
                    experience.
                  </Text>
                </Timeline.Item>
              </Timeline>
            </Blockquote>
            <Blockquote mt="xl" icon={<IconBook />}>
              <Title size={"h4"}>
                Work{" "}
                <Text span inherit c={"#F08C00"} td={"underline"}>
                  Experience
                </Text>
              </Title>
              <br />
              <Timeline active={2} bulletSize={24} lineWidth={2}>
                <Timeline.Item
                  bullet={<IconActivity size={24} />}
                  title="Intelligent Software Solutions, QA Analyst"
                >
                  <Text c="dimmed" size="sm" tt={"uppercase"}>
                    2024 - present
                  </Text>
                  <List size="sm">
                    <List.Item>
                      Conduct thorough code reviews of front-end development to
                      ensure adherence to coding standards, best practices, and
                      design specifications. Identify and address any code
                      issues related to UI/UX, performance, and responsiveness.
                    </List.Item>
                    <List.Item>
                      Develop and execute comprehensive test plans for front-end
                      components, including functional, regression, and
                      integration testing. Implement and maintain automated
                      testing processes for front-end code using testing
                      frameworks and tools.
                    </List.Item>
                    <List.Item>
                      Ensure the compatibility of front-end code across various
                      browsers and devices, addressing any inconsistencies or
                      issues that may arise. Conduct responsive design testing
                      to guarantee a consistent user experience on different
                      screen sizes.
                    </List.Item>
                    <List.Item>
                      Collaborate with front-end developers to identify and
                      address performance bottlenecks in the user interface.
                      Implement optimization strategies to enhance the speed and
                      efficiency of web applications.
                    </List.Item>
                    <List.Item>
                      Verify and enforce adherence to web accessibility
                      standards (e.g., WCAG) to ensure that web applications are
                      usable by individuals with disabilities. Conduct
                      accessibility testing and collaborate with developers to
                      make necessary adjustments.
                    </List.Item>
                    <List.Item>
                      Utilize issue tracking systems to log and monitor defects,
                      ensuring that identified issues are addressed promptly.
                      Generate and maintain detailed reports on testing
                      progress, results, and any identified issues.
                    </List.Item>
                    <List.Item>
                      Work closely with front-end developers and other team
                      members to understand design specifications and functional
                      requirements. Participate in agile or other development
                      methodologies to integrate QA processes seamlessly into
                      the development lifecycle.
                    </List.Item>
                    <List.Item>
                      Stay updated on industry trends, emerging technologies,
                      and best practices in front-end development and quality
                      assurance. Implement continuous improvement initiatives to
                      enhance the efficiency and effectiveness of QA processes.
                    </List.Item>
                    <List.Item>
                      Create and maintain documentation for testing processes,
                      test cases, and quality assurance standards.
                    </List.Item>
                    <List.Item>
                      Provide clear and detailed documentation on identified
                      issues, testing results, and resolution steps.
                    </List.Item>
                    <List.Item>
                      Evaluate the overall user experience and provide feedback
                      to improve the design and usability of front-end
                      interfaces.
                    </List.Item>
                    <List.Item>
                      Collaborate with UX/UI designers to ensure the alignment
                      of visual and interactive elements with design guidelines.
                    </List.Item>
                  </List>
                </Timeline.Item>
                <Timeline.Item
                  bullet={<IconActivity size={24} />}
                  title="Intelligent Software Solutions, Frontend Developer"
                >
                  <Text c="dimmed" size="sm" tt={"uppercase"}>
                    2021 - present
                  </Text>
                  <List size="sm">
                    <List.Item>
                      Designing and implementing visually appealing and
                      userfriendly interfaces using Angular best practices.
                    </List.Item>
                    <List.Item>
                      Writing clean, maintainable, and reusable code that
                      follows web standards and adheres to Angular coding
                      conventions.
                    </List.Item>
                    <List.Item>
                      Developing product features and functionalities using
                      Angular components, services, directives, pipes, and
                      modules.
                    </List.Item>
                    <List.Item>
                      Integrating data from various back-end services and
                      databases using REST APIs and HTTP requests.
                    </List.Item>
                    <List.Item>
                      Debugging and troubleshooting issues across multiple
                      browsers and devices.
                    </List.Item>
                    <List.Item>
                      Working with version control tools such as Git and
                      collaborating with other developers using agile
                      methodologies.
                    </List.Item>
                    <List.Item>
                      Keeping up to date with the latest trends and technologies
                      in web development and Angular ecosystem.
                    </List.Item>
                  </List>
                </Timeline.Item>
                <Timeline.Item
                  bullet={<IconActivity size={24} />}
                  title="Virtual University of Pakistan, Information Desk Officer (VMTN-01)"
                >
                  <Text c="dimmed" size="sm" tt={"uppercase"}>
                    2019 – 2020
                  </Text>
                  <List size="sm">
                    <List.Item>
                      Must be familiar with the university and its various
                      departments.
                    </List.Item>
                    <List.Item>
                      Ability to display strong customer service skills.
                    </List.Item>
                    <List.Item>
                      Ability to communicate effectively and tactfully.
                    </List.Item>
                    <List.Item>
                      Must be able to use a computer and a phone effectively.
                    </List.Item>
                    <List.Item>
                      Properly report and document all concerns and issues to
                      Management and in the shift log.
                    </List.Item>
                    <List.Item>
                      Answers inquiries about the University by phone, in
                      person, and by email; responds to problems and needs.
                    </List.Item>
                  </List>
                </Timeline.Item>
              </Timeline>
            </Blockquote>
          </Group>
        </Stack>
      )}
    </Transition>
  );
}

export default About;
