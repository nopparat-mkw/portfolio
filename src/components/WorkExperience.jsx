import styled, { keyframes } from "styled-components";

const workData = [
  {
    id: 4,
    company: "@ Yuanta Securities (Thailand) Company Limited",
    positions: [{ id: 1, position: "System Analyst", exp: "February 2024 to present" }],
  },
  {
    id: 3,
    company: "@ Krungsri Consumer Company Limited",
    positions: [
      { id: 1, position: "System Analyst & Developer", exp: "November 2021 - January 2024" },
      { id: 2, position: "Java Programmer (Orion Information Technology Co., Ltd. - Contract)", exp: "September 2020 - October 2021" },
    ],
  },
  {
    id: 2,
    company: "@ Yuanta Securities (Thailand) Company Limited",
    positions: [{ id: 1, position: "System Analyst & Developer", exp: "August 2018 - August 2020" }],
  },
  {
    id: 1,
    company: "@ 9PI COMPANY | BANGKOK",
    positions: [
      { id: 3, position: "Senior Software Developer / Team Lead", exp: "June 2017 - July 2018" },
      { id: 2, position: "Software Developer", exp: "June 2016 - June 2017" },
      { id: 1, position: "Junior Software Developer", exp: "June 2015 - June 2016" },
    ],
  },
];

const trainingData = [
	"React JS",
	"React Redux + Redux Thunk",
	"CSS Framework Styled-component",
	"Deploy React to github page",
	"Basic git command",
	"Use Intellij IDE, webstorm ide",
	"CI/CD auto deploy react to gitlab page",
	"Java Spring Structure",
	"Writing Java Spring JPA + Hibernate",
	"Java Spring With Restful Web Service",
	"Structure request response between frontend and backend"
];

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const WorkExperience = () => {
  return (
    <FadeIn>
      <WorkExperienceContainer>
        <HeaderText id="work-title">Work Experience</HeaderText>

        <CompanyList aria-labelledby="work-title">
          {workData.map((company) => (
            <CompanyItem key={company.id}>
              <CompanyName>{company.company}</CompanyName>

              <PositionList>
                {company.positions.map((p, idx) => (
                  <PositionItem key={`${company.id}-${p.id}-${idx}`}>
                    <PositionTitle>{p.position}</PositionTitle>
                    <PositionExp>{p.exp}</PositionExp>
                  </PositionItem>
                ))}
              </PositionList>
            </CompanyItem>
          ))}
        </CompanyList>

        {trainingData.length > 0 && (
          <>
            <HeaderText id="training-title">Employee Training Experience</HeaderText>
            <TrainingList aria-labelledby="training-title">
              {trainingData.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </TrainingList>
          </>
        )}
      </WorkExperienceContainer>
    </FadeIn>
  );
};

const FadeIn = styled.div`
  animation: ${fadeIn} 0.35s ease-out both;
`;

export const WorkExperienceContainer = styled.section``;

export const HeaderText = styled.h1`
  font-style: italic;
  margin: 0 0 16px 0;
`;

const CompanyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const CompanyItem = styled.article``;

const CompanyName = styled.h2`
  margin: 0 0 8px 0;
  font-size: 1.05em;
`;

const PositionList = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
`;

const PositionItem = styled.li`
  margin-bottom: 10px;
`;

const PositionTitle = styled.div`
  font-weight: 600;
`;

const PositionExp = styled.div`
  opacity: 0.9;
  font-size: 0.95em;
`;

const TrainingList = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
`;

export default WorkExperience;
