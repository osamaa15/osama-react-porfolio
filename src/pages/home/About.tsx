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
  IconAbc,
  IconActivity,
  IconBook,
  IconBug,
  IconCode,
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
            <Blockquote mt="xl" icon={<IconZoomQuestion />}>
              <Title size={"h4"}>
                What I{" "}
                <Text span inherit c={"#F08C00"} td={"underline"}>
                  Do?
                </Text>
              </Title>
              <br />
              <Timeline active={3} bulletSize={24} lineWidth={2}>
                <Timeline.Item
                  bullet={<IconBug size={24} />}
                  title="Software Quality Assurance (Automation | Manual) "
                >
                  <Text c="dimmed" size="sm">
                    I work in web quality assurance, manually and automatically
                    testing websites to ensure a smooth user experience. This
                    involves clicking through pages, filling out forms, trying
                    different functionalities, and writing and running automated
                    scripts to identify any bugs, glitches, or areas for
                    improvement. My goal is to catch any issues before they
                    reach real users, helping to deliver polished and
                    user-friendly websites efficiently and effectively.
                  </Text>
                </Timeline.Item>
                <Timeline.Item
                  bullet={<IconCode size={24} />}
                  title="Web Development"
                >
                  <Text c="dimmed" size="sm">
                    In addition to Quality Assurance, I build user interfaces
                    for the web using React. It allows me to create interactive
                    and dynamic applications that provide a great user
                    experience.
                  </Text>
                </Timeline.Item>
                <Timeline.Item
                  bullet={<IconAbc size={24} />}
                  title="Content Creation and Others"
                >
                  <Text c="dimmed" size="sm">
                    I excel in content writing,data entry, crafting engaging,
                    clear, and impactful content tailored to diverse audiences
                    and platforms. My expertise in video editing enables me to
                    create polished, visually compelling videos that effectively
                    communicate messages or tell stories. Additionally, I
                    specialize in software documentation, including producing
                    detailed Software Requirement Specifications (SRS) that
                    provide clear, structured, and comprehensive guidelines to
                    support development and project goals. My creative and
                    professional skill set complements my technical expertise,
                    ensuring well-rounded contributions to any project.
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
                  title="Turing Nova LLP, SQA Analyst"
                >
                  <Text c="dimmed" size="sm" tt={"uppercase"}>
                    2023 - present
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
                  title="Intelliware Software Solutions, React Developer"
                >
                  <Text c="dimmed" size="sm" tt={"uppercase"}>
                    2021 - 2022
                  </Text>
                  <List size="sm">
                    <List.Item>
                      Designing and implementing visually appealing and user
                      friendly interfaces using React best practices.
                    </List.Item>
                    <List.Item>
                      Writing clean, maintainable, and reusable code that
                      follows web standards and adheres to React coding
                      conventions.
                    </List.Item>
                    <List.Item>
                      Developing product features and functionalities using
                      React components, services, directives, pipes, and
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
                      in web development and React ecosystem.
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
