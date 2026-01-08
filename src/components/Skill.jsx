import styled, { keyframes } from "styled-components";

const skillData = [
  {
    id: 1,
    title: "Backend",
    skills: [
      "C#",
      "Java OOPS",
      "SQL, MySQL, Oracle, Postgresql",
      "Maven 3.5",
      "Java Spring",
      "Java Spring Boot 1.x, 2.x, 3.x",
      "Hibernate",
      "RestFul Web Service",
      "Socket.io",
      "Node JS",
      "Unit Test",
    ],
  },
  {
    id: 2,
    title: "Frontend",
    skills: [
      "Angular",
      "C# Razor",
      "React JS",
      "ES6",
      "React Redux",
      "React thunk",
      "Unit Test",
      "Material-ui",
      "Ant Design",
      "HTML",
      "Javascript",
      "styled-components",
    ],
  },
  {
    id: 3,
    title: "Cloud",
    skills: ["AWS", "AWS Lambda", "AWS EKS", "AWS SNS", "AWS SQS", "Google Cloud"],
  },
  {
    id: 4,
    title: "Server",
    skills: [
      "Digital Ocean",
      "Ubuntu 16.04",
      "Firebase Hosting",
      "Heroku Hosting",
      "Apache Tomcat",
      "Nginx",
    ],
  },
  {
    id: 5,
    title: "Other",
    skills: ["Kafka", "Kong", "Google API", "Github", "Bitbucket", "Gitlab", "Firebase database", "Firebase function", "Omise", "JWT"],
  },
];

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Skill = () => {
  return (
    <FadeIn>
      <SkillContainer aria-labelledby="skill-title">
        <HeaderText id="skill-title">Skill</HeaderText>

        <SkillContent>
          {skillData.map((group) => (
            <SkillColumn key={group.id}>
              <GroupTitle>{group.title}</GroupTitle>
              <UL>
                {group.skills.map((skill) => (
                  <LI key={`${group.id}-${skill}`}>{skill}</LI>
                ))}
              </UL>
            </SkillColumn>
          ))}
        </SkillContent>
      </SkillContainer>
    </FadeIn>
  );
};

const FadeIn = styled.div`
  animation: ${fadeIn} 0.35s ease-out both;
`;

const SkillContainer = styled.section``;

const HeaderText = styled.h1`
  font-style: italic;
  margin: 0 0 16px 0;
`;

const SkillContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SkillColumn = styled.article`
  box-sizing: border-box;
  padding: 10px;
  margin: 10px;
  width: 100%;
`;

const GroupTitle = styled.h2`
  margin: 0 0 10px 0;
`;

const UL = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
`;

const LI = styled.li`
  margin-bottom: 10px;
`;

export default Skill;
