import styled, { keyframes } from "styled-components";

const educationData = [
  {
    id: 1,
    major: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
    university: "MAEJO UNIVERSITY",
    year: "2010 - 2015",
  },
  {
    id: 2,
    major: "CERTIFICATE OF VOCATIONAL EDUCATION IN SURVEYING",
    university: "PHRAE TECHNICAL COLLEGE",
    year: "2007 - 2010",
  },
];

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Education = () => {
  return (
    <FadeIn>
      <EducationContainer aria-labelledby="education-title">
        <HeaderText id="education-title">Education</HeaderText>

        {educationData.map((item) => (
          <EducationBlock key={item.id}>
            <EducationName>- {item.major}</EducationName>
            <EducationYear>
              <ul>
                <li>
                  {item.university} @ {item.year}
                </li>
              </ul>
            </EducationYear>
          </EducationBlock>
        ))}
      </EducationContainer>
    </FadeIn>
  );
};

const FadeIn = styled.div`
  animation: ${fadeIn} 0.35s ease-out both;
`;

const EducationContainer = styled.section``;

const EducationBlock = styled.div`
  margin-bottom: 30px;
`;

const EducationName = styled.h2`
  font-size: 1em;
  font-weight: 600;
  margin: 0 0 6px 0;
`;

const EducationYear = styled.div``;

const HeaderText = styled.h1`
  font-style: italic;
`;

export default Education;
